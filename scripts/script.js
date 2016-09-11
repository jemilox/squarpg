console.log('sourced');
var x = 0;
var y = 0;
var a = 300;
var b = 300;
var speed = 3;
var size = 100;
var keys = [];


document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


var interval = setInterval(function(){
  var canvas = document.getElementById('squareCanvas');
  var ctx = canvas.getContext('2d');
  //clear canvas
  ctx.clearRect(0, 0, 500, 500);

  keystroke();
  draw(ctx);

}, 10);

var draw = function (canvas) {

canvas.fillRect(x, y, size, size);

canvas.fillStyle= 'red';
canvas.fillRect(a, b, size, size);

if( a < x + size  && b < y + size && x <= a + size && y <= b + size ){
  console.log( 'collision!!!' );
}

};

var keystroke = function () {
  if (keys[38]){
    y-= speed;
  } else if (keys[40]){
    y+= speed;
  } else if (keys[39]){
    x+= speed;
  } else if (keys[37]){
    x-= speed;
  } else if (keys[87]){
    b -= speed;
  } else if (keys[83]){
    b += speed;
  } else if (keys[68]){
    a+= speed;
  }else if (keys[65]){
    a-= speed;
  }

};

$(document).ready(function(){
  console.log('doc ready');





});
