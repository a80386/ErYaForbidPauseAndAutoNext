// forbid auto pause
$.extend(function pause(){});
// auto next
setInterval(function(){
thisMovie("flashplayer")["flash_pause"]();
if(thisMovie("flashplayer")["flash_resume"]()==false)
nextVBtnClickHandle("");
},1000*10);
// show me
alert("��ҳ���й�.\n\n�������ں�̨����:\n\n1. ��ֹ�Զ���ͣ\n\n2. �Զ���һ��\n\n��Ҫ�����ƹ�!!!\n\nE-mail: a80386@qq.com");