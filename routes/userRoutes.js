import { showAllUser, register, login } from '../controllers/userController.js';
import { Router } from 'express';

const router = Router();

router.get('/', showAllUser);
router.post('/register', register);
router.post('/login', login);

export default router;




