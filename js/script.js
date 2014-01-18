$(function(){
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d'); 
	clear();
	window.addEventListener('resize', resize);
    resize();
});
function drawBg(width, color, lineColor, angle){
  ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(canvas.height*Math.sin(42.5*Math.PI/180),canvas.height); 
	ctx.lineWidth=0.5;
	ctx.strokeStyle=lineColor;
	ctx.stroke();
}
function clear() {
	ctx.clearRect(0, 0, canvas.width,  canvas.height);
}
function resize() {
	document.getElementById("canvas").setAttribute('width', 1024);
	document.getElementById("canvas").setAttribute('height', Math.max(768,$(document).height()));
	drawBg(278, "rgba(255,192,0,1.0)", "rgba(0,0,0,0.3)",30);
}