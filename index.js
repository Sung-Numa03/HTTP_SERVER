const http = require('http');

const PORT = 7000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'application/json',
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Sir Isaac Newton',
    }));
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})