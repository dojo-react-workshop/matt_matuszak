const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];

// console.log(port, fileLocation);

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
    const fileStream = fs.createReadStream(fileLocation);

    fileStream.on('data', (chunk) => {
    //   console.log('got %d bytes of data', chunk.length);
    //   console.log(chunk.toString());
      response.write(chunk);
    });
    fileStream.on('end', () => {
    //   console.log('there will be no more data.');
      response.end();
    });

    // getFileContents('./index.html')
    //     .then(pageContent => {
    //         response.end(pageContent)
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         response.end(error.message)
    //     });

});
server.on("error", err => console.log(err));
server.listen(port);
