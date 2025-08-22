import express from 'express';
import { rateFreelance, listImpacts } from '../controllers/impactController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', auth, rateFreelance);
router.get('/', auth, listImpacts);

export default router;