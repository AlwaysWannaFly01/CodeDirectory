/*导航效果*/
jQuery("#nav").slide({
    type: "menu",
    titCell: ".mgl",//鼠标触发对象
    targetCell: ".mglbox",//titCell里面包含的要显示/消失的对象
    effect: "slideDown",
    delayTime: 500,
    triggerTime: 0,
    returnDefault: true
});

/*banner切换效果*/
jQuery(".banner").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "fold",
    autoPlay: true,
    autoPage: true,
    delayTime: 500,
    trigger: "click"
});

// jQuery(".mgcpbox").slide({effect: "fold", autoPlay: true});

jQuery(".indexnew").slide({effect: "top", autoPlay: true, delayTime: 1500});

jQuery(".ztgun").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "top",/*autoPlay:true,*/
    vis: 2,
    trigger: "click"
});
jQuery(".stroes").slide({effect: "left", titCell: ".hd li", trigger: "click", mainCell: ".bd"});
jQuery(".inBox").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "left",
    autoPlay: true,
    vis: 2,
    trigger: "click"
});

