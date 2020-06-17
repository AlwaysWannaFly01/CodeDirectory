$(document).ready(function () {
    // alert('ready')
    // $('#dowebok').fullpage({
    //     sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    //     autoScrolling: true,
    //     scrollHorizontally: true
    // });

    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true,
    })
})
