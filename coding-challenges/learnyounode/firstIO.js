const fs = require('fs');
const fileRef = process.argv[2];

// console.log(fileRef);

const fileContents = fs.readFileSync(fileRef, 'utf8');

// console.log('split version',fileContents.split('\n').length)
console.log(fileContents.split('\n').length-1)
// console.log('here', fileContents);
