$(window).scroll(function(){
    if ($("#nav").offset().top > 56) {
        /*Cambiando color de navbar*/
        $("#nav").removeClass("_p-5");
    }else{
        /*Cambiando color de navbar*/
        $("#nav").addClass("_p-5");
    }
});

/* Video Modal Control */
$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});

/* Inicializando WOW */
new WOW().init();