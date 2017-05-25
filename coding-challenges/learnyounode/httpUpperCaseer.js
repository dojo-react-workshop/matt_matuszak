const http = require('http');
const map = require('through2-map')

const port = process.argv[2];

console.log(port);

const server = http.createServer(function(request, response) {

    console.log('incomming method:' + request.method);

    if (request.method == 'POST') {
        console.log("POST");
        var body = '';
        request.on('data', function (data) {
            body += data;
            response.write(data.toString().toUpperCase());
        });
        request.on('end', function () {
            console.log("Body: " + body.toString());
            response.writeHead(200);
            response.end('post received');
        });

    } else {
        console.log("unsupported request method:" + request.method);
        response.writeHead(406);
        response.end();
    }


    // inStream.pipe(map(function (chunk) {
    //    return chunk.toString().split('').reverse().join('')
    //  })).pipe(outStream)

    // var map = require('through2-map')
    //
    // const fileStream = fs.createReadStream(fileLocation);
    //
    // fileStream.on('data', (chunk) => {
    // //   console.log('got %d bytes of data', chunk.length);
    // //   console.log(chunk.toString());
    //   response.write(chunk);
    // });
    // fileStream.on('end', () => {
    // //   console.log('there will be no more data.');
    //   response.end();
    // });
    //
    // // getFileContents('./index.html')
    // //     .then(pageContent => {
    // //         response.end(pageContent)
    // //     })
    // //     .catch((error) => {
    // //         console.log(error);
    // //         response.end(error.message)
    // //     });

});
server.on("error", err => console.log(err));
server.listen(port);
