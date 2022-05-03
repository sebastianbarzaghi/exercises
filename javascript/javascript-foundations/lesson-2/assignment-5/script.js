document.addEventListener('keyup', function(event) {
    if (event.key == 'Y') {
        console.log('Yes!')
    } else if (event.key == 'N') {
        console.log('No!')
    } else {
        console.log('I don\'t understand...')
    }
})