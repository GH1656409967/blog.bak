// build time:Wed Aug 12 2020 11:01:13 GMT+0800 (GMT+08:00)
var a_idx=0;jQuery(document).ready(function(a){a("body").click(function(t){var e=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var o=a("<span/>").text(e[a_idx]);a_idx=(a_idx+1)%e.length;var n=t.pageX,i=t.pageY;o.css({"z-index":5,top:i-20,left:n,position:"absolute","font-weight":"bold",color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"});a("body").append(o);o.animate({top:i-180,opacity:0},3e3,function(){o.remove()})});setTimeout("delay()",2e3)});function delay(){$(".buryit").removeAttr("onclick")}
//rebuild by neat 