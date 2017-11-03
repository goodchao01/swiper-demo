// JavaScript Document
function getStyle(obj,name)
{
	
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}


function startMove(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;   //假设所有的值都已经运动完 
		
		for(var attr in json)//json for in循环 字符串转换为数字
		{
			var cur=0;
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);//透明度有小数，Math.round四舍五入，解决误差
			}
			else
			{
				cur=parseInt(getStyle(obj,attr));//非透明度
			}
			
			//缓冲运动的条件
			var speed=(json[attr]-cur)/8;    
			speed=speed>0?Math.ceil(speed):Math.floor(speed);//speed会出现小数，计算机只取其整数，因此需对其取整
			
			if(cur!=json[attr])//如果有一个没有运动完，就是false.继续运动
			{
				bStop=false;
			}
			
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
			    obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(bStop)//如果都已经运动完，则关闭定时器
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd()
		}
	},30)
}
