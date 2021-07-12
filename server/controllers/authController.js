const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { createUser, getUserByEmail } = require("../lib/database/User");

const SALT_ROUNDS = 10;

const login = async (req, res, next) => {
	try {
		// Read username and password from request body
		const { email, password } = req.body;

		const user = await getUserByEmail(email);
		if (user && bcrypt.compareSync(password, user.password)) {
			// Generate an access token
			const accessToken = jwt.sign(
				{ email: user.email, role: user.role },
				process.env.JWT_SECRET,
				{ expiresIn: "5m" }
			);

			res.json({
				accessToken,
			});
		} else {
			res.json({ data: { error: "Email or password incorrect" } });
		}
	} catch (error) {
		return next(error);
	}
};

const register = async (req, res, next) => {
	try {
		const { firstName, lastName, email, password, passwordConf, role } =
			req.body;

		if (password !== passwordConf) {
			return res.json({ data: { error: "Passwords do not match" } });
		}

		const salt = await bcrypt.genSalt(SALT_ROUNDS);
		hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await createUser({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			role,
		});

		if (newUser)
			return res.json({ data: { message: "User successfully created" } });
	} catch (error) {
		return next(error);
	}
};

module.exports = {
	login,
	register,
};
