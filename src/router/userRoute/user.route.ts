import express from 'express';
import {
	createUser,
	getAllAdmin,
	getUserById,
} from '../../controller/userController/user.controller';

const router = express.Router();

router.get('/', (req, res) => {
	res.json('Hello world');
});
router.get('/getAdmin', getAllAdmin);
router.get('/:id', getUserById);
router.post('/', createUser);

export default router;
