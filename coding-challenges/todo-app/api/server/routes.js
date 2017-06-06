const todoController = require('./TodoController');
const githubController = require('./GitHubController')
module.exports = (app) => {
    console.log('loading routes...')

    app.get('/routes/ping', (request, response) => response.json({message: 'hello', from: 'routes/ping'}))
    app.get('/todos', todoController.all);
    app.get('/user/:userName/repos', githubController.repos)
}
