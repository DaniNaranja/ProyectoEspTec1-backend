import Drawing from "../models/drawing.model.js";

export async function getAllDrawings(req, res) {
	const drawings = await Drawing.find();
	return res.status(200).send({ drawings });
}