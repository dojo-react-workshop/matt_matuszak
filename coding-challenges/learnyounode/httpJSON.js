const http = require('http');
const url = require('url'); //.parse('/status?name=ryan', true)

const port = process.argv[2];

console.log(port);

const server = http.createServer(function(request, response) {

    console.log('incomming method:' + request.method);

    if (request.method == 'GET') {

        const parameters = url.parse(request.url, true);
        console.log('iso:', parameters.query.iso);
        console.log('path:', parameters.pathname);
        const date = new Date(parameters.query.iso);
        console.log('date:', date);
        let responseObj = {}
        if (parameters.pathname === '/api/parsetime') {
            console.log('hour minute second')
            responseObj.hour = date.getHours();
            responseObj.minute = date.getMinutes();
            responseObj.second = date.getSeconds();

        } else {
            console.log('unix time')
            responseObj.unixtime = date.getTime();
        }
        console.log('response:', responseObj);
        response.writeHead(200);
        response.end(JSON.stringify(responseObj));

    } else {
        console.log("unsupported request method:" + request.method);
        response.writeHead(406);
        response.end();
    }

});
server.on("error", err => console.log(err));
server.listen(port);
