const app = require('./app');
const server = require('http').Server(app);
// const io = require('socket.io')(server);
// require('./socket/socket')(io);
module.exports = server;
