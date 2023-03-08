const { Router } = require('express');
const {
  getTodosByUser,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos.controller');

const router = Router();

router.get('/:userId', getTodosByUser);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
