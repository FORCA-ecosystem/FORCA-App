import express from 'express';
import auth from '../middlewares/auth.js';
import {
  proposeMission,
  assignMission,
  postMissionMessage,
  getMissionMessages,
  completeMission
} from '../controllers/missionController.js';
import { releaseFunds } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/:id/propose', auth, proposeMission);
router.put('/:id/assign', auth, assignMission);
router.post('/:id/message', auth, postMissionMessage);
router.get('/:id/messages', auth, getMissionMessages);
// Chaine de middlewares pour terminer la mission et libérer les fonds
router.put('/:id/complete', auth, completeMission, releaseFunds);

export default router;