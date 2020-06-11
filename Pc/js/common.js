$(function () {
    $('.menuBtn').click(function () {
        console.log(123)
        $('.menuList').slideDown(500)
    })

    $('.menuList .oper img').click(function () {
        $('.menuList').slideUp(300)
    })

})