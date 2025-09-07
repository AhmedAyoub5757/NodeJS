// import express from 'express';
import { getTodos, addTodo } from '../controllers/todoController.js'; 
import { Router } from 'express';

// const app = express();
const router = Router();


router.get('/todos', getTodos);
router.post('/todos', addTodo);

export default router;