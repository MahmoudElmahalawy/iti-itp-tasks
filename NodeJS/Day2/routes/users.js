const express = require("express");
const users = require("../controllers/users");
const router = express.Router();

router.post("/", (req, res) => {
	const { body } = req;
	users.createUser(body);
	res.status(204).end;
});
router.get("/", async (req, res) => {
	const allUsers = await users.getAllUsers();
	res.json(allUsers);
});
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const user = await users.getUserById(id);
	if (!user) {
		res.status(404).end();
		return;
	}
	res.json(user);
});
router.patch("/:id", async (req, res) => {
	const {
		body,
		params: { id },
	} = req;
	await users.editUserById(id, body);

	res.status(204).end();
});
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await users.deleteUserById(id);

	res.status(204).end();
});

module.exports = router;
