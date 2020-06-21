$(document).ready(function () {
    var navSwiper = new Swiper('.topNav', {
        freeMode: true,
        slidesPerView: 'auto',
        freeModeSticky: true,
    });

    $('.topNav .swiper-slide').on('click', function (e) {
        e.preventDefault()
        $(".topNav .active").removeClass('active')
        $(this).addClass('active')
    })

})
