import express from 'express';

import { addChannel } from '../controllers/channelsControllers.js';

const router = express.Router();

router.post('/channels', addChannel);

export default router;
