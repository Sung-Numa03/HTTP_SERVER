const http = require('http');

const PORT = 7000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Gallileo Gallilea',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Eisntein',
    },
    {
        id: 3,
        name: 'Marie Curie',
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if(req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        })
    }
    if(req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        if(items.length === 3) {
            const friendsIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendsIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write('<ul>');
        res.write('<li>Hello Isaac Newton</li>')
        res.write('<li>What are your thoughts on astronomy!</li>')
        res.write('</ul>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})