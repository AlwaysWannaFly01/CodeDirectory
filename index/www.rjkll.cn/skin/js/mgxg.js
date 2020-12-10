/*hdmin*/
$(function () {
    var top = $('.nav').offset().top; // 获取顶部导航距离顶部的偏移
    $(window)
        .scroll(function () {
            // console.log('scrollTop:=>', $(window).scrollTop());
            // console.log('top:=>', top)
            if ($(window).scrollTop() > top) {
                $('.nav').addClass('hdmin')
                $('.logo img').attr('src', 'skin/images/logomin.jpg')

                if ($(window).scrollTop() > 100) {
                    /* 这里用.show()也可以 只是效果太丑 */
                    $('.fixs').fadeIn(1000)
                    /*隐藏底部留言*/
                    $('.tom span').click(function () {
                        $('.tom').css('display', 'none')
                    })
                } else {
                    $('.fixs').fadeOut(300)
                }
            } else {
                $('.nav').removeClass('hdmin')
                $('.logo img').attr('src', 'skin/images/logo.jpg')
            }
        }).trigger('scroll')

    /* 回到顶部 */
    $('.totop').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000)
        return false
    })

})

// function switchbox(a) {
//     a == 1
//         ? $('.slide.slide3 .arrowcontainer').show()
//         : $('.slide.slide3 .arrowcontainer').hide(),
//         $('.slide.slide3').removeClass('s1').removeClass('s2'),
//         $('.slide.slide3').addClass('s' + a),
//         $('.slide.slide3 .img' + a).addClass('selected'),
//         $('.slide.slide3 .content').hide(),
//         $('.slide.slide3 .content.content' + a).show(),
//         $('.slide.slide3 .bgimg').remove()
// }

/*
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
*/
