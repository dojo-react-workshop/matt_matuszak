const surveyController = require('./survey');
console.log('loading routes...', surveyController)
module.exports = function(app) {
    app.get('/api/v1/ping', surveyController.ping );
    app.post('/api/v1/survey', surveyController.add);
    app.post('/api/v1/test', (request, response) => {
        console.log('TEST REQUEST -->', request.body);
        response.json({ message: 'test was successful!' })
    })
}
