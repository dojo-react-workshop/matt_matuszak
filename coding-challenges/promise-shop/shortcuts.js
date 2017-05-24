'use strict';

var promise = new Promise(function(fulfill, reject) {
    fulfill('PROMISE VALUE');
});

// Your solution here
promise
    .then((message) => {
        console.log(message);
    })
    .catch((errorMsg) => {
        console.log(errorMsg.message);
    });

var promisefulfill = Promise.resolve('Yea!');

promisefulfill.then((msg) => console.log(msg));

var promiseReject = Promise.reject('Nay!');

promiseReject.catch((msg) => console.log(msg));
