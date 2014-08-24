exports.weltmeister = require('./weltmeister');

function listen(server, options) {
	return exports.weltmeister.listen(server, options);
}

exports.listen = listen;