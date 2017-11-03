var comNews = null;
window.onload=function() {
	comNews = document.querySelector('.company-news');
	getData();
};

//获取数据
function getData() {
	jQuery(document).ready(function(){ 
	    $.ajax({
	        type: "get",
	        async: false,
	        url: "http://www.tngou.net/api/lore/classify",
	        dataType: "jsonp",
	        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	        jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
	        success: function(json){
	        	if(json && json.status === true) {
	        		showData(json.tngou);
	        	}
	        },
	        error: function(){
	             alert('fail');
	        }
	    });
	});
}
//展示数据
function showData(data) {
	// console.log(JSON.stringify(data));
	var tmp = '';
	for(var i=0; i<data.length; i++) {
		tmp += '<li>';
        tmp += '<a href="http://www.baidu.com">'+ data[i].title +'</a>';
        tmp += '<p>'+ data[i].description +'</p>';
        tmp += '</li>';
	}
	comNews.innerHTML = tmp;
}



// 	// var listView=document.querySelector('.company-news');
// 	// var data=dataJson.data;
// 	// var tmp= '';
// 	// for(var i=0; i<data.length; i++) {
// 	// 	tmp+= '<li>';
// 	// 	tmp += '<a href="javascript:" title="' +data[i].news_title+ '">' + data[i].news_title;
// 	// 	tmp += '<span>' + data[i].news_time ;
// 	// 	tmp += '</span></a></li>';
// 	// }
// 	// listView.innerHTML = tmp;
// };
           


