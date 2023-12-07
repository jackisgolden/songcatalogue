import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.post('/users', userController.createUser);
router.delete('/users/:userId', userController.deleteUser);
router.put('/users/:userId/password', userController.changePassword);

export default router;
