const axios = require('axios')

class GitHubController {


    repos(request, response) {

        // console.log(request.params);
        // response.json({message:'here'+request.params.userName})

        axios
            .get(`https://api.github.com/users/${request.params.userName}/repos`)
            .then((repoResponse) => {
                // console.log(response)
                const repos = repoResponse.data;
                const cleanedUpRepos = repos.map((repo) => {
                    return {
                        id: repo.id
                        , name: repo.name
                    }
                })
                console.log(cleanedUpRepos);
                response.json(
                    cleanedUpRepos
                )
            })
            .catch((error) => {
                console.log(error);
            })


    }


}

module.exports = new GitHubController()
