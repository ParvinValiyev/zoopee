const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
	name: { type: String, required: true, minlenght: 2 },
	password: { type: String },
	nikname: { type: String },
	sorname: { type: String },
	avatar: { type: String },
	date: { type: Number },
	email: { type: String },
	phoneNumber: { type: Number },
	country: { type: String },
	hobby: [],
});

module.exports = mongoose.model("Registration", RegistrationSchema);
