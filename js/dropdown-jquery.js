
//导航栏下拉菜单
$(document).ready(function(){
	var webname={};
	$('[navdrop]').hover(function(){
		var _nav = $(this).attr('navdrop');
		clearTimeout( webname[ _nav + 'timer' ] );
		webname[ _nav + 'timer' ] = setTimeout(function(){
		$('#'+_nav).stop(true,true).slideDown(350);
		}, 240);
	},function(){
		var _nav = $(this).attr('navdrop');
		clearTimeout( webname[ _nav + 'timer' ] );
		webname[ _nav + 'timer' ] = setTimeout(function(){
		$('#'+_nav).stop(true,true).slideUp(350);
		}, 240);
	});
});