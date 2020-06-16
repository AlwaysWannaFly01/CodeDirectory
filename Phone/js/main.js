document.addEventListener("DOMContentLoaded", function () {
    const html = document.querySelector("html");
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > 50 ? 50 : fontSize;
    html.style.fontSize = fontSize + "px";
    console.log(fontSize)
});

$(function () {
    $('#header').load('./header.html', function () {
        $('.menuBtn').click(function () {
            $('.menuList').slideDown(500)
        });

        $('.menuList .oper img').click(function () {
            $('.menuList').slideUp(300)
        })
    });
    $('#footer').load('./footer.html');
});