const server = require('./app/server');
const port = process.env.PORT || 8000;
server.listen(port, (req, res) => {
  console.log(`Express server is started and listening on port *:${port}.`);
});