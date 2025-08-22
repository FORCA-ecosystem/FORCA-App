import { Mission, User } from '../models/index.js';

/**
 * [POST] /api/missions/:id/propose
 * Un freelance propose sur une mission ouverte.
 * Body: { montant, message }
 * Auth: freelance uniquement
 */
export const proposeMission = async (req, res, next) => {
  try {
    if (req.user.role !== 'freelance') return res.status(403).json({ error: 'Accès réservé aux freelances.' });

    const mission = await Mission.findByPk(req.params.id);
    if (!mission) return res.status(404).json({ error: 'Mission non trouvée.' });
    if (mission.status !== 'open') return res.status(400).json({ error: 'Mission non ouverte aux propositions.' });

    // Empêcher double proposition sur la même mission par le même freelance
    if (mission.propositions.some(p => p.freelanceId === req.user.id)) {
      return res.status(400).json({ error: 'Vous avez déjà proposé sur cette mission.' });
    }

    const { montant, message } = req.body;
    if (!montant || !message) return res.status(400).json({ error: 'Champs montant et message requis.' });

    mission.propositions.push({
      freelanceId: req.user.id,
      montant,
      message,
      date: new Date()
    });
    await mission.save();
    res.json({ message: 'Proposition envoyée.' });
  } catch (err) {
    next(err);
  }
};

/**
 * [PUT] /api/missions/:id/assign
 * Le client assigne un freelance à sa mission.
 * Body: { freelanceId }
 * Auth: client propriétaire de la mission uniquement
 */
export const assignMission = async (req, res, next) => {
  try {
    const mission = await Mission.findByPk(req.params.id);
    if (!mission) return res.status(404).json({ error: 'Mission non trouvée.' });
    if (mission.client_id !== req.user.id) return res.status(403).json({ error: 'Accès interdit.' });
    if (mission.status !== 'open') return res.status(400).json({ error: 'Mission non assignable.' });

    const { freelanceId } = req.body;
    // Vérifier que le freelance a bien proposé
    if (!mission.propositions.some(p => p.freelanceId === freelanceId)) {
      return res.status(400).json({ error: 'Ce freelance n\'a pas proposé sur cette mission.' });
    }

    mission.freelance_id = freelanceId;
    mission.status = 'en_cours';
    await mission.save();
    res.json({ message: 'Mission assignée au freelance.' });
  } catch (err) {
    next(err);
  }
};

/**
 * [POST] /api/missions/:id/message
 * Client et freelance assigné peuvent échanger des messages sur la mission.
 * Body: { to, message }
 * Auth: client ou freelance assigné à la mission
 */
export const postMissionMessage = async (req, res, next) => {
  try {
    const mission = await Mission.findByPk(req.params.id);
    if (!mission) return res.status(404).json({ error: 'Mission non trouvée.' });

    // Seuls client et freelance assigné peuvent poster
    const isAllowed = [mission.client_id, mission.freelance_id].includes(req.user.id);
    if (!isAllowed) return res.status(403).json({ error: 'Non autorisé.' });

    const { to, message } = req.body;
    if (!to || !message) return res.status(400).json({ error: 'Champs to et message requis.' });

    mission.messages.push({
      from: req.user.id,
      to,
      message,
      date: new Date()
    });
    await mission.save();
    res.json({ message: 'Message envoyé.' });
  } catch (err) {
    next(err);
  }
};

/**
 * [GET] /api/missions/:id/messages
 * Récupère l’historique des messages d’une mission.
 * Auth: client ou freelance assigné uniquement
 */
export const getMissionMessages = async (req, res, next) => {
  try {
    const mission = await Mission.findByPk(req.params.id);
    if (!mission) return res.status(404).json({ error: 'Mission non trouvée.' });

    const isAllowed = [mission.client_id, mission.freelance_id].includes(req.user.id);
    if (!isAllowed) return res.status(403).json({ error: 'Non autorisé.' });

    res.json(mission.messages || []);
  } catch (err) {
    next(err);
  }
};

/**
 * [PUT] /api/missions/:id/complete
 * Le client marque la mission comme terminée et libère les fonds.
 * Auth: client propriétaire uniquement, mission en_cours
 */
export const completeMission = async (req, res, next) => {
  try {
    const mission = await Mission.findByPk(req.params.id);
    if (!mission) return res.status(404).json({ error: 'Mission non trouvée.' });
    if (mission.client_id !== req.user.id) return res.status(403).json({ error: 'Accès interdit.' });
    if (mission.status !== 'en_cours') return res.status(400).json({ error: 'Mission non en cours.' });

    mission.status = 'completed';
    await mission.save();

    req.mission = mission; // Pour la suite du flux de paiement (voir paymentController)
    next(); // Passe au contrôleur payment releaseFunds
  } catch (err) {
    next(err);
  }
};