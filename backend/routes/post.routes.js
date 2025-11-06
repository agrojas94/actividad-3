
import { Router } from 'express';
import { list, create } from '../controllers/post.controller.js';
import { authMiddleware } from '../controllers/auth.controller.js';
const router = Router();

router.get('/', list);
router.post('/', authMiddleware, create);

export default router;
