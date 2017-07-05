alert("hello");

//GLOBAL VARIABLES
//----------------------------------------------------------

// Crystal Variables
var crystal = {
	blue:
{
	name: "Blue",
	value: 0
},
	green:
{
	name: "Green",
	value: 0
},
	red:
{
	name: "Red",
	value: 0
},
	yellow:
{
	name: "Yellow",
	value: 0
}
	};

// Scores(Current and Target)

var currentScore = 0;
var targetScore = 0;

// Wins and losses
var winCount = 0;
var lossCount = 0;

// FUNCTIONS 
//-------------------------------------------------------------
var getRandom = function (min, max) {

	return Math.floor(Math.random () * (max - min + 1)) + min;
}


var startGame = function  () {
	// Reset the Current Score
	currentScore = 0;

	// Set a new Target Score (between 19 and 120)
	targetScore = getRandom(19, 120);

	// Set different value for each of the crystals (between 1 and 12)
	crystal.blue.value = 	getRandom (1, 12);
	crystal.green.value = 	getRandom (1, 12);
	crystal.red.value = 	getRandom (1, 12);
	crystal.yellow.value = 	getRandom (1, 12);

	// Change the HTML to reflect all of these changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

// Test console.log
console.log("------")
console.log("Target Score: " + targetScore);
console.log("Blue : " + crystal.blue.value + " | Green: " + crystal.green.value  + " | Red:  " + crystal.red.value + " | Yellow: " + crystal.yellow.value  );
console.log("------")
}


//Response to click on crystals

var addValues = function (crystal){
	
	currentScore = currentScore + crystal.value;
	// Check HTMl to reflect change in CurrentScore 
	$("#yourScore").html(currentScore);
	
	//Call checkWin function
	checkWin();

	console.log("Your Score :"  + currentScore );
}

// Check if use Won or Lost and Reset the game

var checkWin = function() {

	if (currentScore > targetScore) {
		alert("Sorry You lost!");
		console.log("You Lost");
		
		lossCount++;

		$("#lossCount").html(lossCount);

		startGame();
	}

	else if (currentScore == targetScore) {
		alert("Congerulations you won!");
		console.log("You won");
		
		winCount++;

		$("#winCount").html(winCount);
	
		startGame();
	}
}





// MAIN PROCESS
//----------------------------------------------------------
startGame();


$("#blue").click(function()  {
	addValues(crystal.blue);
});
$("#green").click(function()  {
	addValues(crystal.green);
});
$("#red").click(function()  {
	addValues(crystal.red);
});
$("#yellow").click(function()  {
	addValues(crystal.yellow);
});