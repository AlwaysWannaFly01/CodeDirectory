$(function () {
    $('#dowebok').fullpage({
        sectionsColor: [
            '#1bbc9b',
            '#4BBFC3',
            '#7BAABE',
            '#f90',
            'salmon',
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
})
