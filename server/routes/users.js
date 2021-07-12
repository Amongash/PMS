const express = require("express");
const router = express.Router();
const {
	index,
	create,
	update,
	getById,
	_delete,
} = require("../controllers/userController");
const authenticateJWT = require("../middleware/authenticateJWT");

router.post("/", authenticateJWT, create);
router.get("/", authenticateJWT, index); // list all users
router.get("/:userId", authenticateJWT, getById); // retrieve by user ID
router.put("/:userId", authenticateJWT, update); // update a user
router.delete("/:userId", authenticateJWT, _delete); // delete a user
module.exports = router;
