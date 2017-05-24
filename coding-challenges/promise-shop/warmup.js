'use strict';

const printTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('TIMED OUT!');
    }, 300);
});

printTimeout
    .then((stringToPrint) => {
        console.log(stringToPrint);
    });
