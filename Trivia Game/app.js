alert("test");

$('#start').on('click', function() {
		for (var i = 0; i < questions.length; i++){
			$('#subwrapper').append('<h2>' + questions[i].question + '</h2');
		for ( var j = 0; j < questions [i].answers.length; j++) {

		}
	}

})

var questions = [{
	question: "What was the first full length CGI movie?",
	answers: ["A Bug's Life", "Monster Inc", "Toy Story"],
	correctAnswer: "Toy Story"
},   {

	question: "Who was the first president of United States?",
	answers: ["George Washington", "Monster Inc", "Toy Story"],
	correctAnswer: "Toy Story"

}];

function isOldEnoughToDrink(age) {
    var output = isOldEnoughToDrink(22);
    if (output > 21){
      console.log(true);
      }else if (output < 21){
        console.log(false);
      }
}
