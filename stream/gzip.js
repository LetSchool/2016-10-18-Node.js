var fs = require('fs');
var zlib = require('zlib');

// Read File
fs.createReadStream('source.txt')
	// Compress
	.pipe(zlib.createGzip())
	// Write File
	.pipe(fs.createWriteStream('output.gz'));
