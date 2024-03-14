$(document).ready(function () {


    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 200,
            responsiveClass: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            },
            onInitialized: scaleCenterItem,
            onTranslated: scaleCenterItem
        });
    };

    function scaleCenterItem(event) {
        // Reset scale for all items
        $(event.target).find('.owl-item').css('transform', 'scale(1)');

        // Scale up the center item
        $(event.target).find('.owl-item.center').css('transform', 'scale(1.4)');
    }
    carousels();


});