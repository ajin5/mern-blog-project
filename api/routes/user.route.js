import express from 'express';
import {test, updateUser, deleteUser, signOut, getUsers} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { comme } from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId',verifyToken, updateUser)
router.delete('/delete/:userId',verifyToken, deleteUser)
router.post('/signout', signOut)
router.get('/getusers', verifyToken, getUsers)
router.get('/:userid', getUsers)



export default router;