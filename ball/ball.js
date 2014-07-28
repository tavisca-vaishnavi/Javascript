var bounch;
var dx = 5;
var dy = 5;
var x = 100;
var y = 200;
function init() {
   
    var b = document.getElementById("myball");
    bounch = b.getContext('2d');
    setInterval(paint, 10);
    
}
function paint() {
    bounch.clearRect(0, 0, 800, 600);
    bounch.beginPath();
    bounch.fillStyle = "#FF00FF";
    bounch.arc(x, y, 20, 0, Math.PI * 2, true);
    bounch.closePath();
    bounch.fill();
    if (x < 0 || x > 800) dx = -dx;
    if (y < 0 || y > 600) dy = -dy;
    x =x + dx;
    y =y + dy;
}