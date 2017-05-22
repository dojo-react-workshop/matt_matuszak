
function runningLogger() {
    console.log('I am running!');
}

function multiplyBy10(num) {
    return num * 10;
}

console.log(multiplyBy10(5));

function stringReturnOne() {
    return 'HARDCODE-ONE';
}

function stringReturnTwo() {
    return "HARDCODE-TWO";
}

function caller(obj) {
    if (typeof(obj) === 'function') {
        obj();
    }
}

console.log(caller(5));
console.log(caller('ABC'));
console.log(caller(function() {
    console.log('invoked by caller');
}));


function myDoubleFunctionLog(func1, func2) {

    if(typeof(func1) === 'function') {
        console.log('Function 1:', func1());
    }

    if(typeof(func2) === 'function') {
        console.log('Function 2:', func2());
    }
}

console.log(myDoubleFunctionLog(stringReturnOne, stringReturnTwo));
console.log('---------------------')
function caller2(func) {
    console.log('starting');

    setTimeout(function() {/* do nothing*/}, 2000);

    if (typeof(func) === 'function') {
        func();
    }

    console.log('ending?');
    return 'interesting';
}

myDoubleFunctionLog(caller2);
