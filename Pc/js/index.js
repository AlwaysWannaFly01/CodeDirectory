// NProgress.configure({
//     showSpinner: false, // 不显示转动的小圆圈
//     // mininum: 0.1,
//     // easing: 'ease',
//     // speed: 500,
//     // trickle: false,
//     // trickleSpeed: 200,
//     parent: 'body'
// });

$(function () {
    // $('html').addClass('height100')
    $('body').show();
    // $('body').addClass('height100 bg')
    // $('.aaa').animate({
    //     'opacity': '1'
    // }, 500, function () {
    //     $(this).stop().animate({
    //         'opacity': '0.9'
    //     })
    // })
    // $('body').addClass('height100 bg fade out brief big')

    // NProgress.start();
    // setTimeout(function () {
    NProgress.done();
    // if ($('html').hasClass('height100')) {
    // 	$('html').removeClass('height100')
    // 	$('body').removeClass('height100 bg')

    // }
    $('.loading_bg').hide()
    $('.loading_transparent').hide()

    // $('.aaa').animate({
    //     'opacity': '0'
    // })
    $('.fade').removeClass('out');

    $('#dowebok').fullpage({
        sectionsColor: [
            '',
            '#fff',
            '',
            '#fff',
            '#f7f7f7',
            ''
        ],
        loopBottom: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        // navigation: true,
        loopHorizontal:true,
        paddingTop:'70px',
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                console.log('滚动到第1屏')
                // $('#menu li.active').addClass('albedo')
            }
            if (
                index == 2 ||
                index == 3 ||
                index == 4 ||
                index == 5 ||
                index == 6
            ) {
                console.log('滚动到第' + index + '屏')
                $('.menuAnchor').css('background', '#C82D21')
                // let liList = $('#menu').find('li')
                // for (let i = 0; i < liList.length - 1; i++) {
                //     console.log($(liList[i]).attr('data-menuanchor'));
                //     $(liList[i]).addClass('albedo')
                // }
            }
        },
        onLeave: function (index, direction) {
            console.log(index, direction)
            $('.menuList').hide()
            if (index == '1') {
                console.log('离开第一屏');
                $('#menu li.active').removeClass('albedo white')
            }
            if (
                index == '2' ||
                index == '3' ||
                index == '4' ||
                index == '5' ||
                index == '6'
            ) {
                console.log('离开第' + index + '屏')
                // if (index === 6) {
                //     let liList = $('#menu').find('li')
                //     // console.log(liList);
                //     for (let i = 0; i < liList.length - 1; i++) {
                //         console.log($(liList[i]).attr('data-menuanchor'));
                //         $(liList[i]).removeClass('albedo')
                //     }
                // }
                if (direction == '1') {
                    console.log('进入第1屏')
                    $('.menuAnchor').animate(
                        { opacity: '1' },
                        500,
                        function () {
                            $(this).css({
                                background: 'transparent',
                            })
                        }
                    )
                }
            }
            // if (index == '6') {
            //     console.log('离开第' + index + '屏')
            //     let liList = $('#menu').find('li')
            //     for (let i = 0; i < liList.length - 1; i++) {
            //         $(liList[i]).removeClass('albedo')
            //     }
            // }

        },
    })

    setInterval(function () {
        $.fn.fullpage.moveSlideRight()
    }, 3000)

    /* swiper配置 */
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow', // slide的切换效果，默认为"slide","fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
        grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        /* 自动播放 */
        autoplay: {
            delay: 2000,
            disableOnInteraction: false /* 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay */,
        },
        fadeEffect: true, //true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。当你的slide中图片大小不同时可以用到。
        coverflowEffect: {
            rotate: 20, //slide做3d旋转时Y轴的旋转角度
            stretch: -10, //每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
            depth: 120, //slide的位置深度。值越大z轴距离越远，看起来越小。
            modifier: 2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
            slideShadows: false, //是否开启slide阴影
        },
        slideActiveClass: 'product-slide-active',
        spaceBetween: 15,
    })

    var storeSwiper = new Swiper('.store-swiper-container', {
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        centeredSlidesBounds: false,
        spaceBetween: 15,
        loop: true
    })

    // }, 2400);
})
