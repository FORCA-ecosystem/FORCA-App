import { Impact, Mission, User } from '../models/index.js';

/**
 * POST /api/missions/:id/rate
 * Permet à un client de noter un freelance sur une mission terminée.
 * Body attendu : { note, commentaire }
 * Auth : client (propriétaire de la mission) uniquement
 */
export const rateFreelance = async (req, res, next) => {
  try {
    const { note, commentaire } = req.body;
    const missionId = req.params.id;

    // 1. Valider la mission
    const mission = await Mission.findByPk(missionId);
    if (!mission) return res.status(404).json({ error: "Mission non trouvée." });
    if (mission.client_id !== req.user.id) return res.status(403).json({ error: "Accès interdit." });
    if (mission.status !== "completed" && mission.status !== "terminee")
      return res.status(400).json({ error: "Impossible de noter une mission non terminée." });
    if (!mission.freelance_id)
      return res.status(400).json({ error: "Aucun freelance n'est assigné à cette mission." });

    // 2. Vérifier qu'il n'existe pas déjà une note pour cette mission
    const existingImpact = await Impact.findOne({
      where: { missionId: mission.id, clientId: req.user.id }
    });
    if (existingImpact)
      return res.status(400).json({ error: "Vous avez déjà noté cette mission." });

    // 3. Créer la note
    const impact = await Impact.create({
      missionId: mission.id,
      freelanceId: mission.freelance_id,
      clientId: req.user.id,
      note,
      commentaire
    });

    // 4. Mettre à jour les stats du freelance
    const freelance = await User.findByPk(mission.freelance_id);
    if (freelance) {
      // Récupérer toutes les notes reçues
      const allImpacts = await Impact.findAll({ where: { freelanceId: freelance.id } });
      const notesRecues = allImpacts.map(i => i.note);
      freelance.stats = {
        ...freelance.stats,
        notesRecues,
        averageRating: notesRecues.length
          ? (notesRecues.reduce((a, b) => a + b, 0) / notesRecues.length).toFixed(2)
          : null
      };
      await freelance.save();
    }

    res.status(201).json({ message: "Notation enregistrée.", impact });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/users/:id/impacts
 * Récupère toutes les notes reçues par un freelance + résumé stats (missions terminées, moyenne, etc.)
 * Public (ou à restreindre selon besoin)
 */
export const getUserImpacts = async (req, res, next) => {
  try {
    const freelanceId = req.params.id;
    const freelance = await User.findByPk(freelanceId);
    if (!freelance) return res.status(404).json({ error: "Freelance non trouvé." });

    const impacts = await Impact.findAll({
      where: { freelanceId },
      order: [['date', 'DESC']]
    });

    const stats = {
      missionsTerminees: freelance.stats?.missionsTerminees || 0,
      averageRating: freelance.stats?.averageRating || null,
      notesRecues: freelance.stats?.notesRecues || [],
    };

    res.json({ impacts, stats });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/users/me/impacts
 * Récupère les impacts (notes) du freelance connecté
 */
export const getMyImpacts = async (req, res, next) => {
  try {
    const freelanceId = req.user.id;
    const freelance = await User.findByPk(freelanceId);
    if (!freelance) return res.status(404).json({ error: "Freelance non trouvé." });

    const impacts = await Impact.findAll({
      where: { freelanceId },
      order: [['date', 'DESC']]
    });

    const stats = {
      missionsTerminees: freelance.stats?.missionsTerminees || 0,
      averageRating: freelance.stats?.averageRating || null,
      notesRecues: freelance.stats?.notesRecues || [],
    };

    res.json({ impacts, stats });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/missions/:id/impact
 * Récupère la note et les commentaires associés à une mission si elle a été notée
 */
export const getMissionImpact = async (req, res, next) => {
  try {
    const mission = await Mission.findByPk(req.params.id);
    if (!mission) return res.status(404).json({ error: "Mission non trouvée." });

    const impact = await Impact.findOne({
      where: { missionId: mission.id }
    });
    if (!impact) return res.status(404).json({ error: "Aucune note pour cette mission." });

    res.json(impact);
  } catch (err) {
    next(err);
  }
};