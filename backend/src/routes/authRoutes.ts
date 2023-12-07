import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.createUser)

export default router;
