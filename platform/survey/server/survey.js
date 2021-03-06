const surveys = [];

function Survey() {
    this.ping = function(request, response) {
        response.json({message: 'hello from survey controller'})
    }
}

Survey.prototype.add = function(request, response) {
    console.log('REQUEST-->', request.body)
    const survey = request.body;
    const date = new Date();
    survey._id = Math.floor(Math.random()*1000000000);
    survey.created = date;
    survey.modified = date;
    surveys.push(survey);
    console.log('RESPONSE-->',survey);
    response.json(survey);
}


module.exports = new Survey();
