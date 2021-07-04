const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	comment: { type: String },
	like: { type: String },
	share: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
