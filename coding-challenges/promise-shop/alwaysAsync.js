'use strict';

var promise = new Promise(function(fulfill, reject) {
    fulfill('PROMISE VALUE');
});

function onRejected(error) {
    // Your solution here
    console.log(error.message);
}

// Your solution here
promise
    .then((message) => {
        console.log(message)
    }
    , (errorMsg) => onRejected(errorMsg));

console.log('MAIN PROGRAM');
