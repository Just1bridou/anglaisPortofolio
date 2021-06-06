

document.addEventListener("DOMContentLoaded", function() {

setTimeout(function() {

var canvas  = document.querySelector('#canvas');

var tabStat = [];

canvas.setAttribute("width", 0.3*window.innerWidth+"px");
canvas.setAttribute("height", 0.3*window.innerHeight+"px");


div = newCircle();

c1 = newCircle();
c2 = newCircle();
c3 = newCircle();
c4 = newCircle();
c5 = newCircle();
c6 = newCircle();
c7 = newCircle();
c8 = newCircle();
c9 = newCircle();
c10 = newCircle();

s1 = newStat();
s2 = newStat();
s3 = newStat();
s4 = newStat();
s5 = newStat();
s6 = newStat();
s7 = newStat();
s8 = newStat();
s9 = newStat();
s10 = newStat();

setInterval(function () {

    div.clearRect(0,0,canvas.width, canvas.height)   

    drawCircle(c1,s1);
    drawCircle(c2,s2);
    drawCircle(c3,s3);
    drawCircle(c4,s4);
    drawCircle(c5,s5);
    drawCircle(c6,s6);
    drawCircle(c7,s7);
    drawCircle(c8,s8);
    drawCircle(c9,s9);
    drawCircle(c10,s10);
	
},2)

function newCircle() {
    return canvas.getContext("2d");
}

function newStat() {

    spawnMaxX = Math.floor(0.3*window.innerWidth);
    spawnMaxY = Math.floor(0.3*window.innerHeight);

    let s =  {
        x:Math.floor(Math.random() * ((this.spawnMaxX-10) - 10) + 10),
        y:Math.floor(Math.random() * ((this.spawnMaxY-10) - 10) + 10),
        vx:Math.random() * (1 - 0.5) + 0.5,
        vy:Math.random() * (1 - 0.5) + 0.5,
        r:10,
        red:Math.floor(Math.random() * 230),
        green:Math.floor(Math.random() * 230),
        blue:Math.floor(Math.random() * 230)
    }

    tabStat.push(s)
    return s;
}

function drawCircle(el,stat) {

    el.beginPath();

    circleParam(stat);

    el.arc(stat.x, stat.y, stat.r, 0, 2*Math.PI);

    stat.x+=stat.vx
    stat.y+=stat.vy

    el.fillStyle = "rgb("+stat.red+","+stat.green+","+stat.blue+")";

    el.strokeStyle = 'rgba(0,0,0,0)';

    el.fill();
    el.stroke();
}


function circleParam(statsParam) {
    if(statsParam.y+statsParam.r >= canvas.height)
    statsParam.vy=-statsParam.vy

    if(statsParam.y-statsParam.r <= 0)
        statsParam.vy=-statsParam.vy

    if(statsParam.x+statsParam.r >= canvas.width)
        statsParam.vx=-statsParam.vx

    if(statsParam.x-statsParam.r <= 0)
        statsParam.vx=-statsParam.vx

    for(let circleParam of tabStat) {
        
    if(circleParam != statsParam) {

        if(circleParam.y < (statsParam.y+statsParam.r) && circleParam.y > statsParam.y || (circleParam.y+circleParam.r) < (statsParam.y+statsParam.r) && (circleParam.y+circleParam.r) > statsParam.y)
            {
            var res = circleParam.x-statsParam.x

                if(circleParam.x-statsParam.x < 0)
                    res*=-1

                if(res < statsParam.r)
                {
                    statsParam.vx=-statsParam.vx;
                    statsParam.vx-=0.02
                }
            }

        if(circleParam.x < (statsParam.x+statsParam.r) && circleParam.x > statsParam.x || (circleParam.x+circleParam.r) < (statsParam.x+statsParam.r) && (circleParam.x+circleParam.r) > statsParam.x)
            {
            var res = circleParam.y-statsParam.y

                if(circleParam.y-statsParam.y < 0)
                    res*=-1

                if(res < statsParam.r)
                {
                    statsParam.vy=-statsParam.vy;
                    statsParam.vy-=0.02
                }
            }
        }
    }
}

},500)

})
