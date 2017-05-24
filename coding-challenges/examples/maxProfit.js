function maxProfit(arr) {

    if (arr.length < 2) throw new Error('need to send more data points');

    var buyIndex = 0;
    var sellIndex = 1;
    var maxProfit = arr[sellIndex] - arr[buyIndex];

    var arrayLoops = 0;

   for(let i=0; i<arr.length; i++) {
        for(let x=i+1; x<arr.length; x++) {
            arrayLoops++;
            if((arr[x]-arr[i]) > maxProfit) {
                buyIndex = i;
                sellIndex = x;
                maxProfit = arr[x]-arr[i];
            }
        }
    }

   return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit, iterations: arrayLoops});

}

console.log(maxProfit([10, 7, 4, 5, 7, 10, 12]));
console.log(maxProfit([10, 7]));
// console.log(maxProfit([10]));


// function maxProfitReduce(arr) {
//
//     let
//
//     arr.reduce((maxProfit, currentVal, currentIndex, wholeArray) => {
//         return
//     })
//
// }
