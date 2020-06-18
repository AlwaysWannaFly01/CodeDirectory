$(document).ready(function () {
    var storeSwiper = new Swiper('.store-swiper-container', {
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        centeredSlides: true,
		centeredSlidesBounds: false,
		spaceBetween: 22,
    })
})
