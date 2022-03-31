import { Router } from 'express';
const router = Router();

import { createTodo, getTodos, getTodo, deleteTodo, updateTodo } from '../controllers/todo.controller'

import { verifyToken, isOwnerTodo } from '../middlewares/authJWT'


router.get( "/", getTodos );

router.post( "/", [verifyToken], createTodo );

router.get( "/:id", getTodo );

router.delete( "/:id", [verifyToken, isOwnerTodo], deleteTodo );

router.put ( "/:id", [verifyToken, isOwnerTodo], updateTodo );

export default router;

