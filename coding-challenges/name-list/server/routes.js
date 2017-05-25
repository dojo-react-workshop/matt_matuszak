const nameController = require('./nameController');
console.log('loading routes...', nameController)
module.exports = function(app) {
    app.get('/api/v1/ping', nameController.ping );
    app.post('/api/v1/name', nameController.add);
}
