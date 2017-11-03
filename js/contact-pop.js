// JavaScript Document
//联系我们的弹出框
window.onload=function ()
{
	var contactUs=document.getElementById('contact-us');
	var contactPop=document.getElementById('contact-pop');
	var closeBtn=document.getElementById('close-btn');
	contactUs.onclick=function ()
	{
		startMove(contactPop,{opacity:80});	
	};
	closeBtn.onclick=function()
	{
		startMove(contactPop,{opacity:0});
	}
}