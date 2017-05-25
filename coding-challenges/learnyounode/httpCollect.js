const http = require('http');

const requestURL = process.argv[2];

const req = http.get(requestURL, (res) => {
    let completeString = "";
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        completeString += chunk;
        // console.log(chunk);
    })
    res.on('end', () => {
        console.log(completeString.length);
        console.log(completeString);
    })
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});


req.end();
