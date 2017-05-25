// console.log(process.argv);
let sum = 0;
for (var i = 2; i < process.argv.length; i++) {
    // console.log(process.argv[i]);
    sum += parseInt(process.argv[i]);
}
console.log(sum);
