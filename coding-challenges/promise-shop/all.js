'use strict';

function all(promise1, promise2) {



    let wrapper = new Promise((fulfill, reject) => {

        let counter = 0;
        let vals = []
        promise1.then((val) => {
            counter++;
            vals.push(val);
            if (counter ==2) fulfill(vals);
        });
        promise2.then((val) => {
            counter++
            vals.push(val);
            if (counter == 2) fulfill(vals);
        });
    });
    return wrapper;
}


const allResult = all(getPromise1(), getPromise2());

allResult.then(console.log);
