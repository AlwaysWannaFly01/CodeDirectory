(function (doc, win) {
    var docEl = doc.documentElement,  //文档根标签
        resizeEvent = 'orientationchange' in window ? 'orientationchang' : 'resize'; //viewport变化事件源
    var rescale = function () {
        //重置方法
        win.clientWidth = docEl.clientWidth;
        if (!win.clientWidth) return;
        // 改变DOM根节点fontSize大小的值;
        // (屏幕宽度/设计图宽度) = 缩放或扩大的比例值;
        docEl.style.fontSize = 40 * (win.clientWidth / 750) + 'px';
    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, rescale, false);
    doc.addEventListener('DOMContentLoaded', rescale, false);
})(document, window);

$(function () {
    $('.wf-ul1 li').hover(function () {
        $(this).children('.down-list').css({'height': 'auto'});
    }, function () {
        $(this).children('.down-list').css({'height': '0'});
    })

    $('.indexVideo').click(function () {
        $(this).children('img').css('display', 'none');
        $(this).children('div').css('display', 'none');
        var indexVideo = $('#indexVideo').get(0);
        $('#indexVideo').css({'display': 'block', 'height': $('#indexVideoImg').height() + 'px'});
        indexVideo.play();
    })


    $(".gfwx").hover(function () {
        $('.topbox-nei ul .gfwx p').css({'height': '114px', 'overflow': 'inherit'});
    }, function () {
        $('.topbox-nei ul .gfwx p').css({'height': '0px', 'overflow': 'hidden'});
    })
    $(".gfwx").click(function () {
        if ($('.topbox-nei ul .gfwx p').attr('style') == 'height: 114px; overflow: inherit;') {
            $('.topbox-nei ul .gfwx p').css({'height': '0px', 'overflow': 'hidden'});
        } else {
            $('.topbox-nei ul .gfwx p').css({'height': '114px', 'overflow': 'inherit'});
        }

    })

    var mySwiper1 = new Swiper('.swiper-container1', {
        // 轮播图的方向，也可以是vertical方向
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,//时间间隔
        },
        speed: 2000,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        autoplayDisableOnInteraction: false,
    });


    $('.wfPhone-menu').click(function () {
        $(".phone-caidan-box").css({'height': 'auto', 'overflow': 'auto'});
        // $(".phone-caidan-box").css({'height':'95vh','border-top':'1px solid #b8bcc7','overflow':'auto','padding-bottom':'60px'});
        $(".wfPhone-close").css('display', 'inline-block');
        $(this).css('display', 'none');
        $('.icon-caidan').css('display', 'none');
        $('.phone-caidan-box2').css('display', 'none');
    })
    $('.wfPhone-close').click(function () {
        $(".phone-caidan-box").css({'height': '0', 'border-top': '0', 'overflow': 'hidden', 'padding-bottom': '0px'});
        $(".wfPhone-menu").css('display', 'inline-block');
        $(this).css('display', 'none');
        $('.icon-caidan').css('display', 'inline-block');
    })
    $('.phone-caidan-box li').click(function () {
        if ($(this).children('a').attr('href') != 'javascript:;') {
            $(".phone-caidan-box").css({'height': '0', 'border-top': '0', 'overflow': 'hidden'});
            $(".wfPhone-menu").css('display', 'inline-block');
            $('.wfPhone-close').css('display', 'none');
            $('.icon-caidan').css('display', 'inline-block');
        } else {
            if ($(this).children('.phone-header-xiala').attr('style') == 'height: auto;') {
                $(this).children('.phone-header-xiala').css({'height': '0'});
            } else {
                $(this).children('.phone-header-xiala').css({'height': 'auto'});
            }

        }

    })

    $(".phone-gw").click(function () {
        $('.phone-weixin-box').css('display', 'block');
    })
    $('.phone-weixin-box').click(function () {
        $(this).css('display', 'none');
    })

    $('.icon-caidan').click(function () {
        console.log($('.phone-caidan-box2').attr('style'))
        if ($('.phone-caidan-box2').attr('style') == 'display: block;') {
            $('.phone-caidan-box2').css('display', 'none');
        } else {
            $('.phone-caidan-box2').css('display', 'block');
        }

    })
    $('.phone-caidan-box2').click(function (e) {
        console.log($(e.toElement).attr('class'));
        if ($(e.toElement).attr('class') == 'phone-caidan-box2') {
            $(this).css('display', 'none');
        }
    })

    $('.tuandui li').click(function () {
        console.log($(this).children('.tuandui-tanchu').attr('style'))
        if ($(this).children('.tuandui-tanchu').attr('style') == 'height: 0px; overflow: hidden;' || $(this).children('.tuandui-tanchu').attr('style') == undefined) {
            $('.tuandui-tanchu').css({'height': '0', 'overflow': 'hidden'});
            $(this).children('.tuandui-tanchu').css({'height': 'auto', 'overflow': 'inherit'});

        } else {
            $(this).children('.tuandui-tanchu').css({'height': '0', 'overflow': 'hidden'});
        }

    })

    $('.tuandui li').hover(function () {
        $(this).children('.tuandui-tanchu').css({'height': 'auto', 'overflow': 'inherit'});
    }, function () {
        $(this).children('.tuandui-tanchu').css({'height': '0', 'overflow': 'hidden'});
    })

    var times = setInterval(function () {
        var ImgHeight = $(".team-lvshi-left img").height();
        if (ImgHeight > 0) {
            clearInterval(times);
            $('.team-lvshi>a').css('height', ImgHeight + "px");
        }
    }, 100);
    $(window).resize(function () {
        var ImgHeight = $(".team-lvshi-left img").height();
        $('.team-lvshi>a').css('height', ImgHeight + "px");
    })

    $('.team-lvshi>a').hover(function () {
        $(this).children('.team-lvshi-top').children('.team-lvshi-right').css('color', '#d39d45');
        $(this).children('.team-lvshi-bot').css('background', '#e0e0e0');
    }, function () {
        $(this).children('.team-lvshi-top').children('.team-lvshi-right').css('color', '#000');
        $(this).children('.team-lvshi-bot').css('background', '#f2f2f2');
    })

    $('.youxiu').hover(function () {
        $('.youxiu').removeClass('youxiu-active');
        $(this).addClass('youxiu-active');
    })
    $('.youxiu').click(function () {
        $('.youxiu').removeClass('youxiu-active');
        $(this).addClass('youxiu-active');
    })

    $('.phone-youxiu').click(function () {
        $('.phone-youxiu-tan').css('display', 'none');
        $(this).children('.phone-youxiu-tan').css('display', 'block');
    })

    var mySwiper2 = new Swiper('.swiper-container2', {
        direction: 'horizontal',
        loop: false,
        autoplay: false,
        speed: 500,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
        autoplayDisableOnInteraction: false,
    });

    $('.swiper-slide2>div').hover(function () {
        $(this).children('.yewu-fuwu-tan').css('display', 'block');
    }, function () {
        $(this).children('.yewu-fuwu-tan').css('display', 'none');
    })

    $('.yewu-zixun-bot-left').hover(function () {
        $(this).children('a').children('.yewu-t').children('.ywzxt').css('text-decoration', 'underline');
    }, function () {
        $(this).children('a').children('.yewu-t').children('.ywzxt').css('text-decoration', 'none');
    })

    $('.s-anli-xxk-box ul li').click(function () {
        $('.s-anli-xxk-box ul li').removeClass('s-anli-active');
        $(this).addClass('s-anli-active');
    })


    $('.s-anli-con-left-list').hover(function () {
        $(this).css('background', '#f5f5f5').children('.s-anli-con-left-list-right').children('.s-anli-con-left-list-right-btn').children('a').css('background', '#d19e43');
    }, function () {
        $('.s-anli-con-left-list').css('background', '#fff').children('.s-anli-con-left-list-right').children('.s-anli-con-left-list-right-btn').children('a').css('background', '#252757');
    })


    $('.s-anli-con-right-li-c li').hover(function () {
        $(this).children('a').children('p').css('color', '#d09d42');
    }, function () {
        $(this).children('a').children('p').css('color', '#000');
    })

    $('.shuofa-banner-tuijian-bot li').hover(function () {
        $(this).css({'background': '#281c30', 'color': '#ff8817'}).children('a').css('color', '#ff8817');
    }, function () {
        $(this).css({'background': 'transparent', 'color': '#fff'}).children('a').css('color', '#fff');
    })

    var times1 = setInterval(function () {
        var imgheight = $('.shuofa-yinpin-ul-left-top-left img').height();
        if (imgheight > 0) {
            clearInterval(times1);
            console.log(imgheight)
            $('.shuofa-yinpin-ul-left-top-right-box>a').css('height', imgheight + 'px');
        }

    }, 100)
    // 	var times2=setInterval(function(){

    // 		var width=$('.jieshao').width();
    // 		if(width>0){
    // 			clearInterval(times2);
    // 			if($(window).width()>768){
    // 				var w=width*0.8;
    //  			var h=w/2;
    //  			$('.jieshao-video').css({'width':w+'px','height':h+'px'});
    // 			}else{
    // 	$('.jieshao-video').css({'width':'100%','height':'100%'});
    // }
    // 		}

    // 	},100)


    //播放视频
    //  var video = $("#video")[0];
    // $('.jieshao-video .bof').click(function(){
    // 	$('.jieshao-video video').css('display','block').attr('controls','true');
    // 	video.play();
    // })

    //律所介绍
    var phonewidth = $(window).width();
    var times3 = setInterval(function () {
        var neiwidth = $('.neibox').width();
        if (neiwidth > 0) {
            clearInterval(times3);
            jieshao(neiwidth, phonewidth);
        }

    }, 100)
    //个人
    var times4 = setInterval(function () {
        var leftheight = $('.geren-left').height();
        // console.log(leftheight)
        if (leftheight > 0) {
            clearInterval(times4);
            if ($(window).width() > 768) {
                $('.geren-right').css('height', leftheight + 'px');
            }

        }

    }, 100)

    var times5 = setInterval(function () {
        var Lh = $('.geren-meiti-left').height() + 40;
        var Rh = $('.geren-meiti-right').height() + 60;
        // console.log($('.geren-meiti-left').height())
        // console.log(Lh, Rh);
        if (Lh > 0 && Rh > 0) {
            clearInterval(times5);
            if ($(window).width() > 768) {
                if (Lh > Rh) {
                    $('.geren-meiti-right').css('height', Lh + 'px');
                } else {
                    $('.geren-meiti-left').css('height', Rh + 'px');
                }

            } else {
                $('.geren-meiti-right').css('height', 'auto');
                $('.geren-meiti-left').css('height', 'auto');
            }

        }

    }, 100)

//	更换banner
    function changeImg() {
        $('#successanliimg').attr('src', '../img/s-banners.jpg');
        $('#successanliimg').attr('src', '../img/s-banners.jpg');
        $('.swiper-slide1').eq(0).find('img').attr('src', 'assets/source/img/phone/wf-banner3-phone.jpg');
        $('.swiper-slide1').eq(1).find('img').attr('src', 'assets/source/img/phone/wf-banner1-phone.jpg');
        $('.swiper-slide1').eq(2).find('img').attr('src', 'assets/source/img/phone/wf-banner2-phone.jpg');
        $('.swiper-slide1').eq(3).find('img').attr('src', 'assets/source/img/phone/wf-banner3-phone.jpg');
        $('.swiper-slide1').eq(4).find('img').attr('src', 'assets/source/img/phone/wf-banner1-phone.jpg');
        $('#team-banner').attr('src', '../img/p-team-banner.jpg');
        $('.sfbanner').attr('src', '../img/sf-banners.jpg');
        $('#lianxiwomen').attr('src', '../img/p-lianxi-banners.jpg');
        $('#lsdongtai').attr('src', '../img/p-lianxi-banners.jpg');
        $('#jieshao').attr('src', '../img/p-js-banners.jpg');
        $('#yewu').attr('src', '../img/p-yw-banners.jpg');
        $('.shiping-images').eq(0).find('img').attr('src', '../img/sf-banner.jpg');
        $('.shiping-images').eq(1).find('img').attr('src', '../img/sf-banner1.jpg');
    }

    if ($(window).width() < 768) {
        changeImg();
    }
    $(window).resize(function () {
        changeImg();
        var imgheight = $('.shuofa-yinpin-ul-left-top-left img').height();
        $('.shuofa-yinpin-ul-left-top-right-box>a').css('height', imgheight + 'px');
        if ($(window).width() > 768) {
            var width = $('.jieshao').width();
            var w = width * 0.8;
            var h = w / 2;
            $('.jieshao-video').css({'width': w + 'px', 'height': h + 'px'});
        } else {
            $('.jieshao-video').css({'width': '100%', 'height': '100%'});
        }
        //律所介绍
        var neiwidth = $('.neibox').width();
        var phonewidth = $(window).width();
        jieshao(neiwidth, phonewidth);
        //个人
        if ($(window).width() > 768) {
            var leftheight = $('.geren-left').height();
            $('.geren-right').css('height', leftheight + 'px');
            var Lh = $('.geren-meiti-left').height() + 40;
            var Rh = $('.geren-meiti-right').height() + 60;
            if (Lh > Rh) {
                $('.geren-meiti-right').css('height', Lh + 'px');
            } else {
                $('.geren-meiti-left').css('height', Rh + 'px');
            }
            //视频内页
            $('.video-right-xuanji').css('display', 'flex');
            $('.video-right-list').css('display', 'block');
        } else {
            $('.geren-meiti-right').css('height', 'auto');
            $('.geren-meiti-left').css('height', 'auto');
            $('.geren-right-bot').css('height', 'auto');
            //视频内页
            $('.video-right-xuanji').css('display', 'none');
            $('.video-right-list').css('display', 'none');
        }


    })

    function jieshao(neiwidth, phonewidth) {
        // console.log(phonewidth)
        var likuan = neiwidth * 0.3;
        $('.jieshao-li').css({'height': likuan + 'px'});
        $('.jieshao-li img').css({'height': likuan * 0.33 + 'px'});
        $('.jieshao-li').css({'width': neiwidth * 0.14 + 'px'});
        $('.jieshao-li').children('.jieshao-div').children('.jieshao-div-p').css({'height': '100%', 'color': '#000'});
        //默认第一个展开
        $('.jieshao-li:nth-child(1)').css({'width': likuan + 'px'});
        $('.jieshao-li:nth-child(1)').children('.jieshao-div').children('.jieshao-div-p').css({
            'height': likuan * 0.33 + 'px',
            'color': '#fff'
        });
        $('.jieshao-active').css({
            'padding': likuan * 0.07 + 'px ' + likuan * 0.05 + 'px',
            'line-height': +likuan * 0.07 + 'px',
            'font-size': likuan * 0.03 + 'px'
        });
        $('.jieshao-li:nth-child(1)').children('.jieshao-div').children('.jieshao-div-p').css('padding-top', '20px');

        $('.jieshao-li').hover(function () {
            $('.jieshao-li').css({'width': neiwidth * 0.14 + 'px'});
            $('.jieshao-li').children('.jieshao-div').children('.jieshao-div-p').css({
                'height': '100%',
                'color': '#000'
            });
            $(this).css({'width': likuan + 'px'});
            $(this).children('.jieshao-div').children('.jieshao-div-p').css({
                'height': likuan * 0.33 + 'px',
                'color': '#fff'
            });
            $(this).children('.jieshao-div').children('.jieshao-div-p').css('padding-top', '20px');
        })
        //手机端
        if (phonewidth < 320) {
            phonewidth = 320;
        }
        var phoneli = phonewidth * 0.48;
        $('.phone-jieshao-li img').css({'height': phoneli * 0.8 + 'px'});
        $('.phone-jieshao-li').css('height', phoneli * 2 + 'px');

        $('.phone-jieshao-li').children('.phone-jieshao-div').children('.phone-jieshao-div-p').css({
            'height': '100%',
            'color': '#000'
        });
        $('.phone-jieshao-li').children('.phone-jieshao-div').css({'padding-top': '70%'});

        $('.phone-jieshao-li').click(function () {
            $('.phone-jieshao-li').children('.phone-jieshao-div').children('.phone-jieshao-div-p').css({
                'height': '100%',
                'color': '#000'
            });
            $('.phone-jieshao-li').children('.phone-jieshao-div').css({'padding-top': '70%'});
            $(this).children('.phone-jieshao-div').children('.phone-jieshao-div-p').css({
                'height': phoneli * 0.8 + 'px',
                'color': '#fff'
            });
            $(this).children('.phone-jieshao-div').css({'padding-top': '0'});
        });
    }

    $('.geren-anli-li').hover(function () {
        $(this).children('.geren-anli-li-right').children('p').css('color', '#d19e42');
    }, function () {
        $(this).children('.geren-anli-li-right').children('p').css('color', '#000');
    })

    $('.geren-ysp-top ul li').click(function () {
        $('.geren-ysp-top ul li').removeClass("geren-ysp-top-active");
        $(this).addClass("geren-ysp-top-active");
    })

    //视频内页
    $(".video-right-list li a").each(function () {
        if ($(this)[0].href == String(window.location) && $(this).attr('href') != "") {
            $(this).parents("li").addClass("video-active");
        }
    });
    // $(".video-right-list li").click(function(){
    // 	$('.video-right-list li').removeClass('video-active');
    // 	$(this).addClass('video-active');
    // })
    $('.video-right-jishu p').click(function () {
        //video-right-jiantou
        console.log()
        if ($(this).children('.video-right-jiantou').attr('style') == 'transform: rotate(-180deg);') {
            $(this).children('.video-right-jiantou').css({'transform': 'rotate(0deg)'});
            $('.video-right-xuanji').css('display', 'none');
            $('.video-right-list').css('display', 'none');
        } else {
            $(this).children('.video-right-jiantou').css({'transform': 'rotate(-180deg)'});
            $('.video-right-xuanji').css('display', 'flex');
            $('.video-right-list').css('display', 'block');
        }

    })
    $('.video-jianjie-left').click(function () {
        if ($(this).children('.video-j2').attr('style') == 'transform: rotate(180deg);') {
            $(this).children('.video-j2').css({'transform': 'rotate(0deg)'});
            $(".video-jieshao").css('display', 'block');
        } else if ($(this).children('.video-j2').attr('style') == undefined) {
            $(this).children('.video-j2').css({'transform': 'rotate(0deg)'});
            $(".video-jieshao").css('display', 'block');

        } else {
            $(this).children('.video-j2').css({'transform': 'rotate(180deg)'});
            $(".video-jieshao").css('display', 'none');
        }

    })
    //音频内页
    $('.audio-zhuanji-li').click(function () {
        $('.audio-zhuanji-li').removeClass('audio-zhuanji-active');
        $('.audio-zhuanji-li .audio-zhuanji-left img').attr('src', 'img/audio-y1.png');
        $(this).addClass('audio-zhuanji-active').children('.audio-zhuanji-left').children('img').attr('src', 'img/audio-y2.png');
        console.log($(this).attr('src'))
        var audio = $('#audio').get(0);
        $('#audio').attr('src', $(this).attr('src'));
        audio.play();
    })
    $('.audio-tuijian-li').click(function () {
        var audio = $('#audio').get(0);
        $('#audio').attr('src', $(this).attr('src'));
        audio.play();
    })

    $('.audio-zhuanji-page li').click(function () {
        $('.audio-zhuanji-page li').removeClass('audio-zhuanji-active');
        $(this).addClass('audio-zhuanji-active');
    })

    //转换音频时长显示
    function transTime(time) {
        var duration = parseInt(time);
        var minute = parseInt(duration / 60);
        var sec = duration % 60 + '';
        var isM0 = ':';
        if (minute == 0) {
            minute = '00';
        } else if (minute < 10) {
            minute = '0' + minute;
        }
        if (sec.length == 1) {
            sec = '0' + sec;
        }
        return minute + isM0 + sec;
    }

    //业务领域
    var mySwiper4 = new Swiper('.swiper-container4', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
// gaoliang
$(".s-anli-xxk-box ul li").each(function () {
    if ($(this)[0].href == String(window.location) && $(this).attr('href') != "") {
        $(this).parents("li").addClass("s-anli-active");
    }
});