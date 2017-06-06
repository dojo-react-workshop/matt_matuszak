
class TodoAPI {


    all(request, response) {
        response.json(
            [
                {completed: false, name: 'go fishing', id: (Math.floor(Math.random() * 10000))}
                , {completed: false, name: 'go hunting', id: (Math.floor(Math.random() * 10000))}
                , {completed: false, name: 'mow lawn', id: (Math.floor(Math.random() * 10000))}
            ]
        )
    }


}


module.exports = new TodoAPI();
