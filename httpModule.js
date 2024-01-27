


// HTTP Global Object

// Description:
// The http module allows you to create HTTP servers and make HTTP requests.
// It's fundamental for handling web-related tasks in Node.js.
// It can be used to create a simple HTTP server that listens for incoming requests and responds accordingly.

// Example:

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Serve the HTML file
        fs.readFile('http.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // Handle other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
