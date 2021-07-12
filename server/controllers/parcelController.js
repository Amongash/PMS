const { Parcel } = require("../models");

const index = async (req, res, next) => {
	try {
		await Parcel.find({}, (err, parcels) => {
			if (err) return next(err);
			res.json({ data: { parcels } });
		});
	} catch (error) {
		return next(error);
	}
};

const addParcel = async (req, res, next) => {
	try {
		const { items } = req.body;

		const parcel = new Parcel({
			//   userId: req.user._id,
			delivery_location: req.body.delivery_location,
			delivery_date: req.body.delivery_date,
			recipient: req.body.recipient,
			cost: req.body.cost,
			status: req.body.status,
			// items: JSON.parse(items),
		});
		parcel.save((err, result) => {
			if (err) return next(err);
			console.log(result);
			res.json({
				data: {
					success: "OK",
					message: "Parcel added successfully",
				},
			});
		});
	} catch (err) {
		return next(err);
	}
};
const getById = async (req, res, next) => {
	try {
		const { parcelId } = req.params;
		Parcel.findById(parcelId).exec((err, parcel) => {
			if (err) return next(err);
			console.log(`Parcel: `, parcel);
			res.json({
				data: {
					parcel: parcel,
				},
			});
		});
	} catch (err) {
		return next(err);
	}
};

const update = async (req, res, next) => {
	try {
		await Parcel.findOneAndUpdate(
			{ _id: req.params.parcelId },
			req.body,
			{ new: true },
			(err, parcel) => {
				if (err)
					return next(new Error("Failed to update parcel for unknown reasons"));
				console.log(`Parcel: `, parcel);
				return res.json({
					data: {
						success: "OK",
						message: "Parcel updated successfully",
					},
				});
			}
		);
	} catch (err) {
		return next(err);
	}
};

// eslint-disable-next-line consistent-return
const _delete = async (req, res, next) => {
	try {
		await Parcel.deleteOne({ _id: req.params.parcelId }, (err) => {
			if (err) return next(new Error("Failed to delete parcel."));
			return res.json({
				success: "OK",
				message: "Parcel deleted successfully",
			});
		});
	} catch (err) {
		return next(err);
	}
};

module.exports = {
	index,
	addParcel,
	getById,
	update,
	_delete,
};
