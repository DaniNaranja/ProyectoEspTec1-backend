import mongoose from "mongoose";

const drawingSchema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
	
});

const drawingModel = mongoose.model("Drawing", drawingSchema);

export default drawingModel;