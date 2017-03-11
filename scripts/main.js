$(function() {
    $(".container").click(function() {
        $(".stick").toggleClass(function() {
            console.log($(this).is('.open, .close'));
            return $(this).is('.open, .close') ? 'open close' : 'open';
        });
    })
});
