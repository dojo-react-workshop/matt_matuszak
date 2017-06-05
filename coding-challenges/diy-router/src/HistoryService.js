const { history, location, addEventListener } = window;


const historyService = {
    navigateTo(path) {
        history.pushState({}, null, path)
    }
    , path: (location.pathname)
    , subscribe(callback) {
        console.log('historyService.subscribe()', callback)
        addEventListener('popstate', callback);
    }
}

export default historyService

// import React, {Component} from 'react';

// module.exports = class HistoryService {
//
//     navigateTo(path) {
//         window.history.pushState({}, null, path)
//     }
// }


// export function navigateTo(path) {
//     window.history.pushState({}, null, path)
// }
