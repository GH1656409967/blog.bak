// build time:Tue Mar 23 2021 15:52:11 GMT+0800 (GMT+08:00)
window.onload=function(){var a=document.getElementById("code_rain_canvas");var r=a.getContext("2d");var t=window.screen;var n=window.innerWidth;var o=window.innerHeight;a.width=n;a.height=o;var e=12;var i=Math.floor(n/e);var h=[];for(var l=0;l<i;l++){h.push(0)}var v="WELCOME @BLOG.LORDASH.CF!+%$#";function d(){r.fillStyle="rgba(238,238,238,.08)";r.fillRect(0,0,n,o);r.font="600 "+e+"px  Georgia";r.fillStyle=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"][parseInt(Math.random()*10)];for(var t=0;t<i;t++){var l=Math.floor(Math.random()*v.length);var d=t*e;var f=h[t]*e;r.fillText(v[l],d,f);if(f>=a.height&&Math.random()>.99){h[t]=0}h[t]++}}function f(){var a=Math.floor(Math.random()*256);var r=Math.floor(Math.random()*256);var t=Math.floor(Math.random()*256);return"rgb("+a+","+r+","+t+")"}d();setInterval(d,35)};
//rebuild by neat 