'use strict';


function calcWaterVolume(arr) {

    let maxValue = {value: arr[0], index: 0};

    arr.forEach((val, index) => {
        console.log(`[${index}]:${val}`)
        if (maxValue.value < val) {
            maxValue.value = val;
            maxValue.index = index;
        }
    })
    console.log(maxValue);

    let volume = 0;
    let edgeIndex = 0;

    for(let forwardIndex = 1; forwardIndex < maxValue.index; forwardIndex++) {

        if (arr[edgeIndex] > arr[forwardIndex]) {
            volume += arr[edgeIndex] - arr[forwardIndex];
        } else {
            edgeIndex = forwardIndex;
        }
    }

    console.log('volume after forward:', volume);
    edgeIndex = arr.length-1;
    for(let backwardIndex = arr.length-2; backwardIndex > maxValue.index; backwardIndex--) {

        if (arr[edgeIndex] > arr[backwardIndex]) {
            volume += arr[edgeIndex] - arr[backwardIndex];
        } else {
            edgeIndex = backwardIndex;
        }
    }

    console.log('volume after backward:', volume)
    return volume;
}


console.log('final volume:', calcWaterVolume([4,2,6,2,4]));
console.log('final volume:', calcWaterVolume([2,9,6,3,2,8,0,10,3,4,8]));
