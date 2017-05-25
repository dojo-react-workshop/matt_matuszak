$(document).ready(() => {
    console.log('actions.js is ready!');

    $('#submit').click(()=> {
        console.log('submit was clicked');
        const formData = {
              name: $('#name').val()
            , location: $('#location').val()
            , language: $('#language').val()
            , comments: $('#comments').val()
        }
        console.log(formData);

        $.post('/api/v1/survey', formData, (responseData) => {
            console.log(responseData);
            $('#nameText').text(responseData.name);
            $('#locationText').text(responseData.location);
            $('#languageText').text(responseData.language);
            $('#commentsText').text(responseData.comments);
            $('#timestampText').text(new Date(responseData.created).toLocaleTimeString());
        }, 'json');
    });
})
