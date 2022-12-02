import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
	message: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
