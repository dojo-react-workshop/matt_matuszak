const express = require('express');
const bp = require('body-parser')

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.get('/api/ping', (request, response) => {
    response.json({message: 'hello'})
})

const todos = [
    {id: 123, completed: false, text: 'go fishing', created: new Date()}
    , {id: 456, completed: true, text: 'go hunting', created: new Date()}
    , {id: 789, completed: false, text: 'mow lawn', created: new Date()}
];

app.get('/api/todos', (request, response) => {
    console.log(request.query)
    switch(request.query.filter) {
        case 'All':
            response.json(todos);
            break;
        case 'Active':
            const activeTodos = todos.filter(todo => !todo.completed)
            response.json(activeTodos);
            break;
        case 'Completed':
            const completedTodos = todos.filter(todo => todo.completed)
            response.json(completedTodos);
            break;
        default: response.json(todos);
    }
});

app.post('/api/todos', (request, response) => {
    console.log(request.body);
    const newTodo = {
        id: Math.floor(Math.random()*10000000)
        , completed: false
        , text: request.body.text
        , date: new Date()
    }
    todos.push(newTodo)
    response.json(newTodo)
})


app.listen(6500, () => console.log('started'))
