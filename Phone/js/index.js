NProgress.configure({
    showSpinner: false,
    parent: 'body'
});

$(document).ready(function () {
    console.log($('body').width())
    console.log($('body').height())
    $('body').show();
    $('.loading_bg').css({ 'height': $('body').height() })
    // NProgress.start();

    // setTimeout(function () {

        NProgress.done();
        $('.loading_bg').hide()
        $('.loading_transparent').hide()
        $('.fade').removeClass('out');


        /* swiper配置 */
        var productSwiper = new Swiper('.product-swiper-container', {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            /* 自动播放 */
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // },
            fadeEffect: true, //true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。当你的slide中图片大小不同时可以用到。
            coverflowEffect: {
                rotate: 25, //slide做3d旋转时Y轴的旋转角度
                stretch: -10, //每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
                depth: 290, //slide的位置深度。值越大z轴距离越远，看起来越小。
                modifier: 2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
                slideShadows: false, //是否开启slide阴影
            },
            slideActiveClass: 'product-slide-active',
            spaceBetween: 10,
        })

        var bannerSwiper = new Swiper('.banner-swiper-container', {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            centeredSlidesBounds: true,
            loop: true,
        })

        var processSwiper = new Swiper('.process-swiper-container', {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
        })

        var storeSwiper = new Swiper('.store-swiper-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: false,
            spaceBetween: 10,
        })
    // }, 2400)

})
