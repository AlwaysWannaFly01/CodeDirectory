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
        lazy: true
    });

    //默认不开启
    storeSwiper.autoplay.stop();

    $(document).scroll(function() {
        sTop = $(this).scrollTop(); //获取滚动条的位置
        var sh = $(window).height();//视口高度
        var ft = $(".store-swiper-container").offset().top;

        //滚动条位置
        if (sTop > (ft - sh)) {
            storeSwiper.autoplay.start();
        }
    });
});
