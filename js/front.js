$(window).scroll(function(){
    if ($("#nav").offset().top > 56) {
        /*Cambiando color de navbar*/
        $("#nav").removeClass("bg-transparent");
        $("#nav").addClass("glass");
        /* Removiendo padding */
        $("#nav").removeClass("_p-5");
        /*Cambiado tamaño de logo*/
        $("#logo").removeClass("img-rps");
        $("#logo").addClass("_img-rps");
    }else{
        /*Cambiando color de navbar*/
        $("#nav").removeClass("glass");
        $("#nav").addClass("bg-transparent");
        /* Añadiendo padding */
        $("#nav").addClass("_p-5");
        /*Cambiado tamaño de logo*/
        $("#logo").addClass("img-rps");
        $("#logo").removeClass("_img-rps");
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