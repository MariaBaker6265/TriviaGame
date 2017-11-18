var timer = {
	time:0,
	reset: function() {
		timer.time = 0;
		$("#timerDiv").html("00:00");
		$('#correct').html('');
	},

	start: function() {

		counter = setInterval(timer.time, 1000);

	},

	stop: function() {

		clearInterval(counter);

	},

	count: function() {

		timer.time++;
		var converted = timer.timeConverter(timer.time);
		/*Display converted time to the user.*/
		$('#timerDiv').html('Time' + converted);
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






