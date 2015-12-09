module.exports = function (server) {
	server.io.on('connection', function (socket) {
		console.log('Client connected!');
	});
};
