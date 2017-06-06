const express = require('express');
const bp = require('body-parser');
const path = require('path');
const axios = require('axios')

const app = express();

app.use(bp.urlencoded({extended: true}))
app.use(bp.json())

app.get('/api/ping', (request, response) => {
    response.json({message: 'you have reached me!'})
})

app.get('/api/github/user-search', (request, response) => {

    console.log('Request Params:', request.query);

    axios
        .get(`https://api.github.com/search/users?q=${request.query.searchQuery}+in:${request.query.userOption}`)
        .then((githubResponse) => {
            // console.log(githubResponse.data)
            response.json(githubResponse.data)
        })
        .catch((error) => {
            console.log('response error-->', error);
            response.json({error: error})
        })

})


app.listen(9000, () => console.log('started api!'))
