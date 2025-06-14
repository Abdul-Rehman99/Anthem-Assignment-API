import express from 'express';
import { getMemberships } from '../controllers/membership.controller.js';

const router = express.Router();

router.get('/', getMemberships);

export default router;
