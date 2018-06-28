module.exports = (req,res,next)=>{
	if(!req.session.passport.user){
		return res.status(401).send({error: 'You must log in!'})
	}
	next();
};