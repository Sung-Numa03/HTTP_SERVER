const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain',
    });
    res.end('Hello, Sir Isaac Newton is your friend!');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})