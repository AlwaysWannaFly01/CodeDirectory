document.addEventListener("DOMContentLoaded", function () {
    const html = document.querySelector("html");
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > 50 ? 50 : fontSize;
    html.style.fontSize = fontSize + "px";
    // console.log(fontSize)
});

$(function () {
    $('.menuBtn').click(function () {
        $('.mask').show()
        $('.menuList').toggleClass('side')
    });

    $('.mask').click(function () {
        $('.mask').hide()
        $('.menuList').toggleClass('side')
    })

    $('.menuList .oper img').click(function () {
        $('.mask').hide()
        $('.menuList').toggleClass('side')
    })
});