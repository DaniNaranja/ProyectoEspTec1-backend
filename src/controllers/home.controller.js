import User from "../models/user.model.js";

export async function getUsers(req, res) {
	const users = await User.find().populate('drawings');
	return res.status(200).send({ users });
}