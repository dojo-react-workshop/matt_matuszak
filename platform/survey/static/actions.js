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


        http({
            url: '/api/v1/test',
            method: 'post',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        }).then((response) => {
            console.log('TEST RESPONSE -->', response);
        })

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
                $('#surveyFormPanel').fadeToggle(1000);
                setTimeout(() => {
                    $('#surveySuccessfulAdd').fadeToggle(1000);
                }, 1000)
            })
            .catch(function(error) {
                console.log(error);
            });

    });

    $('#goBack').click(() => {
        $('#surveySuccessfulAdd').fadeToggle(1000);
        setTimeout(() => {
            $('#surveyFormPanel').fadeToggle(1000);
        }, 1000)
    });


})
