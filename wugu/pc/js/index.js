$(function () {
    /*banner切换效果*/
    // $(".banner").slide({
    //     titCell: ".hd ul",
    //     mainCell: "._container ul",
    //     effect: "fold",
    //     autoPlay: true,
    //     autoPage: true,
    //     delayTime: 500,
    //     trigger: "click"
    // });

    // $("._example-box").slide({effect: "fold", autoPlay: true});

    $(".indexnew").slide({effect: "top", autoPlay: true, delayTime: 1500});

    $(".ztgun").slide({
        titCell: ".hd ul",
        mainCell: "._container ul",
        autoPage: true,
        effect: "top",/*autoPlay:true,*/
        vis: 2,
        trigger: "click"
    });
    $(".stroes").slide({effect: "left", titCell: ".hd li", trigger: "click", mainCell: "._container"});
    $(".inBox").slide({
        titCell: ".hd ul",
        mainCell: "._container ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 2,
        trigger: "click"
    });

    $('#Form #fSubmit').unbind('click').bind('click', function () {
        var name = $('#fName').val();
        var phone = $('#fTel').val();
        var city = $('#fCity').val();

        if (name && phone && city) {
            if (!(/^1[3456789]\d{9}$/.test(phone))) {
                alert('手机号格式不正确!');
                return false;
            }
            console.log(name);
            console.log(phone);
            console.log(city);
            $.ajax({
                url: 'http://101.37.245.205:9111/advisorymessage/addMessage',
                type: 'get',
                data: {
                    'name': name,
                    'phone': phone,
                    'city': city,
                },
                dataType: 'JSON',
                success: function (data) {
                    console.log(data)
                    alert('提交成功!');
                }
            })
            alert('提交成功!');
            setTimeout(()=>{
                window.reload()
            },1000)
        } else {
            alert('内容不能为空!');
            return false;
        }
    })

    //提交留言
    $('#message #Submit').unbind('click').bind('click', function () {
        var name = $('#m-name').val();
        var phone = $('#m-tel').val();
        var comment = $('#m-message').val();

        if (name && phone && comment) {
            if (!(/^1[3456789]\d{9}$/.test(phone))) {
                alert('手机号格式不正确!');
                return false;
            }
            console.log(name);
            console.log(phone);
            console.log(comment);
            $.ajax({
                url: 'http://101.37.245.205:9111/advisorymessage/addMessage',
                type: 'get',
                data: {
                    'name': name,
                    'phone': phone,
                    'city': comment,
                },
                dataType: 'JSON',
                success: function (data) {
                    console.log(data)
                    alert('提交成功!');
                }
            })
            alert('提交成功!');
            setTimeout(()=>{
                window.reload()
            },1000)
        } else {
            alert('内容不能为空!');
            return false;
        }
    })

    $('.hexagon_child_child').on('mouseenter', function () {
        $(this).css({ 'backgroundColor': '#C82D21' })
        $(this).find('.origin').hide()
        $(this).find('.change').show().css({"display":'flex'})

    })
    $('.hexagon_child_child').on('mouseleave', function () {
        $(this).css({ 'backgroundColor': '#F7B6B2' })
        $(this).find('.origin').show()
        $(this).find('.change').hide()
    })
})
