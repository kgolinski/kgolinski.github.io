let canvasBg, ctxBg;

document.addEventListener("DOMContentLoaded", (e) => {
	canvasBg = document.getElementById("canvas-bg");
	ctxBg = canvasBg.getContext('2d');
	clear();
	window.addEventListener('resize', resize);
	resize();
});

const drawBg = (width, color, lineColor, angle) => {
	ctxBg.beginPath();
	ctxBg.moveTo(0, 0);
	ctxBg.lineTo(canvasBg.height * Math.sin(42.5 * Math.PI / 180), canvasBg.height);
	ctxBg.lineWidth = 0.5;
	ctxBg.strokeStyle = lineColor;
	ctxBg.stroke();
}

const clear = () => {
	ctxBg.clearRect(0, 0, canvasBg.width, canvasBg.height);
}

const resize = () => {
	document.getElementById("canvas-bg").setAttribute('width', 1024);
	document.getElementById("canvas-bg").setAttribute('height', Math.max(768, document.scrollHeight));
	drawBg(278, "rgba(255,192,0,1.0)", "rgba(0,0,0,0.3)", 30);
}