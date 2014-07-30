maxValue_x = window.innerWidth-60;
maxValue_y = window.innerHeight-60;
var counter=0,min=0,max=0,x,y,ball;
var dx= new Array();
var dy= new Array();
var event_occr= document.getElementById("btn-click");
var new_create = function()
{
	var new_div=document.createElement("div");
	new_div.id="div"+counter;
	dx[counter]=Math.floor((Math.random()*10)+1);
	dy[counter++]=Math.floor((Math.random()*10)+1);
	new_div.style.background="#"+ Math.floor(Math.random()*16777215).toString(16); 
	new_div.style.position="absolute";
	new_div.style.left=this.min_x+"px";
	new_div.style.top=this.min_y+"px";
	new_div.style.width="40px";
	new_div.style.height="40px";
	new_div.style.borderRadius="50%";
	document.body.appendChild(new_div);
}
var createBall = function()
{
	this.min_x = Math.floor((Math.random()*maxValue_x)+1);
	this.min_y = Math.floor((Math.random()*maxValue_y)+1);
	this.id=counter;
	this.add=new_create.call(this);
}
var moveBall = function()
{
	for(var f=0;f<counter;f++)
	{
		var balldiv = document.getElementById("div"+f);
		x = parseInt(balldiv.style.left,10);
        y = parseInt(balldiv.style.top,10);
		x+=dx[f];
		y+=dy[f];
		if (x>maxValue_x || x<min )
		{
			dx[f]=-dx[f];
		}
		if (y>maxValue_y || y<max)
		{
			dy[f]=-dy[f];
		}
		balldiv.style.left = x + "px";
		balldiv.style.top  = y + "px";
	}
}
event_occr.onclick = function()
{
	var ball = new createBall();	
}

var start = function()
{
	setInterval(moveBall,40);
}

