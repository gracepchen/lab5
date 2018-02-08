var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var desc = req.query.description;
	// var imgURL = "http://lorempixel.com/400/400/people";
	var newFriend = { 
		"name": name,
		"description": desc,
		"imageURL": "http://lorempixel.com/400/400/people"
	}
	data.friends.push(newFriend);
	res.render('index', newFriend);
	console.log(data.friends);
 }

