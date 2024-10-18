import express, { Router } from 'express';
import { getAllUsers, addUser, updateUser, deleteUser } from '../controller/userController.mjs';

const userRouter = express.Router();


userRouter.get('/user', getAllUsers);
userRouter.post('/user', addUser);
userRouter.put('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);

export default userRouter;