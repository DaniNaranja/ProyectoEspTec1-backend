import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export async function getUsers(req, res) {
	const users = await User.find();
	return res.status(200).send({ users });
}

export async function getMessagesByUser(req, res) {
	try {
		const messages = await Message.findById(req.params.userId).populate(
			"user"
		);
		return res.status(200).send({ user });
	} catch (error) {
		return res.status(500).send({ error });
	}
}
