document.addEventListener('DOMContentLoaded',setRem,false);
window.addEventListener('resize',setRem,false);
function setRem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/64 + 'px';
}
function Page(name){
	this.name = name;
}
Page.prototype = {
	load:function(){
		var _this = this;
		var curPage = $('.page-area');
		var form = $('form')
		if(this.name){
			curPage.css('visibility','hidden');
			form.addClass('loading');
			setTimeout(function(){
				form.removeClass('loading');
				curPage.empty();
				curPage.load('./'+ _this.name +'.html');
				curPage.css('visibility','visible');
			},1500);
		}
		return this;
	}
}
$(document).ready(function() {
	var step1 = new Page('s2').load();
	
});

// document.onclick = function(){
// 	$('.page-area').load('./s1.html');
// }
// $(document).ready(function(){
// 	$('.page-area').load('s1.html')
// 	$('.page-area').css('visibility','hidden');
// });