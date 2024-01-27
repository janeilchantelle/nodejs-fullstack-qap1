


// Filesystem Global Object

// Description:
// The fs module in Node.js provides a set of functions for working with the file system.
// It allows you to read and write files, create directories, and perform other file-related operations.
// In this example, the fs module is used to read the contents of a file named 'example.txt' asynchronously.
// The file content is then logged to the console.

// Example:
// Import the filesystem module
const fs = require('fs');

// Read the contents of a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
        return;
    }

    console.log('File content:');
    console.log(data);
});
