const fs = require('fs');

const directory = process.argv[2];
const extension = process.argv[3];

// console.log(directory, extension);

fs.readdir(directory, (err, filesList) => {
    for (var i = 0; i < filesList.length; i++) {
        if(filesList[i].indexOf('.'+extension) >= 0)
            console.log(filesList[i]);
            // console.log(filesList[i].indexOf('.'+extension));

    }
})
