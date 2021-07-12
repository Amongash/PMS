const { User } = require("../../models");

const createUser = async (req) => {
	try {
		const { firstName, lastName, email, password, role } = req;

		const existingUser = await User.findOne({ email });
		// check to see if there's already a user with that email
		if (existingUser) {
			return Promise.reject(new Error("That email is already taken."));
		}

		const savedUser = await User.create({
			firstName,
			lastName,
			email,
			password,
			role,
		});

		if (savedUser) return Promise.resolve(savedUser);
	} catch (error) {
		return Promise.reject(err);
	}
};
const getUserById = (id) => {
	return User.findById(id).exec();
};

const getUserByEmail = (email) => {
	return User.findOne({ email }).exec();
};

module.exports = { createUser, getUserByEmail, getUserById };
