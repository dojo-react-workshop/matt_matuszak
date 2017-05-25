const fs = require('fs');
const modMod = require('./modular-mod');

const directory = process.argv[2];
const extension = process.argv[3];

// console.log(directory, extension);
modMod(directory, extension, (error, filteredList) => {
    if(error)
        return console.error(error);

    filteredList.forEach((item) => console.log(item));
})

// var filterFn = require('./modular-mod')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
