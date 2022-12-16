import User from "../models/user.model.js";

export async function getUserProfile(req, res) {
    var success= false;
	const userId= req.params.userId;
	
	

	try {
        const user= await User.findOne({id: userId});
            
        success= true;
        return res.status(201).send({success, user})
    
    } catch (error) {
        return res.status(500).send({success, error})
    }
	
		

}

export async function editProfile(req, res) {
    const userId= req.params.userId;
    var success= false;

    const user= await User.findOne({id: userId});
    
    user.nickname= req.body.nickname;
    user.profile= req.body.profile;
    user.banner= req.body.banner;
    user.linkIG= req.body.linkIG;
    user.linkFB= req.body.linkFB;
    user.linkTW= req.body.linkTW;
    user.descripcion= req.body.descripcion;

    

    try {
		await user.save();
		
		success= true;
		return res.status(201).send({success})

	} catch (error) {
		return res.status(500).send({success, error})
	}
    

}

