const fs = require('fs');

module.exports = function(directory, extension, callback) {

    fs.readdir(directory, (err, filesList) => {
        if (err)
            return callback(err);

        const returnList = [];
        try {
            for (var i = 0; i < filesList.length; i++) {
                if (filesList[i].indexOf('.' + extension) >= 0) {
                    returnList.push(filesList[i]);
                }
            }
        } catch (e) {
            return callback(e);
        }
        return callback(null, returnList);
    })

}

//
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
