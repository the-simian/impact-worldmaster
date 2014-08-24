var express = require('express'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	impact = require('./node-impact/index.js'),
	port = 8080;



var app = express();

var impactConfig = {
	root: './src/public'
};

app
	.use(methodOverride())
	.use(bodyParser())
	.use(express.static(impact.listen(app, impactConfig).root))
	.listen(port);

console.log('app listening on port', port);