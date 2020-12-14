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

    $("._news").slide({effect: "top", autoPlay: true, delayTime: 1500});

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
})
