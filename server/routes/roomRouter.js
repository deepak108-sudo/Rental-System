import { Router } from 'express';

import { createRoom } from '../controllers/room.js';
import auth from '../middleware/auth.js';
import { getRooms } from '../controllers/room.js';

const roomRouter = Router();
roomRouter.post('/', auth, createRoom);
roomRouter.get('/', getRooms);
export default roomRouter;