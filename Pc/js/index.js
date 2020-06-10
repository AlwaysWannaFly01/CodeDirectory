$(function () {
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', 'salmon', '#000'],
        loopBottom: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        'navigation': true,
    });

    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 3000);
});