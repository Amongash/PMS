const { User } = require("../models");
const { createUser } = require("../lib/database/User");

const index = async (req, res, next) => {
	try {
		await User.find({}, (err, users) => {
			if (err) return next(err);
			res.json({ data: { users } });
		});
	} catch (error) {
		return next(error);
	}
};

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

const getById = async (req, res, next) => {
	try {
		const { userId } = req.params;
		User.findById(userId).exec((err, user) => {
			if (err) return next(err);
			// console.log(`User: `, user);
			res.json({
				data: {
					user: user,
				},
			});
		});
	} catch (err) {
		return next(err);
	}
};

const update = async (req, res, next) => {
	try {
		await User.findOneAndUpdate(
			{ _id: req.params.userId },
			req.body,
			{ new: true },
			(err, user) => {
				if (err)
					return next(new Error("Failed to update user for unknown reasons"));
				// console.log(`User: `, user);
				return res.json({
					data: {
						success: "OK",
						message: "User updated successfully",
					},
				});
			}
		);
	} catch (err) {
		return next(err);
	}
};

const _delete = async (req, res, next) => {
	try {
		await User.deleteOne({ _id: req.params.userId }, (err) => {
			if (err) return next(new Error("Failed to delete user."));
			return res.json({
				success: "OK",
				message: "User deleted successfully",
			});
		});
	} catch (err) {
		return next(err);
	}
};

module.exports = { index, create, update, getById, _delete };
