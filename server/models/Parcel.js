const mongoose = require("mongoose");

const ParcelSchema = mongoose.Schema(
	{
		delivery_location: { type: String, required: true },
		delivery_date: { type: Date, required: true },
		sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
		recipient: { type: String, required: true },
		status: { type: String, required: true },
		cost: { type: Number, required: true },
	},
	{ timestamps: true }
);

const Parcel = mongoose.model("Parcel", ParcelSchema, "parcels");
module.exports = Parcel;
