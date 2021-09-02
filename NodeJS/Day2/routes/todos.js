const express = require("express");
const todos = require("../controllers/todos");
const router = express.Router();

router.post("/", (req, res) => {
	const { body } = req;
	todos.createTodo(body);

	res.status(204).end;
});
router.get("/", async (req, res) => {
	const allTodos = await todos.getAllTodos();
	res.json(allTodos);
});
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const todo = await todos.getTodoById(id);
	if (!todo) {
		res.status(404).end();
		return;
	}
	res.json(todo);
});
router.patch("/:id", async (req, res) => {
	const {
		body,
		params: { id },
	} = req;
	await todos.editTodoById(id, body);

	res.status(204).end();
});
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await todos.deleteTodoById(id);

	res.status(204).end();
});

module.exports = router;
