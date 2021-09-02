const express = require("express");
const app = express();

app.use(express.json());

let todos = [
	{ id: 1, todo: "any task 1" },
	{ id: 2, todo: "any task 2" },
	{ id: 3, todo: "any task 3" },
	{ id: 4, todo: "any task 4" },
];

app.get("/", (req, res) => {
	res.send("Hello");
});

app.post("/todos", (req, res) => {
	todos.push(req.body);
	res.status(204).end();
});

app.get("/todos", (req, res) => {
	res.json(todos);
});

app.get("/todos/:id", (req, res) => {
	const { id } = req.params;
	const todo = todos.find((todo) => todo.id == id);
	if (!todo) {
		res.status(404).end();
		return;
	}
	res.json(todo);
});

app.patch("/todos/:id", (req, res) => {
	const newTodo = req.body;
	// console.log(newTodo.todo);
	const { id } = req.params;
	const todo = todos.find((todo) => todo.id == id);
	if (newTodo.todo) {
		todo.todo = newTodo.todo;

		return res.json(todo);
	}

	res.status(404).json({ message: "Invalid todo Id" });
});

app.delete("/todos/:id", (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(404).json({ message: "Invalid todo Id" });

	const todo = todos.find((todo) => todo.id == id);
	todos.splice(todos.indexOf(todo), 1);

	return res.status(200).json({
		message: "Deleted Successfully",
	});
});

app.listen(3000);
