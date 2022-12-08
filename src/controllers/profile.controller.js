import User from "../models/user.model.js";

export async function getUserProfile(req, res) {
		const userId= req.params.userId;
	
		const user= await User.findOne({id: userId});

}

export async function editProfile(req, res) {
    const userId= req.params.userId;

    const user= await User.findOne({id: userId});
    
    user.nickname= req.body.nickname;
    user.profile= req.body.profile;
    user.banner= req.body.banner;
    user.linkIG= req.body.linkIG;
    user.linkFB= req.body.linkFB;
    user.linkTW= req.body.linkTW;
    user.descripcion= req.body.descripcion;

    await user.save();

}

