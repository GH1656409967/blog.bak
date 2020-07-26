// build time:Sun Jul 26 2020 14:05:31 GMT+0800 (GMT+08:00)
$(document).ready(function(){$(document).on("click",".fold_hider",function(){$(">.fold",this.parentNode).slideToggle();$(">:first",this).toggleClass("open")});$("div.fold").css("display","none")});
//rebuild by neat 