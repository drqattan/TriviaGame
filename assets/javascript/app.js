//timer on the first page.

// window.onload = function() {
// 	var countdownELement = document.getElementById('countDown'),
// 	seconds = 5, 
// 	second = 0,
// 	interval;

// 	interval = setInterval(function(){
// 		countdownELement.firstChild.data = 'Are you ready?!?' + (seconds-second) + 'seconds';

// //if the count down is finished, alerts the learner
// if (second >= seconds) {
// 	clearInterval(x);
// 	document.getElementById("countDown").innerHTML = "Lets Begin";
// 	}

// 	second++;
// },1000);
// }

// var counter=setInterval(timer, 1000);
// function timer()
// {
// 	count=count-1;
// 	if (count <= 0)
// 	{
// 		clearInterval(counter);

// 		return; 
// 	}
// 	{
// 	clearInterval(coutner);
// 	return;

// }
// document.getElementById("countDown").innerHTML=count + "seconds";
// }

// function starttimer(duration, display) {
// 	var timer = duration, minutes, seconds;
// 	setInterval(functoin () {
// 		minutes = parseInt(timer / 60, 10);
// 		seconds = parseInt(timer % 60, 10);

// 		minutes = minutes < 10 ? "0" + minutes : minutes;
// 		seconds = seconds < 10 ? "0" + seconds : seconds;
// 		display.textContent = minutes + ":" + seconds;
// 		if (--timer <0) {
// 			timer = duration;

// 		}
// 	}, 1000);
// }
// window.onload = function () {
// 	var fiveminutes = 60 * 5,
// 	display = document.querySelector('#time');
// 	starttimer =(fiveminutes, display);
// };

// function startTimer(duration, display) {
// 	var timer = duration, minutes, seconds;
// 	setInterval (function() {
// 		minutes = parseInt(timer / 60, 10);
// 		seconds = parseInt(timer % 60, 10);

// 		minutes = minutes < 10 ? "0" + minutes :minutes;
// 		seconds = seconds < 10 ? "0" + seconds : seconds;

// 		display.text(minutes + ":" + seconds);

// 		if (--timer < 0) {
// 			timer = duration;
// 		}
// 		}, 1000);
// 	}
// }
// 	jquery(function ($) {
// 		var fiveMinutes = 60 *5,
// 		display = $('#time');
// 		startTimer(fiveMinutes, display);
// 	});

//attempt to set up first page timer
var timeLeft = 30;
var elem = document.getElementById('time');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    display()
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


function countdown() {
  if (timeLeft == 0) &&& (onclick=none)
  	false
  if ($('3').click(function() {
  	$("score").html(function(i,val) {return + val +1});
  }) 
  else {
  	false
  }

  } );}