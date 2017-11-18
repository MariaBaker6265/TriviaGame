window.onload = function() {
	
	/*Start timer on button click.*/
	/*$("#start").click(stopwatch.start);*/

};


function correctGuess(){

var correctGuess = $( "input[type=radio][name=athlete]:checked" ).val();
console.log(correctGuess);

if ( correctGuess = jesseOwens) {
	correctGuess++;
	$("#correct").html("Number correct" + correctGuess + ".");
}
}


var stopwatch = {
	time:0,
	reset: function() {
		stopwatch.time = 0;
		$("#timerDiv").click("00:00");

	},

	start: function() {

		counter = setInterval(stopwatch.time, 1000);

	},

	/*Stop the timer - Need to add logic to count the 
	number of questions answered and stop the timer when all question have been answered.*/
	stop: function() {

		clearInterval(counter);

	},

	count: function() {

		stopwatch.time++;
		var converted = stopwatch.timeConverter(stopwatch.time);
		/*Display converted time to the user.*/
		$("#timerDiv").html('Time' + converted);
	},

	timeConverter: function(t) {

		/*Converts the current time in seconds to minutes and seconds.*/
		var minutes = Math.floor(t/60);
		var seconds = t - (minutes * 60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes === 0) {
			minutes = "00";
		} else if (minutes < 10) {
			minutes = "0" + minutes;
		}
	}



}

