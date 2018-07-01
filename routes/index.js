const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
var express = require('express');
var router = express.Router();
const requireLogin = require('../middleWares/requireLogin');
const requireCredits = require('../middleWares/requireCredits');
/* GET home page. */
let surveys = [];

router.get('/auth/google', function(req, res, next) {
	req.session.passport={ user:{_id:"dsfsdf",googleId:"dsfsdf",__v:0,credits:0}}
  	res.redirect('/surveys')
});

router.get('/api/current_user', function(req, res, next) {
	req.user=false;
	if(req.session.passport){
		req.user = req.session.passport.user;
	}
  res.send(req.user);
});

router.get('/api/logout', function(req, res, next) {
	if(req.session){
		req.session = null
		res.clearCookie('connect.sid');
	}
  res.redirect('/')
});

router.post('/api/stripe', requireLogin,(req, res) => {
	req.session.passport.user.credits += 5;
	res.send(req.session.passport.user)
});


router.post('/api/surveys/webhooks',(req, res) => {
	const p = new Path('/api/surveys/:surveyId/:choice');

	const events = _chain(req.body)
	.map(({email, url}) =>{
		const match = p.test(new URL(url).pathname);
		if(match){
			return {email, surveyId:match.surveyId, choice: match.choice}
		}
	})
	.compact()
	.uniqBy('email','surveyId')
	.each(({surveyId, email, choide})=>{

	})
	res.send({});
});

router.post('/api/surveys', requireLogin,requireCredits,(req, res) => {
	const {title, subject, body, recipents} = req.body;
	let newSurveys = {
		title:title,
		subject:subject,
		body:body,
		recipents:recipents.split(',').map(email => ({email})),
		_user: req.session.passport.user.id,
		datesent: Date.now()
	}

	surveys.push(newSurveys);
	req.session.passport.user.credits -= 1;
	res.send(req.session.passport.user)
});

router.get('/api/surveys',requireLogin, function(req, res, next) {
	res.send(surveys)
});



module.exports = router;
