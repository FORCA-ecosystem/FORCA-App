import express from 'express';
import auth from '../middlewares/auth.js';
import {
  rateFreelance,
  getUserImpacts,
  getMyImpacts,
  getMissionImpact
} from '../controllers/impactController.js';

const router = express.Router();

// Notation d'une mission par le client
router.post('/missions/:id/rate', auth, rateFreelance);

// Voir toutes les notes reçues par un freelance (profil public)
router.get('/users/:id/impacts', getUserImpacts);

// Voir ses propres notes en tant que freelance
router.get('/users/me/impacts', auth, getMyImpacts);

// Voir l'impact d'une mission donnée
router.get('/missions/:id/impact', getMissionImpact);

export default router;