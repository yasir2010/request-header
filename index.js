var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.json({
		"ipaddress":req.ip,
		"language":req.headers['accept-language'],
		"software":req.headers['user-agent']
	});
	res.end();
});

app.listen(process.env.PORT || 2000);