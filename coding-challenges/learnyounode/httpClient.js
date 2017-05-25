const http = require('http');

const requestURL = process.argv[2];

http.get(requestURL, (res) => {

    // let completeString = "";

    res.on('data', (chunk) => {
        // completeString += chunk;
        console.log(chunk.toString());
    })
    // console.log(completeString);
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});
