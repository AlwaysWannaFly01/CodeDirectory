NProgress.configure({
    showSpinner: false, // 不显示转动的小圆圈
    parent: 'body'
});

$(function () {
    NProgress.start();
    $('body').show();
    $('.loading_bg').css({ 'height': $('body').height(), 'display': 'block' })
    $('.loading_transparent').css({ 'display': 'block' })
    setTimeout(function () {
        NProgress.done();
        $('.loading_bg').hide()
        $('.loading_transparent').hide()
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
            // loopHorizontal: true,
            // continuousVertical: true,
            paddingTop: '70px',
            afterRender: function () {
                $("#menu li").each(function (index, domEle) {
                    if (index === 0) {
                        $(domEle).children().addClass('white').children('span').text('轮播图');
                    }
                })

            },
            afterLoad: function (anchorLink, index) {
                if (index == 1) {
                    $("#menu li").each(function (index, domEle) {
                        $(domEle).children('a').removeClass('red white').children('span').text('')
                    })
                    $($('#menu li')[0]).children('a').addClass('white').children('span').text('轮播图')
                }
                if (
                    index == 2 ||
                    index == 3 ||
                    index == 4 ||
                    index == 5 ||
                    index == 6
                ) {
                    $('.menuAnchor').css('background', '#C82D21')
                    if (index == 2) {
                        $("#menu li").each(function (index, domEle) {
                            $(domEle).children('a').removeClass('red white').children('span').text('')
                        })
                        $($('#menu li')[1]).children('a').addClass('red').children('span').text('产品介绍')
                        // swiper.autoplay.start();
                    }
                    if (index == 3) {
                        $("#menu li").each(function (index, domEle) {
                            $(domEle).children('a').removeClass('red white').children('span').text('')
                        })
                        $($('#menu li')[2]).children('a').addClass('red').children('span').text('品牌介绍')
                    }
                    if (index == 4) {
                        $("#menu li").each(function (index, domEle) {
                            $(domEle).children('a').removeClass('red white').children('span').text('')
                        })
                        $($('#menu li')[3]).children('a').addClass('red').children('span').text('加盟流程')

                        $('.arrow1').fadeIn(900, function () {
                            $('.arrow2').fadeIn(900, function () {
                                $('.arrow3').fadeIn(900, function () {
                                    $('.arrow4').fadeIn(900, function () {
                                        $('.arrow5').fadeIn(900, function () {
                                            $('.arrow6').fadeIn(900, function () {
                                                $('.arrow7').fadeIn(900, function () {
                                                    $('.arrow8').fadeIn(900, function () {
                                                        $('.arrow9').fadeIn(900, function () {
                                                            $('.arrow10').fadeIn(900)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                    if (index == 5) {
                        $("#menu li").each(function (index, domEle) {
                            $(domEle).children('a').removeClass('red white').children('span').text('')
                        })
                        $($('#menu li')[4]).children('a').addClass('red').children('span').text('门店展示')
                    }

                    if (index == 6) {
                        $("#menu li").each(function (index, domEle) {
                            $(domEle).children('a').removeClass('red white').children('span').text('')
                        })
                        $($('#menu li')[5]).children('a').addClass('red').children('span').text('申请加盟')
                    }
                }
            },
            onLeave: function (index, direction) {
                // console.log(index, direction)
                $('.menuList').hide()
                if (index == '1') {
                    $("#menu li").each(function (index, domEle) {
                        if (index === 0) {
                            $(domEle).children().removeClass('white')
                        }
                    })
                }
                if (
                    index == '2' ||
                    index == '3' ||
                    index == '4' ||
                    index == '5' ||
                    index == '6'
                ) {
                    // console.log('离开第' + index + '屏')
                    if (direction == '1') {
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

            },
        })
        var bannerSwiper = new Swiper('.banner-swiper-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            centeredSlidesBounds: true,
            loop: true,
        })

        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow', // slide的切换效果，默认为"slide","fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
            grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: false,
            /* 自动播放 */
            autoplay: {
                delay: 2700,
                disableOnInteraction: false /* 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay */,
            },
            fadeEffect: true, //true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。当你的slide中图片大小不同时可以用到。
            coverflowEffect: {
                rotate: 20, //slide做3d旋转时Y轴的旋转角度
                stretch: -10, //每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
                depth: 160, //slide的位置深度。值越大z轴距离越远，看起来越小。
                modifier: 2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
                slideShadows: false, //是否开启slide阴影
            },
            slideActiveClass: 'product-slide-active',
            spaceBetween: 20,
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
            spaceBetween: 15,
            loop: false
        })

    }, 2000);
})
