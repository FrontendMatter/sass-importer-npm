var fs = require('fs')
var	path = require('path')
var resolve = require('resolve');

function resolvePath (r) {
  for (var parent = module.parent; parent; parent = parent.parent) {
    if (parent.paths && parent.paths.length && parent.paths.indexOf(path.join(process.cwd(), 'node_modules')) !== -1) {
      return resolve.sync(r, { basedir: parent.paths[0] });
    }
  }
  return require.resolve(r);
}

// Import Sass files installed through npm
// See https://github.com/sass/node-sass#importer--v200---experimental
module.exports = function(url, file, done) {
	if (url.indexOf('.scss') === -1) {
		url += '.scss'
	}

	try {
		url = resolvePath(url)
	}
	catch (e) {
		// look for the same file prefixed with _
		var chunks = url.split('/')
		var filename = chunks.pop()
		
		if (filename.indexOf('_') === -1) {
			try {
				chunks.push('_' + filename)
				url = resolvePath(chunks.join('/'))
			}
			catch (e) {}
		}
	}
	return done({
		file: url
	})
}