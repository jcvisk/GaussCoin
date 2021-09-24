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


$('#item1').click(active1);
$('#item2').click(active2);
$('#item3').click(active3);
$('#item4').click(active4);
$('#item5').click(active5);

function active1(){
    if ( !$('#item1').hasClass("active")) {
        $('#item1').addClass("active");

        $("#item2").removeClass("active");
        $("#item3").removeClass("active");
        $("#item4").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active2(){
    if ( !$('#item2').hasClass("active")) {
        $('#item2').addClass("active");

        $("#item1").removeClass("active");
        $("#item3").removeClass("active");
        $("#item4").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active3(){
    if ( !$('#item3').hasClass("active")) {
        $('#item3').addClass("active");

        $("#item1").removeClass("active");
        $("#item2").removeClass("active");
        $("#item4").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active4(){
    if ( !$('#item4').hasClass("active")) {
        $('#item4').addClass("active");

        $("#item1").removeClass("active");
        $("#item2").removeClass("active");
        $("#item3").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active5(){
    if ( !$('#item5').hasClass("active")) {
        $('#item5').addClass("active");

        $("#item1").removeClass("active");
        $("#item2").removeClass("active");
        $("#item3").removeClass("active");
        $("#item4").removeClass("active");

    }
}
