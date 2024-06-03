//your JS code here. If required.
let timerDisplay=document.getElementById("timer");
let currentTime=new Date();
setInterval(
	function(){
		currentTime=new Date();
		
		timerDisplay.innerText=currentTime.toLocaleString()},1000)
