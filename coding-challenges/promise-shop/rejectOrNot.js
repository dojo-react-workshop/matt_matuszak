'use strict';

var promise = new Promise(function(fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
    // Your solution here
    console.log(error.message);
}

// Your solution here
promise
    .then((message) => { console.log(message) }
    , (errorMsg) => onRejected(errorMsg));
