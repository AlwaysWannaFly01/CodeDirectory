$(function () {
    /*动态添加导航active*/
    const navList = ['team', 'commonCommit', 'successCase', 'lawyerState', 'lawyerArticle', "lawFirm", "contact", "serviceContent"]
    const getChildActive = function (param, locationHref) {
        let index = locationHref.indexOf(param)
        if (index !== -1) {
            let childLi = $('.wfPcHead ul.wf-ul1').children('li')
            // console.log(childLi)
            for (let i = 0; i < childLi.length; i++) {
                let childA = childLi[i]
                if ($(childA).hasClass(param)) {
                    $(childA).addClass('active')
                }
            }
        }
    }

    $('#header').load('../../header.html', function () {
        let locationHref = window.location.href
        // console.log('locationHref:', locationHref)
        navList.forEach((item) => {
            getChildActive(item, locationHref)
        })

        $('.wf-ul1 li').hover(function () {
            $(this).children('.down-list').css({'height': 'auto'});
        }, function () {
            $(this).children('.down-list').css({'height': '0'});
        })
    })

    $('#footer').load('../../footer.html', function () {

    })

    /*常见犯罪轮播*/
    const swiper = new Swiper('.cc-part-1-swiper', {
        // pagination: {
        //     el: '.cc-part-1-swiper .swiper-pagination',
        //     clickable: false,
        // },
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
    });

    var mySwiper3 = new Swiper('.detail-swiper-1 .swiper-container', {
        direction: 'horizontal',
        loop: false,
        autoplay: false,
        speed: 500,
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        },
        autoplayDisableOnInteraction: false,
    });
})



