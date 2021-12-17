/* Responsividade e detalhes do carrossel,  */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4.5
        },
        1000:{
            items:6.5
        }
    }
})