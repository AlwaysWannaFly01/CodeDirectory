$(document).ready(function(){  

    $("#nav li").hover(function(){  

        $(this).children("ul").show(); //mouseover  

    },function(){  

        $(this).children("ul").hide(); //mouseout  

    });  

});  





lastScrollY = 0;
/*
function heartBeat(){

var diffY;

if (document.documentElement && document.documentElement.scrollTop)

diffY = document.documentElement.scrollTop;

else if (document.body)

diffY = document.body.scrollTop

else

{/*Netscape stuff*/}

//alert(diffY);
/*

percent=.1*(diffY-lastScrollY);

if(percent>0)percent=Math.ceil(percent);

else percent=Math.floor(percent);

document.getElementById("leftDiv").style.top = parseInt(document.getElementById("leftDiv").style.top)+percent+"px";

document.getElementById("rightDiv").style.top = parseInt(document.getElementById("rightDiv").style.top)+percent+"px";

lastScrollY=lastScrollY+percent;

//alert(lastScrollY);

}


//下面这段删除后，对联将不跟随屏幕而移动。

window.setInterval("heartBeat()",1);

//-->
*/
//关闭按钮

function close_left1(){

    left1.style.visibility='hidden';

}

function close_left2(){

    left2.style.visibility='hidden';

}

function close_left3(){

    left3.style.visibility='hidden';

}

function close_right1(){

    right1.style.visibility='hidden';

}

function close_right2(){

    right2.style.visibility='hidden';

}

//显示样式

document.writeln("<style type=\"text\/css\">");

//document.writeln("#leftDiv,#rightDiv{margin:0; padding:0;width:140px;height:318px;position:absolute;z-index:99;}");

document.writeln(".itemFloat{margin:0; padding:0;width:140px;height:auto;line-height:5px}");

document.writeln("<\/style>");

//以下为主要内容


//document.writeln("<div id=\"leftDiv\" style=\"top:20px;left:5px\">");

//------左侧各块开始

//---L2

//document.writeln("<div id=\"left2\" class=\"itemFloat\">");

//document.writeln("<a href=http://www.i-miguo.com/lianxi/22.html target=_blank><img src=/xinshou/xinshou_ad2.gif title='领取新手开店教程' border:0; margin:0; padding:0;></a>");

//document.writeln("<\/div>");

//------左侧各块结束

//document.writeln("<\/div>");


//document.writeln("<div id=\"rightDiv\" style=\"top:40px;right:5px\">");

//------右侧各块结束

//---R2

//document.writeln("<div id=\"right2\" class=\"itemFloat\">");

//document.writeln("<a target=_blank href=http://www.i-miguo.com/></a>");

//document.writeln("<br><a href=\"javascript:close_right2();\" title=\"关闭\"><\/a>");

//document.writeln("<\/div>");

//------右侧各块结束

//document.writeln("<\/div>");