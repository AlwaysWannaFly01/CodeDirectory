$(function () {
    $('#dowebok').fullpage({
        sectionsColor: [
            '#1bbc9b',
            '#4BBFC3',
            '#7BAABE',
            '#fff',
            '#f7f7f7',
            '#000',
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

    $('.menuBtn').click(function () {
        console.log(123)
        $('.menuList').slideDown(500)
    })

    $('.menuList .oper span').click(function () {
        $('.menuList').slideUp(300)
    })
    setInterval(function () {
        $.fn.fullpage.moveSlideRight()
    }, 3000)

    /* swiper配置 */
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        // grabCursor: true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
			el: '.product_pagination',
			bulletClass : 'awy_bullet',
            clickable: true,
            renderBullet: function (index, className) {
                switch (index) {
                    case 0:
                        text = '沙拉'
                        break
                    case 1:
                        text = '三明治'
                        break
                    case 2:
                        text = '谷物饭'
                        break
                    case 3:
                        text = '意面'
                        break
                    case 4:
                        text = '帕尼尼'
                        break
                    case 5:
                        text = '小食'
                        break
                    case 6:
                        text = '饮品'
                        break
                }
                return '<span class="' + className + '">' + text + '</span>'
            },
        },
        loop: true,
    })
})
