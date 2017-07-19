//Global variables
//===========================================
var computerNumber = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;




//Functions
//===========================================
function startgame () {
	var max = 120
	var min = 19
	computerNumber = (Math.floor(Math.random() * (max - min) + min));
	console.log(computerNumber);
	totalScore = 0;
}



//Main Process
//=============================================
startgame();

