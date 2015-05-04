$(document).ready(function() {
    var images = ['01.png', '02.png', '03.png', '04.png', '05.png'];

    $('.full').css({'background-image': 'url(./img/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
});
