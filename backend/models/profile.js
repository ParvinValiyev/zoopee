const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
	name: { type: String, required: true, minlenght: 2 },
	sorname: { type: String },
    avatar: {type: String},
	date: { type: Number },
	email: { type: String },
	phoneNumber: { type: Number },
	country: { type: String },
	hobby: { type: Array },
});

module.exports = mongoose.model("Profile", ProfileSchema);