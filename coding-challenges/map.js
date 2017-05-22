'use strict';

Array.prototype.myMap = function(mapCallBack) {

    const newArray = [];

    this.forEach(function(value, index, wholeArray) {
        newArray.push(mapCallBack(value, index, wholeArray));
    });

    return newArray;
}


let arr = [10, 90, 50, -1];

let mapper = function(val) {
    return { myMapVal: val };
}

console.log('My Map-->', arr.myMap(mapper));
console.log('Default Map-->',arr.map(mapper));
