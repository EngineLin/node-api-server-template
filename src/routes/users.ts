import express from 'express';

import userController from '../controllers/user'

const router = express.Router();

/* GET users listing. */
router.get('/', userController.getUsers);

export default router;
