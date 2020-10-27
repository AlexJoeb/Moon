var app = require('express')();

// * Dot ENV
require('dotenv').config();

// * True/False Variable for Global Logging
const enableGlobalErrorLogging =
  process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// * Default entry route.
app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Success message.',
    up: true,
    time: new Date(),
  });
});

// * Send a 404 if no other route matches with URI
app.use((req, res) => {
  res.status(404).json({
    message: "The route you're looking for was not found.",
  });
});

// * Global Error Handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: err,
  });
});

// * Set the PORT
app.set('port', process.env.PORT || 5000);

// io.on('connection', socket => {
//     // Sends the user the current list on connection.
//     socket.emit("NewList", lastTen);

//     // When the client sends the server a 'NewEquation' message, the equation is added and the new list is sent to all clients.
//     socket.on('NewEquation', ({ equation }) => {
//         // Remove the last element if there is 10 or more items, before new item is appended to front.
//         if(lastTen.length >= 10) lastTen = lastTen.slice(1);
//         lastTen.unshift({
//             ...equation,
//             time: Date.now()
//         }); // Append new item.

//         // Send the new list to all connected clients.
//         io.sockets.emit("NewList", lastTen);
//     })
//     socket.on('disconnect', socket => {
//         console.log("- A user disconnected.");
//     })
// })

module.exports = app;
