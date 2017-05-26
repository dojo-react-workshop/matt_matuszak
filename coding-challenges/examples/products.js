


function getProducts(arr) {

    const forward = [1];

    for (var i = 1; i < arr.length; i++) {
        forward[i] = arr[i-1]*forward[i-1];
    }

    const final = [];
    final[arr.length-1] = 1 * forward[forward.length-1];
    let backVal = 1;

    for(var c = arr.length-2; c >= 0; c--) {
        backVal *= arr[c+1];
        final[c] = backVal * forward[c];
    }

    return final;
}

console.log(getProducts([5,3,2,1]));
