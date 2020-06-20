$(document).ready(function () {
    var storeSwiper = new Swiper('.store-swiper-container', {
        autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        centeredSlides: true,
		centeredSlidesBounds: false,
		spaceBetween: 22,
    })
})
