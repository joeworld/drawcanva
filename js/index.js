
//Canvas color

var fillCol = "black";

fillColor = document.getElementById('fillBackground');

fillColor.addEventListener('change', function(){
    fillCol = this.value;
});

//Canvas

let radius = 10;

let dragging = false;

let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

var putPoint = function(e){
if(dragging){
  context.lineTo(e.clientX, e.clientY);
  context.strokeStyle = fillCol;
  context.stroke();
  context.beginPath();
  context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
  context.fillStyle = fillCol;
  context.fill();
  context.beginPath();
  context.moveTo(e.clientX, e.clientY);
  
}
//

}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mouseup', disengage);

canvas.addEventListener('mousedown', engage);

canvas.addEventListener('mousemove', putPoint);

//download
function downloadImage(){
   var download = document.getElementById("downloadCanvas");
   var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
   download.setAttribute("href", image);
}