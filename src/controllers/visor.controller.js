import Drawing from "../models/drawing.model.js";

export async function getDrawing(req, res) {
		const drawId= req.params.drawId;
	
		const drawing= await Drawing.findOne({id: drawId});
	
}