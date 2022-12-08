import User from "../models/user.model.js";

export async function getUsers(req, res) {
	const users = await User.find();
	return res.status(200).send({ users });
}