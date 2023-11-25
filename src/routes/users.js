import express from 'express';
import { createUser, addChannelToUser, getUserChannelsFeeds } from '../controllers/usersControllers.js';

const router = express.Router();

router.post('/users', createUser);
router.put('/users/:username/channels', addChannelToUser);
router.get('/users/:username/channels', getUserChannelsFeeds);

export default router;
