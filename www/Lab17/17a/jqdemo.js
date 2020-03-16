$(document).ready(function () {
    $('.panel').css('border', '5px dashed red');
    $('.panel').css('padding', '10px');

    $('div').each((i, ele) => {
        $(ele).css('padding', '3px');
        $(ele).css('background-color', 'gray');
    });

    $('.cat').css('background-color', 'green');
    $('.dog').css('background-color', 'red');

    $('#lab').css('border', '1px solid yellow');

    $('.dog').last().css('background-color', 'yellow');

    $('#calico').css('width', '50%');

    $('body').css('background-color', 'green');
    $('body').css('color', 'white');
});
