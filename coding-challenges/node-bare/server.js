const http = require('http');
const fs = require('fs');


function getFileContents(location) {

    const filePromise = new Promise((fulfill, reject) => {
        fs.readFile(location, 'utf8', (err, data) => {
            if (err) throw err;
            fulfill(data);
        });
    });

    return filePromise;

}


const server = http.createServer(function(request, response) {
    console.log('I got hit looking for:' + request.url);

    switch (request.url) {
        case '/':
        case '/index.html':

            getFileContents('./index.html')
                .then(pageContent => {
                    response.end(pageContent)
                })
                .catch((error) => {
                    console.log(error);
                    response.end(error.message)
                });
            break;
        case '/ninjas':
            response.writeHead(301, {
                Location: 'https://en.wikipedia.org/wiki/Ninja'
            });
            response.end();
            break;
        case '/dojos/new':
            getFileContents('./dojos.html')
                .then(pageContent => {
                    response.end(pageContent)
                })
                .catch((error) => {
                    console.log(error);
                    response.end(error.message)
                });
            break;
        case '/error':
            // throw new Error("something went wrong!");
            this.emit('error', new Error("Error!!!"));
            break;
        default:
            getFileContents('./notfound.html')
                .then(pageContent => {
                    response.end(pageContent)
                })
                .catch((error) => {
                    console.log(error);
                    response.end(error.message)
                });

    }

});
server.on("error", err => console.log(err));
server.listen(7000);
