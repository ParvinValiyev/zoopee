const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
	sender: { type: String },
	recipient: { type: String },
	messageContent: { type: String },
    viewMessage: {type: String},
    sendMessage: { type: String}
});

module.exports = mongoose.model("Message", MessageSchema);