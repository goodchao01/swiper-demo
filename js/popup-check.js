// JavaScript Document
var formObj, phoneObj, passwordObj, confirmObj, code, emailObj;
window.onload=function (){
	 //通过ID或名字获取每个对象
	var formObj = document.getElementById('phone-form');
	var phoneObj = document.getElementById('phone-number');
	var passwordObj = document.getElementById('password');
	var confirmObj = document.getElementById('password2');
	var inputCode=document.getElementById("input-code");
	var changCode=document.getElementById('change');
	var emailObj = document.getElementById('email-name');
	logupAction();
	//设置每个对象的onblur事件(对象失去焦点时发生),并调用各自的方法
	phoneObj.onblur=checkPhone;
	passwordObj.onblur=checkPassword;
	confirmObj.onblur=checkConfirm;
	//formObj.onsubmit = formSubmit;
	
	createCode();
	changCode.onclick=createCode;
	inputCode.onblur=validateCode;
	emailObj.onblur = checkEmail;
}

//切换注册方式
function logupAction() {
	var popUp=document.getElementById('log-style');
	var aChose=popUp.getElementsByTagName('li');
	var logForm=document.getElementsByTagName('form');
	for(var i=0;i<aChose.length;i++)
	{
		aChose[i].index=i;
		 aChose[i].onclick=function ()
		 {
			for(var i=0;i<aChose.length;i++)
			{
				aChose[i].className='';
				aChose[i].style.color='white';
				logForm[i].style.display='none';	
			}
			this.className='active3';
			this.style.color='black';
			logForm[this.index].style.display='block';	
		 }
	}
}	
    
//手机号码
function checkPhone() { 
	var phoneObj = document.getElementById('phone-number');
	var phoneRegex = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var msg="&nbsp;<img src='img/head/right.png' style='width:20px'>";
    if(phoneObj.value=='') 
    { 
      msg='手机号码不能为空！';
	   phoneObj.focus();
    }     
    else if(phoneObj.value.length!=11) 
    { 
        msg='请输入有效的手机号码！'; 
        phoneObj.focus(); 
    } 
    else if(!phoneRegex.test(phoneObj.value)) 
    { 
        msg='请输入有效的手机号码！'; 
        phoneObj.focus();
    } 
	var span = document.getElementById("phone-span");
    span.innerHTML = msg;
    msg="&nbsp;<img src='img/head/right.png' style='width:20px'>";
} 

//密码验证
function checkPassword(){
	var passwordObj = document.getElementById('password');
	var passwordRegex = /^\w{6,10}$/;
    var msg="&nbsp;<img src='img/head/right.png' style='width:20px'>";
    if (passwordObj.value=="")
    {
        msg='密码不能为空';
		//passwordObj.focus();
    }
    else if (!passwordRegex.test(passwordObj.value)) 
    {
    	msg='密码长度限制在6-16位!';
		//passwordObj.focus();
    }
    var span = document.getElementById("psd-span");
    span.innerHTML = msg;
    msg="&nbsp;<img src='img/head/right.png' style='width:20px'>";
}
//确认密码  
function checkConfirm(){
	var passwordObj = document.getElementById('password');
	var confirmObj = document.getElementById('password2');
	var msg ="&nbsp;<img src='img/head/right.png' style='width:20px'>";
	if (confirmObj.value=="")
	{
		msg = "确认密码必须填写!";
		//confirmObj.focus();
	}
	else if (confirmObj.value != passwordObj.value)
	{
		msg = "两次密码不一致!";
		//confirmObj.focus();
	}
	var span = document.getElementById("psd2-span");
	span.innerHTML = msg;
	msg = "&nbsp;<img src='img/head/right.png' style='width:20px'>";
}


//创建验证码
function createCode() 
{
 code = "";
 var codeLength = 6; //验证码的长度
 var checkCode = document.getElementById("check-code");
 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
 for(var i = 0; i < codeLength; i++) 
 {
  var charNum = Math.floor(Math.random() * 52);
  code += codeChars[charNum];
 }
 if(checkCode) 
 {
  checkCode.className = "code";
  checkCode.innerHTML = code;
 }
}
//填写验证码
function validateCode() 
{
 var inputCode=document.getElementById("input-code");
 var msg = "&nbsp;<img src='img/head/right.png' style='width:20px'>";
 if(inputCode.value=="") 
 {
  msg='请输入验证码！';
 }
 else if(inputCode.value.toUpperCase() != code.toUpperCase()) 
 {
   msg='验证码输入有误！';
   createCode();
 }
  var span = document.getElementById("code-span");
	span.innerHTML = msg;
	msg = "&nbsp;<img src='img/head/right.png' style='width:20px'>";    
}   
 
 //为表单提交事件写个方法????????
/*function formSubmit(){
	
	var bPassword = checkPassword();
	var bConfirm = checkConfirm();
		alert('错误')	
	
}*/
//邮箱验证
function checkEmail(){
	
	var emailObj = document.getElementById('email-name');
    var emailRegex = /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,3}$/;
    var msg = "&nbsp;<img src='img/head/right.png' style='width:20px'>";
    if(emailObj.value=='')
    {
      msg = "Email必须填写";
    }
    else if(!emailRegex.test(emailObj.value))
    {
      msg = "Email格式不正确!";
    }
    var span = document.getElementById("email-span");
    span.innerHTML = msg;
    msg = "&nbsp;<img src='img/head/right.png' style='width:20px'>";
   }
