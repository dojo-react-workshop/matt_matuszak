'use strict';

Array.prototype.myFilter = function(filterCallBack) {

    const newArray = [];

    this.forEach(function(value, index, wholeArray) {
        if (filterCallBack(value, index, wholeArray))
            newArray.push(value);
    });

    return newArray;
}


let arr = [10, 90, 50, -1];

let filterFunc = function(val) {
    return val > 0;
}

console.log('My Map-->', arr.myFilter(filterFunc));
console.log('Default Map-->',arr.filter(filterFunc));
