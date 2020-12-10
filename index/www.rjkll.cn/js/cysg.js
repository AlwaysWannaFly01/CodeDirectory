
lastScrollY = 0;
/*
function heartBeat(){

var diffY;

if (document.documentElement && document.documentElement.scrollTop)

diffY = document.documentElement.scrollTop;

else if (document.body)

diffY = document.body.scrollTop

else

{Netscape stuff}

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


//�������ɾ���󣬶�������������Ļ���ƶ���

window.setInterval("heartBeat()",1);

//-->
*/
//�رհ�ť

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

//��ʾ��ʽ

document.writeln("<style type=\"text\/css\">");

//document.writeln("#leftDiv,#rightDiv{margin:0; padding:0;width:140px;height:318px;position:absolute;z-index:99;}");

document.writeln(".itemFloat{margin:0; padding:0;width:140px;height:auto;line-height:5px}");

document.writeln("<\/style>");

//����Ϊ��Ҫ����


//document.writeln("<div id=\"leftDiv\" style=\"top:20px;left:5px\">");

//------�����鿪ʼ

//---L2

//document.writeln("<div id=\"left2\" class=\"itemFloat\">");

//document.writeln("<a href=http://www.i-miguo.com/lianxi/22.html target=_blank><img src=/xinshou/xinshou_ad2.gif title='��ȡ���ֿ���̳�' border:0; margin:0; padding:0;></a>");

//document.writeln("<\/div>");

//------���������

//document.writeln("<\/div>");


//document.writeln("<div id=\"rightDiv\" style=\"top:40px;right:5px\">");

//------�Ҳ�������

//---R2

//document.writeln("<div id=\"right2\" class=\"itemFloat\">");

//document.writeln("<a target=_blank href=http://www.i-miguo.com/></a>");

//document.writeln("<br><a href=\"javascript:close_right2();\" title=\"�ر�\"><\/a>");

//document.writeln("<\/div>");

//------�Ҳ�������

//document.writeln("<\/div>");
