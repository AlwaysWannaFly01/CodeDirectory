$(function () {
    $('#dowebok').fullpage({
        sectionsColor: [
            '#1bbc9b',
            '#fff',
            '#7BAABE',
            '#fff',
            '#f7f7f7',
        ],
        loopBottom: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        navigation: true,
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                console.log('滚动到第1屏')
            }
            if (
                index == 2 ||
                index == 3 ||
                index == 4 ||
                index == 5 ||
                index == 6
            ) {
                console.log('滚动到第2屏')
                // $(".menuAnchor").stop().animate({backgroundColor: '#C82D21', opacity: '1'},1000);
                $('.menuAnchor').css('background', '#C82D21')
                // $('.menuAnchor')
                //     .stop()
                //     .animate({ opacity: '0' }, 500, function () {
                //         $(this)
                //             .stop()
                //             .css('background', '#C82D21')
                //             .animate({ opacity: '1' },500)
                //     })
                // $('.menuAnchor').fadeTo(1000, 1)
            }
        },
        onLeave: function (index, direction) {
            console.log(index, direction)
            $('.menuList').hide()
            if (index == '1') {
            }
            if (
                index == '2' ||
                index == '3' ||
                index == '4' ||
                index == '5' ||
                index == '6'
            ) {
                console.log('离开第2屏')
                if (direction == '1') {
                    console.log('进入第1屏')
                    // $(".menuAnchor").stop().animate({backgroundColor: 'transparent',opacity: '0'});
                    // $('.menuAnchor')
                    //     .css('background', '#C82D21')
                    //     .stop()
                    //     .animate({ opacity: '1' }, 500, function () {
                    //         $(this).css('background', 'transparent')
                    //     })
                    // $('.menuAnchor').fadeTo(1000, 0, function(){
                    // 	$('.menuAnchor2').show()
                    // })
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

    setInterval(function () {
        $.fn.fullpage.moveSlideRight()
    }, 3000)

    /* swiper配置 */
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow', // slide的切换效果，默认为"slide","fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
        // grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        centeredSlides: true,
        slidesPerView: 'auto',

        // pagination: {
        // 	el: '.product_pagination',
        // 	bulletClass : 'awy_bullet',
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         switch (index) {
        //             case 0:
        //                 text = '沙拉'
        //                 break
        //             case 1:
        //                 text = '三明治'
        //                 break
        //             case 2:
        //                 text = '谷物饭'
        //                 break
        //             case 3:
        //                 text = '意面'
        //                 break
        //             case 4:
        //                 text = '帕尼尼'
        //                 break
        //             case 5:
        //                 text = '小食'
        //                 break
        //             case 6:
        //                 text = '饮品'
        //                 break
        //         }
        //         return '<span class="' + className + '">' + text + '</span>'
        //     },
        // },
        loop: true,
        /* 自动播放 */
        autoplay: {
            delay: 2000,
            disableOnInteraction: false /* 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay */,
        },
        fadeEffect: true, //true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。当你的slide中图片大小不同时可以用到。
        coverflowEffect: {
            rotate: 25, //slide做3d旋转时Y轴的旋转角度
            stretch: -10, //每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
            depth: 120, //slide的位置深度。值越大z轴距离越远，看起来越小。
            modifier: 2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
            slideShadows: true, //是否开启slide阴影
        },
    })
})
