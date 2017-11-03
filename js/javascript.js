// JavaScript Document

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//轮播部分
function slidePic(){	
	var aBtn=document.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var oUl=document.getElementById('carou-pic');
	var aLi=oUl.getElementsByTagName('li');
	var oBtnleft=document.getElementById('left');
	var oBtnright=document.getElementById('right');
	var now=0;
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	
	for(var i=0;i<aBtn.length;i++)
	{
		aBtn[i].index=i;
		aBtn[i].onclick=function ()
		{
			now=this.index;
			tab();
		}
	}
	oBtnleft.onclick=function ()       //两边按钮点击实现图片的滚动
	{
		now--;
		if(now == -1)
		{
			oUl.style.left = -4312 + 'px';
			now = 3;
		}
		tab()
	};
	oBtnright.onclick=function ()
	{
		now++;
		if(now==aBtn.length)
		{
			oUl.style.left = 0;
			now = 0;
		}
		tab()
	};
	function tab()
	{
		for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			}
			aBtn[now].className='active2';
			startMove(oUl,{left:-1078*now})
	}
	function next()     //以下是关于自动播放添加定时器
	{
		now++;
		if(now==aBtn.length)
		{
			oUl.style.left = 0;
			now=0;//播放完后返回，再播放
		}
		tab()
	}
	timer=setInterval(next,3000);
	oBtnright.onmouseover=oBtnleft.onmouseover=oUl.onmouseover=function ()
	{
		clearInterval(timer);
		oBtnleft.style.display='block';
		oBtnright.style.display='block';
	};
	
	oUl.onmouseout=function ()
	{
		timer=setInterval(next,3000);
		oBtnleft.style.display='none';
		oBtnright.style.display='none';
	};	
}
addLoadEvent(slidePic);


