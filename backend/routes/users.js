import express from 'express';
import { getMyProfile, getUserProfile } from '../controllers/userController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/me', auth, getMyProfile);
router.get('/:id', getUserProfile);

export default router;