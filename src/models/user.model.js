import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
	nickname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
			type: String,
			required: true,
	},
	profile: {
			type: String,
			required: false,
	},
	banner: {
		type: String,
		required: false,
	},
	linkIG: {
		type: String,
		required: false,
	},
	linkFB: {
		type: String,
		required: false,
	},
	linkTW: {
		type: String,
		required: false,
	},
	descripcion: {
		type: String,
		required: false,
	},
	drawings: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "Drawing",
				},
	],
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
