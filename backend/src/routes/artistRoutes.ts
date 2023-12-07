import express from 'express';
import * as artistController from '../controllers/artistController';

const router = express.Router();

router.get('/artist/:id', artistController.createUser);
router.get('/album/:id')

export default router;
