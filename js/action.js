var speed_msec = 10;
var num_div = 3;
var hitNum = 0;

function beginGame(){
	document.getElementById("hitNum").innerText = 0;
	hitNum = 0;
	var divsArray = document.getElementsByClassName("object");
	var left = 700;
	for (var div=0;div<num_div;div++){
		divsArray[div].style.display = "inline-block";
		divsArray[div].style.left = left+"px";
		left = left+100;
	}

	document.getElementById("ranges").style.display = "none";
	intervalId = setInterval(function(){
		for (var div=0;div<num_div;div++){
			divsArray[div].style.top = parseInt(window.getComputedStyle(divsArray[div], null).top)+1+"px";
			if (parseInt(divsArray[div].style.top)>600){
				stopGame();
				alert("Game Over！");
			}
		}
	},speed_msec)
}

function shoot(id){
	var divShot = document.getElementById(id);
	divShot.style.top = "-50px";
	divShot.style.left = Math.floor(Math.random()*500+300)+"px";
	hitNum++;
	document.getElementById("hitNum").innerText = hitNum;
}

function speed(value){
	speed_msec = parseInt((2-value/50)*10);
}

function num(value){
	num_div = parseInt(value/20)+1;
}

function stopGame(){
	clearInterval(intervalId);
	var divsArray = document.getElementsByClassName("object");
	for (var div=0;div<divsArray.length;div++){
		divsArray[div].style.top = "-50px";
	}
	document.getElementById("ranges").style.display = "block";
}
