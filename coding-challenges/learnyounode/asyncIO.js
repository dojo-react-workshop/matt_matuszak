const fs = require('fs');
const fileRef = process.argv[2];

const fileContents = fs.readFile(fileRef, 'utf8', (err, contents) => {
    console.log(contents.split('\n').length-1)
});
