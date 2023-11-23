import express from 'express';
import { createUser, addChannelToUser } from '../controllers/usersControllers.js';

const router = express.Router();

router.post('/users', createUser);
router.put('/users/:username/channels', addChannelToUser);

export default router;
