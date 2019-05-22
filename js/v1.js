//Canvas
let radius = 10;


//Programs written later

let dragging = false; //set to false unless our mouse is being held down

//

let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");
//Set the width and height to this window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;


var putPoint = function(e){
//Programs written later
//Only write if dragging is true
if(dragging){
  //written later :- line to wherever the user wants
  context.lineTo(e.clientX, e.clientY);
  context.stroke();
  context.beginPath(); //To start the drawing, clears all path and begin a new 1
  //the arc takes 5 parameters plus an optional 6
  //the x, y defines the center point to the circumference
  //r is the radius, a radial simply means a segment between a point of a circle or sphere and its center
  //antiClockwise param by default is clockwise
  //x,y,startAngle, endAngle, [antiClockwise]

  //offsetX in javascript denotes the x coordinate from any part of the window
  //offsetY in javascript denotes the y coordinate from any part of the window
  //the starting point of the circumference is 0 and the total endpoint is 360 degree(so a complete circle is 360)
  //remember 2 pi r is 360 degree and in javascript to get one pi is Math.pi and to get 2 pi will be to times it by 2
  // context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
  //since our canvas height and width are set to this window already, we can use client rather than offset(firefox does not support offset too)
  context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
  context.fill();

  //written later
  context.beginPath(); //begins a new path
  //and move it to wherever the client wants
  context.moveTo(e.clientX, e.clientY);

}
//

}

//Programs written later

//we don't need event except we want to excute the putpoint instantly as soon as mouse goes down

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath(); //to clear the old path and stop the lines
}

//Add an event listener of mouseup: when the user clicks on window
canvas.addEventListener('mouseup', disengage); //to set dragging to true
//Add an event listener of mousedown: when the user clicks on window
canvas.addEventListener('mousedown', engage); //to set dragging to false
//

canvas.addEventListener('mousemove', putPoint); //this will always draw as the mouse moves

//// A Path in canvas is a collection of Subpath and Subpaths are collections of Points and Lines ////

//To draw a rectangle
//We can use the rect method or we can simply use path

// context.beginPath(); //begins path
// context.moveTo(10, 10); //creates a dot of 10px wide, this is set to our active point nothing is drawn
// context.lineTo(160, 10); //draws a line from the dot or point 10 to 160px(160px from starting point)
// context.lineTo(160, 130); //cretes downward since its a rectangle width is higher than height
// context.closePath(); // finish paths from current to the end
// context.stroke();
// context.fill();