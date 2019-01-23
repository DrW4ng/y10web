var canvas = document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');
//c.fillStyle = 'rgba(255,0,0,0.5)';
//c.fillRect(100,100,300,300);


console.log(canvas);

//Lines
//c.beginPath();
//c.moveTo(50,300);
//c.lineTo(300,150);
//c.lineTo(400,500);
//c.strokeStyle="blue";
//c.stroke();
//
//
// Arc and Circle

//
//for(var i=0; i<200; i++){
//    var x = Math.random()*window.innerWidth;
//    var y = Math.random()*window.innerHeight;
//    c.beginPath();
//    c.arc(x,y,30,0,Math.PI*2,false);
//    c.strokeStyle = 'blue';
//    c.stroke();
//
//}

var x = Math.random()*innerWidth;
var y = Math.random()*innerHeight;
var dx = (Math.random() - 0.5)*50;
var dy = (Math.random() - 0.5)*50;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false);
    c.strokeStyle = 'blue';
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x+=dx;
    y+=dy;
}
animate();