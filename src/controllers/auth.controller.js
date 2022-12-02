import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export async function loginUser(req, res) {
	var logged = false;
		const emailInput= req.body.email;
	
		const user= await User.findOne({email: emailInput});
		const password= req.body.password;
		const isMatch = await bcrypt.compare(password, user.password);

		if(isMatch){
			logged= true;
			return res.status(201).send({logged})
		}else{
			return res.status(500).send({logged})
		}
		
}

export async function registerUser(req, res) {
	var success= false;

	const name = req.body.name;
	const email = req.body.email;
	const dni = req.body.dni;
	const password = req.body.password;

	if (!name){
		res.status(400).send("Falta campo name")
	}
	if (!email){
		res.status(400).send("Falta campo email")
	}
	if (!dni){
		res.status(400).send("Falta campo dni")
	}
	if (!password){
		res.status(400).send("Falta campo password")
	}

	const hashPassword = bcrypt.hashSync(password,10);
	
	try {

		const createdUser= await User.create({name, email, dni, password: hashPassword})
		
		success= true;
		return res.status(201).send({success})

	} catch (error) {
		return res.status(500).send({success, error})
	}
}

