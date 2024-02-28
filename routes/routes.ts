import express from 'express';
import { device } from '../controllers/controller';

const router = express.Router();

router.post('/device', device);

export default router;

