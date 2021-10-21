const http = require('http')

let likes = 0;

const requestListener = function (req, res) {
    res.setHeader('Content-type', 'application/json');

    switch(req.url) {
        case '/like':
            res.writeHead(200);
            res.write(JSON.stringify({status: 'like'}));
            likes++
            break;
        case '/dislike':
            res.writeHead(200);
            res.write(JSON.stringify({ status: 'dislike'}));
            likes--
            break;
            case '/stats':
                res.writeHead(200);
                res.write(`Количество лайков: ${likes}`);
                break;
        default:
            res.writeHead(404);
            res.write(JSON.stringify({ status: 'error'}));
    }
    res.end();
}

const server = http.createServer(requestListener);
server.listen(8080);