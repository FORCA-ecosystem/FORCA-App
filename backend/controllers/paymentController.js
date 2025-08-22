import { Payment, Mission, User } from '../models/index.js';

/**
 * [POST] /api/payments/deposit-escrow
 * Le client dépose un montant en séquestre pour une mission.
 * Body: { missionId, amount }
 * Auth: client uniquement
 */
export const depositEscrow = async (req, res, next) => {
  try {
    const { missionId, amount } = req.body;
    if (!missionId || !amount) return res.status(400).json({ error: 'missionId et amount requis.' });

    const mission = await Mission.findByPk(missionId);
    if (!mission) return res.status(404).json({ error: 'Mission non trouvée.' });
    if (mission.client_id !== req.user.id) return res.status(403).json({ error: 'Accès interdit.' });

    const payment = await Payment.create({
      mission_id: missionId,
      amount,
      status: 'pending',
      type: 'credit',
      sender_id: req.user.id,
      receiver_id: process.env.ESCROW_ACCOUNT_ID
    });

    res.status(201).json({ message: 'Montant déposé en séquestre.', payment });
  } catch (err) {
    next(err);
  }
};

/**
 * [PUT] /api/missions/:id/complete (suite du middleware completeMission)
 * Libère les fonds du compte séquestre au freelance et met à jour stats du freelance.
 * Auth: client uniquement
 */
export const releaseFunds = async (req, res, next) => {
  try {
    const mission = req.mission;
    if (!mission) return res.status(400).json({ error: 'Mission non trouvée pour paiement.' });

    // Retrouver le paiement en séquestre
    const escrowPayment = await Payment.findOne({
      where: {
        mission_id: mission.id,
        status: 'pending',
        type: 'credit',
        receiver_id: process.env.ESCROW_ACCOUNT_ID
      }
    });
    if (!escrowPayment) return res.status(404).json({ error: 'Aucun paiement séquestre trouvé.' });

    // Marquer en completed et créer le paiement freelance
    escrowPayment.status = 'completed';
    await escrowPayment.save();

    const paymentToFreelance = await Payment.create({
      mission_id: mission.id,
      amount: escrowPayment.amount,
      status: 'completed',
      type: 'debit',
      sender_id: process.env.ESCROW_ACCOUNT_ID,
      receiver_id: mission.freelance_id
    });

    // Maj revenus du freelance
    const freelance = await User.findByPk(mission.freelance_id);
    if (freelance) {
      freelance.stats = {
        ...freelance.stats,
        revenusGeneres: (freelance.stats.revenusGeneres || 0) + escrowPayment.amount,
        missionsTerminees: (freelance.stats.missionsTerminees || 0) + 1
      };
      await freelance.save();
    }

    res.json({ message: 'Mission terminée, fonds libérés au freelance.', payment: paymentToFreelance });
  } catch (err) {
    next(err);
  }
};

/**
 * [GET] /api/users/me/payments
 * Retourne l’historique des paiements liés à l’utilisateur connecté.
 */
export const getUserPayments = async (req, res, next) => {
  try {
    const payments = await Payment.findAll({
      where: {
        [Op.or]: [
          { sender_id: req.user.id },
          { receiver_id: req.user.id }
        ]
      },
      order: [['date', 'DESC']]
    });
    res.json(payments);
  } catch (err) {
    next(err);
  }
};