const { User } = require("../models");
const { createUser } = require("../lib/database/User");

const create = async (req, res, next) => {
	try {
		const { firstName, lastName, email, role } = req.body;
		const newUser = await createUser({
			firstName,
			lastName,
			email,
			role,
		});

		if (newUser)
			return res.json({ data: { message: "User successfully added" } });
	} catch (error) {
		return next(error);
	}
};

module.exports = { create };
