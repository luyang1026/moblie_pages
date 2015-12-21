document.addEventListener('DOMContentLoaded',setRem,false);
window.addEventListener('resize',setRem,false);
function setRem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/64 + 'px';
}