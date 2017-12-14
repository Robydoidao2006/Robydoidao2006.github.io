function submitAnswer (){
	var total = 5;
	var score = 0;
	//var timer =
	//var stoptime = 0;
	//var totaltime = 60;
	//var timeleft =
	//var rightanswer
	//var wronganswer



	//user input
	var q1 = document.forms['triviaForm'] ['q1'].value;
	var q2 = document.forms['triviaForm'] ['q2'].value;
	var q3 = document.forms['triviaForm'] ['q3'].value;
	var q4 = document.forms['triviaForm'] ['q4'].value;
	var q5 = document.forms['triviaForm'] ['q5'].value;

	// AI check if user missed a question
	for (i = 1; i <= total;i++){
		if(eval ('q' +i) == null || eval('q'+i) == ""){
			alert('You missed question '+ i);
			return false;
		}
	}

	// Anwser
	var anwser = ['a','b','b','b','c'];

	// check Anwser (could use a for loop)
	if(q1 == anwser [0]){
		score++;
	}
	if(q2 == anwser [1]){
		score++;
	}
	if(q3 == anwser [2]){
		score++;
	}
	if(q4 == anwser [3]){
		score++;
	}
	if(q5 == anwser [4]){
		score++;
	}

	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You got <span>'+score+'</span> points out of <span>'+total+'</span></h3>';

	return false;
}



// timer 
//(come back to this later. time reaches zero, won't display results)
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;

        } 
    }, 1000);
}

window.onload = function () {
    var oneMinute = 59 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);

};
/*
if ( time == 0 ) { 
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You got <span>'+score+'</span> points out of <span>'+total+'</span></h3>';


}
*/







 










