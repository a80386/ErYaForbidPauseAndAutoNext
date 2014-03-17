// forbid auto pause
$.extend(function pause(){});
// auto next
setInterval(function(){
thisMovie("flashplayer")["flash_pause"]();
if(thisMovie("flashplayer")["flash_resume"]()==false)
nextVBtnClickHandle("");
},1000*10);
// show me
alert("网页已托管.\n\n代码正在后台运行:\n\n1. 防止自动暂停\n\n2. 自动下一集\n\n不要随意推广!!!\n\nE-mail: a80386@qq.com");