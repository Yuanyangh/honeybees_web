$(document).ready(function () { 
    var swiper = new Swiper(".mySwiper", {
        // centeredSlides: true,
        // loop: true,
        // slidesPerView: 3,
        // spaceBetween: -50,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        coverflowEffect: {
        rotate: 10,
        stretch: 10,
        depth: 200,
        modifier: 1,
        slideShadows: true,
        },
        autoplay: {
        delay: 7500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        on: {
            init: function() {
                var currentIndex = this.realIndex;
                
                var children = document.getElementById("honeyBeeTeam").children;
                for (var i = 0; i < children.length; i++) {
                    if (i === currentIndex) {
                        children[i].style.display = "block"; // Make the active child visible
                        // Or using classList to remove 'hidden' class if you prefer the class-based approach
                        // children[i].classList.remove('hidden');
                    } else {
                        children[i].style.display = "none"; // Hide other children
                        // Or adding 'hidden' class to others
                        // children[i].classList.add('hidden');
                    }
                }
            },
            slideChange: function () {
                var currentIndex = this.realIndex;
                                
                var children = document.getElementById("honeyBeeTeam").children;
                for (var i = 0; i < children.length; i++) {
                    if (i === currentIndex) {
                        children[i].style.display = "block"; // Make the active child visible
                        // Or using classList to remove 'hidden' class if you prefer the class-based approach
                        // children[i].classList.remove('hidden');
                    } else {
                        children[i].style.display = "none"; // Hide other children
                        // Or adding 'hidden' class to others
                        // children[i].classList.add('hidden');
                    }
                }
            },
        },
    });
})
