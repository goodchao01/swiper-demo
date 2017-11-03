// JavaScript Document
 window.onload=function ()
 {
	var productContent=document.getElementById('product-content');
	var aTitle=productContent.getElementsByTagName('h3');
	var proBtn=document.getElementById('productbtn');
	var aLi=proBtn.getElementsByTagName('li');
	var proCon=document.getElementById('-content-');
	var proLi=proCon.getElementsByTagName('li');
	
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].index=i;
		aLi[i].onclick=function ()
		{
			for(var i=0;i<aLi.length;i++)
			{
				aTitle[i].style.display='none';
				aLi[i].className='';
				proLi[i].style.display='none';
			}
			this.className='active4';
			aTitle[this.index].style.display='block';
			proLi[this.index].style.display='block';
		}
	}
 }