import Message from "../models/message.model.js";

export async function createMessage(req, res) {
	var success= false;

    const userId= req.body.userId;
	const message= req.body.message;

    if (!userId){
		res.status(400).send("Falta campo Id usuario")
	}
	if (!message){
		res.status(400).send("Falta campo message")
	}

	try {
		const createdMessage = await Message.create({userId, message});

		success= true;
		return res.status(201).send({success})

	} catch (error) {
		return res.status(500).send({success, error})
	}
}
export async function deleteMessage(req, res){
    const messageId= req.params.messageId;


    try{
        await Message.deleteOne({id: messageId})
        const success= "Mensaje eliminado"
        return res.status(204).send(success)

    } catch(error){
        return res.status(500).send({error})
    }
}
