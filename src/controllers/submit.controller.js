import bcrypt from "bcrypt";
import Drawing from "../models/drawing.model.js";

export async function submitDrawing(req, res) {
	var success= false;

	
    const userId= req.params.userId;
    const titulo= req.body.titulo;
    const descripcion= req.body.descripcion;
    const url= req.body.url;

	
    if (!titulo){
		res.status(400).send("Falta campo titulo")
	}
	if (!descripcion){
		res.status(400).send("Falta campo descripcion")
	}
	if (!url){
		res.status(400).send("Falta campo url")
	}
	
	
	try {
		await Drawing.create({userId, titulo, descripcion, url})
		
		success= true;
		return res.status(201).send({success})

	} catch (error) {
		return res.status(500).send({success, error})
	}
}

