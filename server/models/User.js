const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			minlength: 2,
		},
		lastName: {
			type: String,
			required: true,
			minlength: 2,
		},
		email: {
			type: String,
			trim: true,
			lowercase: true,
			index: { unique: true },
		},
		password: {
			type: String,
			trim: true,
			minlength: 8,
		},
		role: {
			type: String,
			default: "Teller",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema, "users");
UserSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		// remove these props when object is serialized
		delete ret._id;
		delete ret.password;
	},
});

module.exports = User;
