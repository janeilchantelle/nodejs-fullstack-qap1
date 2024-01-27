



// Events Global Object

// Description:
// The events module in Node.js provides an event-driven architecture for handling and emitting events.
// It allows objects to communicate with each other through the emission and handling of events.
// In this example, the server uses the events module to create a custom event emitter.
// The 'request' event is emitted for each incoming HTTP request, and a corresponding event handler 
// is triggered to send a response.

// Example:
// Import the events module
const events = require('events');

// Create an event emitter
const eventEmitter = new events.EventEmitter();

// Event handler for the 'request' event
const handleRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Events!\n');
};

// Bind the event handler to the 'request' event
eventEmitter.on('request', handleRequest);

// Create an HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
    // Emit the 'request' event for each incoming request
    eventEmitter.emit('request', req, res);
});

// Listen on port 3001
server.listen(3001, () => {
    console.log('Server listening on port 3001');
});
