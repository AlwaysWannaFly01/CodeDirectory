// JavaScript Document
/*
document.writeln("<script type=\'text/javascript\' src=\'/js/jquery-1.11.3.min.js\'></script>");
document.writeln("<script>");
document.writeln("$(function(){");
document.writeln("	$(\'.ml\').click(function(){");
document.writeln("	    $(\'.hbg\').css(\'display\',\'block\');");
document.writeln("		$(this).css(\'display\',\'none\');	");
document.writeln("	})");
document.writeln("	$(\'.close\').click(function(){");
document.writeln("	    $(\'.hbg\').css(\'display\',\'none\');");
document.writeln("		$(\'.ml\').css(\'display\',\'block\');	");
document.writeln("	})");
document.writeln("})");
document.writeln("</script>");
document.writeln("<style>");
document.writeln("#leftsead{bottom:100px;position: fixed;top:expression(eval(document.documentElement.scrollTop)); right:0; z-index:998 }");
document.writeln("#leftsead li{width:131px;height:60px; position:relative}");
document.writeln("#leftsead li img{float:right;}");
document.writeln("#leftsead li a{height:49px;float:right;display:block;min-width:47px;max-width:131px;}");
document.writeln("#leftsead li a .shows{display:block;}");
document.writeln("#leftsead li a .hides{margin-right:-143px;cursor:pointer;cursor:hand;}");
document.writeln("#leftsead li a.youhui .hides{display:none;position:absolute;right:190px;top:0px;}");
document.writeln("/*-- js���� --");
document.writeln(".hbg{width:100%; height:100%;; z-index:999; position:fixed; display:none; background: url(/images/stroebg.png) }");
document.writeln(".message_index{ height:520px; margin:0 auto; width:500px; background: url(images/bgl.jpg); padding-top:20px; position:relative; margin-top:5%}");
document.writeln(".ml{width:50px; height:200px; position:fixed; bottom:100px; left:0; z-index:99; cursor:pointer}");
document.writeln(".message_index .close{ width:30px; height:30px; position:absolute; right:-10px; top:-10px; font-size:30px; color:#F00; line-height:30px; text-align:center; font-family:\'����\'; cursor:pointer}");
document.writeln(".message_index dl{ text-align:center; display:block; width:100%; height:80px; float:left}");
document.writeln(".message_index dt{ font-size:24px; color: #333; font-weight:bold; line-height:40px}");
document.writeln(".message_index dd{ font-size:14px; color:#fff;  line-height:40px}");
document.writeln(".message_n2{ width:450px; float:left; margin-left:30px; margin-top:10px}");
document.writeln(".message_n2 input,.message_n2 textarea{ font-size:16px;}");
document.writeln(".n_11{ width:460px; height: 55px; float:left}");
document.writeln(".n_11 input{ display:block; border:0; border:1px solid #ccc; height:36px; width: 335px; text-indent:1em; float:left}");
document.writeln(".n_11 p{ display:block; float:left; line-height:38px; margin-right:10px; color:#fff}");
document.writeln(".n_21{ width:680px; float:left}");
document.writeln(".n_21 p{ display:block; float:left; line-height:38px; margin-right:10px; float:left; color:#fff}");
document.writeln(".n_21 textarea{ display:block; border:0; border:1px solid #ccc; height:155px; width:310px;  padding:1em}");
document.writeln(".message_n2 .button{ display:block; border:0; width:120px; height:40px;  background: url(images/tj_an.jpg); cursor:pointer; float:left; margin-left:260px; margin-top:20px;text-indent: 200em;}");
document.writeln("");
document.writeln("</style>");
document.writeln("<div class=\'hbg\'>");
document.writeln("	<div class=\'message_index\'>");
document.writeln("    	<div class=\'close\'><img src=\'/images/gb.jpg\' width=\'30\' height=\'30\' /></div>");
document.writeln("            	<dl>");
document.writeln("                	<dt>�ɹ��Ļ�����Զ����������ѯ���ˣ�</dt>");
document.writeln("                    <hr style=\'height:1px;border:none;border-top:1px dashed #ccc; width:80%; margin:0 auto\'>");
document.writeln("                    <dd>��������κ����������Ը����ǣ����ǻ����յ����Ժ�24Сʱ����ϵ����</dd>");
document.writeln("                </dl>");
document.writeln("                <div class=\'message_n2\'>");
document.writeln("                      <form name=\'input3\' method=\'post\' action=\'http://qyn.qianxian.info/order/message_save.asp\' target=\'myFrame\'>");
document.writeln("                        <input type=\'hidden\' name=\'zhuanyuan\' id=\'zhuanyuan\' value=\'0301\'>");
document.writeln("                        <input type=\'hidden\' name=\'xiangmu\' id=\'xiangmu\' value=\'��Ǒ����tc\'>");
document.writeln("                        <input type=\'hidden\' name=\'url\' id=\'url\' value=\'\'>");
document.writeln("                        <script type=\'text/javascript\'>");
document.writeln("                        url = window.location.href;");
document.writeln("                        document.getElementById(\'url\').value=url;");
document.writeln("                        </script> ");
document.writeln("");
document.writeln("                    	<div class=\'n_11\'><p>* ����������</p>                    	  ");
document.writeln("                    	  <input name=\'name\' type=\'text\'>");
document.writeln("                    	</div>");
document.writeln("                    	<div class=\'n_11\'> <p>* ��ϵ�绰��</p>");
document.writeln("                   	      <input name=\'tel\' type=\'text\'></div>");
document.writeln("                    	<div class=\'n_11\'><p>* ��ϵ��ַ��</p>");
document.writeln("                   	  <input name=\'address\' type=\'text\'></div>");
document.writeln("                   	  <div class=\'n_21\'><p>* �������ݣ�</p>");
document.writeln("                   	  ");
document.writeln("                   	  <label for=\'textarea\'></label>");
document.writeln("                   	  <textarea name=\'content\' id=\'textarea\' cols=\'45\' rows=\'5\' placeholder=\'����д���Ҫ����绰�ط�ʱ�䡢׼��Ͷ������ʽ���Ҫ�õ�ʲô�����ȡ�\' ></textarea>");
document.writeln("                   	  </div>");
document.writeln("                      <input name=\'Submit\' border=\'0\' type=\'submit\' class=\'button\'>");
document.writeln("                    </form>");
document.writeln("                </div>");
document.writeln("			</div>");
document.writeln("</div>");
document.writeln("<div class=\'ml\'><img src=\'/images/zx.png\' width=\'50\' height=\'200\' /></div>");
document.writeln("<div id=\'leftsead\'>");
document.writeln("<ul>");
document.writeln("<li><a class=\'youhui\'><img src=\'/images/l02.png\' width=\'47\' height=\'49\' class=\'shows\' /><img  src=\'/images/youhui.png\' width=\'160\' height=\'150\' class=\'hides\' usemap=\'#taklhtml\'/><map name=\'taklhtml\'><area shape=\'rect\' coords=\'26,273,115,300 \' href=\'#\' /></map></a></li>");
document.writeln("<li><a  href=\'http://www.i-miguo.com/lianxi/23.html\'><img src=\'/images/ll05.png\' width=\'131\' height=\'49\' class=\'hides\'/><img src=\'/images/l05.png\' width=\'47\' height=\'49\' class=\'shows\' /></a></li>");
document.writeln("<li><a id=\'top_btn\'><img src=\'/images/l06.png\' width=\'47\' height=\'49\' /></a></li>");
document.writeln("</ul>");
document.writeln("</div><!--leftsead end-->");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("$(document).ready(function(){");
document.writeln("	$(\'#leftsead a\').hover(function(){");
document.writeln("		if($(this).prop(\'className\')==\'youhui\'){");
document.writeln("			$(this).children(\'img.hides\').show();");
document.writeln("		}else{");
document.writeln("			$(this).children(\'img.hides\').show();");
document.writeln("			$(this).children(\'img.shows\').hide();");
document.writeln("			$(this).children(\'img.hides\').animate({marginRight:\'0px\'},\'slow\'); ");
document.writeln("		}");
document.writeln("	},function(){ ");
document.writeln("		if($(this).prop(\'className\')==\'youhui\'){");
document.writeln("			$(this).children(\'img.hides\').hide(\'slow\');");
document.writeln("		}else{");
document.writeln("			$(this).children(\'img.hides\').animate({marginRight:\'-143px\'},\'slow\',function(){$(this).hide();$(this).next(\'img.shows\').show();});");
document.writeln("		}");
document.writeln("	});");
document.writeln("	$(\'#top_btn\').click(function(){if(scroll==\'off\') return;$(\'html,body\').animate({scrollTop: 0}, 300);});");
document.writeln("");
document.writeln("});");
document.writeln("</script>");
document.writeln("");*/
