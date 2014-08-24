var fs = require('fs'),
	path = require('path'),
	glob = require('glob');


function listen(server, opts) {
	var options = opts || {};
	var root = opts.root || __dirname;

	function getGlob(req, res) {

		function handleGlob(er, matches) {
			for (var i in matches) {
				matches[i] = matches[i].substring(root.length);
			}

			res.send(matches);
		}

		glob(root + req.param('glob'), 0, handleGlob);
	}


	function save(req, res) {
		var _path = req.body.path,
			_data = req.body.data;
		
		var errorWrite = {
				error: 2,
				msg: 'Couldn\'t write to file: ' + _path
			},
			errorGeneric = {
				error: 0
			},
			errorNoSuffix = {
				error: 3,
				msg: 'File must have a .js suffix'
			},
			errorNoData = {
				error: 1,
				msg: 'No Data or Path specified'
			};

		function saveFile(err) {
			if (err) {
				res.send(errorWrite);
			} else {
				res.send(errorGeneric);
			}
		}

		if (_path && _data) {
			if (/\.js$/.test(_path)) {
				
				fs.writeFile(path.join(root, _path), _data, saveFile);
			} else {
				res.send(errorNoSuffix);
			}
		} else {
			res.send(errorNoData);
		}
	}


	function browse(req, res) {
		var dir = req.param('dir') || '',
			type = req.param('type'),
			dirpath,
			stats,
			filter,
			file,
			listItem,
			types = {
				scripts: ['.js'],
				images: ['.png', '.gif', '.jpg', '.jpeg']
			},
			result = {
				parent: false,
				dirs: [],
				files: []
			};

		filter = (type && types[type]) ?
			types[type] :
			false;

		result.parent = req.param('dir') ?
			dir.substring(0, dir.lastIndexOf('/')) :
			false;

		dir = (dir[dir.length - 1] === '/') ?
			dir :
			dir += '/';

		dirpath = path.normalize(root + dir);

		function walkDirectory(err, files) {
			for (var i in files) {
				file = files[i];
				listItem = dir + file;
				stats = fs.statSync(path.join(dirpath, file));

				if (stats.isDirectory()) {
					result.dirs.push(listItem);
				} else if (stats.isFile()) {
					result.files.push(listItem);
				}
			}
			
			res.send(result);
		}

		fs.readdir(dirpath, walkDirectory);
	}

	server.get('/worldmaster/glob', getGlob);
	server.post('/worldmaster/save', save);
	server.get('/worldmaster/browse', browse);

	return {
		root: root
	};
}

exports.listen = listen;