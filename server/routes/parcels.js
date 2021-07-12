const router = require("express").Router();
const {
	index,
	addParcel,
	getById,
	update,
	_delete,
} = require("../controllers/parcelController");
const authenticateJWT = require("../middleware/authenticateJWT");

router.get("/", authenticateJWT, index); // list all parcels
router.post("/", addParcel); // create an parcel
router.get("/:parcelId", getById); // retrieve by Parcel ID
router.put("/:parcelId", update); // update a parcel
router.delete("/:parcelId", _delete); // delete a parcel

module.exports = router;
