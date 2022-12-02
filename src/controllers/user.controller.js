import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export async function getUsers(req, res) {
	const users = await User.find();
	return res.status(200).send({ users });
}

export async function getMessagesByUser(req, res) {

	const userId= req.params.userId;
	try {
		const messages = await Message.find(userId).populate("user")
		return res.status(200).send({messages});
	} catch (error) {
		return res.status(500).send({ error });
	}
}
