import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.post('/playlists]', userController.getPlaylists);

export default router;
