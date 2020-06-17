$(document).ready(function () {
    // alert('ready')
    // $('#dowebok').fullpage({
    //     sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    //     autoScrolling: true,
    //     scrollHorizontally: true
    // });

    var swiper = new Swiper('.process-swiper-container', {
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true,
	})
	
	var swiper = new Swiper('.store-swiper-container', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
		},
		loop: true,
		slidesPerView: 'auto',
        centeredSlides: true,
		// centeredSlidesBounds: true,
		spaceBetween: 30,
    })
})
