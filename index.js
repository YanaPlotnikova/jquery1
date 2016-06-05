$(function() {
    $('.btn').click(function() {
        if ($('h1').html()==='Hello!') {
            $('h1').html('Goodbye!')
        } else {
            $('h1').html('Hello!')
        };
    })
})

