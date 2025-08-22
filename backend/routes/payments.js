import express from 'express';
import auth from '../middlewares/auth.js';
import { depositEscrow, getUserPayments } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/deposit-escrow', auth, depositEscrow);
router.get('/user', auth, getUserPayments);

export default router;