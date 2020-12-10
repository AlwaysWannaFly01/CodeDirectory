jQuery("#nav").slide({ type:"menu",titCell:".mgl", targetCell:".mglbox",effect:"slideDown",delayTime:300 ,triggerTime:0,returnDefault:true});
jQuery(".banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });	
jQuery(".mgcpbox").slide({effect:"fold",autoPlay:true});
jQuery(".indexnew").slide({effect:"top",autoPlay:true});
 jQuery(".ztgun").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",/*autoPlay:true,*/vis:2,trigger:"click"});
jQuery(".stroes").slide({ effect:"left", titCell:".hd li",trigger:"click",mainCell:".bd"});
jQuery(".inBox").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:2,trigger:"click"});

