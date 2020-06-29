$(function () {
    $('#header').load('./header.html', function () {
        $('.menuBtn').click(function () {
            $('.menu-block').hide()
            $('.menuList').slideDown(500)
        });

        $('.menuList .oper img').click(function () {
            $('.menuList').slideUp(300, function () {
                $('.menu-block').show()
            })

        });
    });

    $('#footer').load('./footer.html', function () {
        var url = window.location.pathname;
        var result = url.indexOf('detail.html');
        if (result == -1) {
            $('.foot-procuct').on('mouseenter', 'li a', function () {
                $(this).css({ 'cursor': 'pointer' })
            })
            $('.foot-procuct').on('mouseleave', 'li a', function () {
                $(this).css({ 'cursor': 'default' })
            })
            $('.foot-procuct').on('click', 'li a', function () {
                var type = $(this).data('type')
                window.location.href = 'detail.html#' + type
            })

        } else {
            window.location.href = 'javascript:void(0)'
        }
    });

    //图片懒加载
    if ($("img.lazy").length > 0) {
        $("img.lazy").lazyload({ effect: "fadeIn", threshold: 200 });
    }
});