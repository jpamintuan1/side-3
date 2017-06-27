alert("linked");

//Global varables
//-------------------------------------
// Arrays and Variables for holding data
var wordOptions =["jeremiah", "neena", "darion", "adam", "jerome", "lou", "greg"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions( Reusable blocks of code that I will call upon this needed)
//---------------------------------------------------------------
function startGame (){
	
	selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length
// reset
guessesLeft = 9;
wrongLetters =[];
blanksAndSucesses = []; 

// Populate blanks and sucesses with right number of blanks

for (var i = 0; i < numBlanks; i ++){
blanksAndSucesses.push("_");
}
// change HTML to reflect round conditions
document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;


console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSucesses);
}
function checkLetters(letter){
// check if letter exists in code at all
var isLetterInWord = false;

for ( var i = 0; i < numBlanks; i++){
	if (selectedWord [i] == letter){
		isLetterInWord = true;
		alert("letter found")
		}
	}
	// check where in word letter exists then populate out blanksAndSucesses array
if (isLetterInWord){
	for (var i = 0; i < numBlanks; i++){
		if(selectedWord [i] == letter){
			blanksAndSucesses [i] = letter;
			}
		}
	}

else {
	wrongLetters.push (letter);
	guessesLeft --
	}

}
console.log(blanksAndSucesses);

function roundComplete(){
	console.log("Win Count:" + winCount + " | Loss Count:" + lossCount +  " | Guesses Left: " + guessesLeft);
//update the HTML to reflect the most recent count Stats
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join( " ");


//Check if you user won
if (lettersInWord.toString() == blanksAndSucesses.toString()){
	winCount ++ ;
	alert("You Won !");
	// update the win counter in the HTML
	document.getElementById("winCounter").innerHTML = winCount;
	
startGame();
}

// check if use lost
else if (guessesLeft == 0) 	{
	lossCount ++;
	alert("You Lost!")
		
// update the HTML
document.getElementById("lossCounter").innerHTML = lossCount;

startGame();
// Main processes 
	}
// Intitate the code for the first time

	}

// Register keyClicks
document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	console.log(letterGuessed);
}
