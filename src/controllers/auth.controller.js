import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export async function registerUser(req, res) {
	var success= false;

	const nickname = req.body.nickname;
	const email = req.body.email;
	const password = req.body.password;

	if (!nickname){
		res.status(400).send("Falta campo nickname")
	}
	if (!email){
		res.status(400).send("Falta campo email")
	}
	if (!password){
		res.status(400).send("Falta campo password")
	}

	const hashPassword = bcrypt.hashSync(password,10);
	
	try {

		await User.create({nickname, email, password: hashPassword})
		
		success= true;
		return res.status(201).send({success})

	} catch (error) {
		return res.status(500).send({success, error})
	}
}

