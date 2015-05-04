$(document).ready(function() {
    var images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

    $('.full').css({'background-image': 'url(./img/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
});
