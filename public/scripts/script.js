console.log('sourced');
var x = 0;
var y = 0;
var a = 300;
var b = 300;
var speed = 3;
var size = 100;
var keys = [];

//listen for keydown/keyup and record to array keys
document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

//main game function running every 10 ms
var interval = setInterval(function(){
  var canvas = document.getElementById('squareCanvas');
  var ctx = canvas.getContext('2d');
  //clear canvas
  ctx.clearRect(0, 0, 500, 500);

  keystroke();
  draw(ctx);

}, 10);

//draw rectangles
var draw = function (canvas) {

  canvas.fillRect(x, y, size, size);

  canvas.fillStyle= 'red';
  canvas.fillRect(a, b, size, size);



};

//move this way if
var keystroke = function () {
  //if key do this
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
  //if outside don't go outside
  if (x < 0){x = 0;}
  if (x > 400){x = 400;}
  if (y < 0){y = 0;}
  if (y > 400){y = 400;}
  if (a < 0){a = 0;}
  if (a > 400){a = 400;}
  if (b < 0){b = 0;}
  if (b > 400){b = 400;}
  //if collision don't move that direction
  if (x < a + size && Math.abs(y-b)<size && x > a){x = a + size;}
  if (a < x + size && Math.abs(y-b)<size && a > x){a = x + size;}
  if (y < b + size && Math.abs(x-a)<size && y > b){y = b + size;}
  if (b < y + size && Math.abs(x-a)<size && b > y){b = y + size;}

  //collision!
  if( a < x + size  && b < y + size && x <= a + size && y <= b + size ){
    console.log( 'collision!!!' );
  } else{

  }


};

$(document).ready(function(){
  console.log('doc ready');





});
