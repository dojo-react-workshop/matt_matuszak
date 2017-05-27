$(document).ready(() => {
    console.log('actions.js is ready!');
    const http = axios;

    $('#submit').click(() => {
        console.log('submit was clicked');
        const formData = {
            name: $('#name').val(),
            location: $('#location').val(),
            language: $('#language').val(),
            comments: $('#comments').val()
        }
        console.log('form data-->', formData);

        http.post('/api/v1/survey', formData)
            .then(function(response) {
                console.log('my response-->', response);
                const responseData = response.data;
                console.log('my response data-->', responseData);
                $('#nameText').text(responseData.name);
                $('#locationText').text(responseData.location);
                $('#languageText').text(responseData.language);
                $('#commentsText').text(responseData.comments);
                $('#timestampText').text(new Date(responseData.created).toLocaleTimeString());
            })
            .catch(function(error) {
                console.log(error);
            });

    });
})
