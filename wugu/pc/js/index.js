$(function () {
    /*banner切换效果*/
    // $(".banner").slide({
    //     titCell: ".hd ul",
    //     mainCell: ".bd ul",
    //     effect: "fold",
    //     autoPlay: true,
    //     autoPage: true,
    //     delayTime: 500,
    //     trigger: "click"
    // });

    // $(".mgcpbox").slide({effect: "fold", autoPlay: true});

    $(".indexnew").slide({effect: "top", autoPlay: true, delayTime: 1500});

    $(".ztgun").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "top",/*autoPlay:true,*/
        vis: 2,
        trigger: "click"
    });
    $(".stroes").slide({effect: "left", titCell: ".hd li", trigger: "click", mainCell: ".bd"});
    $(".inBox").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 2,
        trigger: "click"
    });
})
