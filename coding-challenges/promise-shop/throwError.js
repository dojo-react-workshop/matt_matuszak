'use strict';

function parsePromised(jsonString) {
    return new Promise((fulfill, reject) => {
        try {
            const parseObj = JSON.parse(jsonString);
            fulfill(parseObj);
        } catch(e) {
            reject(e);
        }
    })
}

// parsePromised(process.argv[2])
//     .catch((error) => console.log(error));

parsePromised(process.argv[2]).catch(console.log);

// parsePromised(process.argv[2]).then(null, console.log)

// console.log(process.argv[2]);
