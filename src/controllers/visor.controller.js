import Drawing from "../models/drawing.model.js";

export async function getDrawing(req, res) {
	var success= false;
	const drawId= req.params.drawId;
	
	

	try {
        const drawing= await Drawing.findOne({id: drawId});
            
        success= true;
        return res.status(201).send({success, drawing})
    
    } catch (error) {
        return res.status(500).send({success, error})
    }

	
}