'use strict';

const firstPromise = first();

firstPromise
    .then((message) => {
        return second(message);
    })
    .then((passedMessage) => {
        console.log(passedMessage);
    })
