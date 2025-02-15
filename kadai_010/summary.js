$('#change-color').on('click', function() {
    $(this).css('color', 'red');
});

$('#change-text').on('click', function() {
    $(this).text('変わりました');
});

$('#fade-out').on('click', function() {
    $(this).fadeOut();
});

$('#fade-in').on('click', function() {
    $('#target').fadeIn();
});