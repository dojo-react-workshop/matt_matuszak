
const http = require('http');

const requestURL1 = process.argv[2];
const requestURL2 = process.argv[3];
const requestURL3 = process.argv[4];

// console.log(requestURL1, requestURL2, requestURL3);

function buildRequestPromise(requestURL) {

    const promise = new Promise((fulfill, reject) => {
        const req = http.get(requestURL, (res) => {
            let completeString = "";
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                completeString += chunk;
                // console.log(chunk);
            })
            res.on('end', () => {
                fulfill(completeString);
            })
        }).on('error', (e) => {
            console.error(`Got error requesting url '${requestURL}': ${e.message}`);
            reject(e);
        });
        req.on('error', (e) => {
          console.error(`problem with request: ${e.message}`);
          reject(e);
        });
        req.end();
    })

    return promise;
}


Promise.all([buildRequestPromise(requestURL1), buildRequestPromise(requestURL2), buildRequestPromise(requestURL3)])
    // .then((results) => results.forEach((val, index) => console.log(`[${index}]:${val}`)))
    .then((results) => results.forEach((val, index) => console.log(val)))
    .catch((error) => {
        console.error(error);
    });
