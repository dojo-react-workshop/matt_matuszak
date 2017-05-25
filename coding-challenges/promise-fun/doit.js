


const firstPromise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        console.log('first promise ran');
        fulfill('First Promise is Fulfilled')
    }, 3000);
});
firstPromise.then((fullfilledText) => console.log);

console.log('--  1 --> 2  --')

const secondPromise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        console.log('second promise ran');
        fulfill('Second Promise is Fulfilled')
    }, 2000);
});
secondPromise.then((fullfilledText) => console.log);

console.log('--  2 --> ?  --')



console.log(' -- 1-Then --> 2-Then')


console.log('ENDED!')
