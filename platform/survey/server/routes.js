const surveyController = require('./survey');
console.log('loading routes...', surveyController)
module.exports = function(app) {
    app.get('/api/v1/ping', surveyController.ping );
    app.post('/api/v1/survey', surveyController.add);
}
