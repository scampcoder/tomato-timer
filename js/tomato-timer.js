const work = document.getElementById('work');
const minibreak = document.getElementById('mini');
const longbreak = document.getElementById('long');

function pomodoro(mins){
  let minutes = mins;
  let seconds = mins * 60;
  let countdown = minutes + ":" + seconds;
  setInterval(function() {
    document.getElementById('timer').innerHTML = countdown;
    seconds--;
    if (seconds < 0) {
      minutes--;

    }
    if(minutes == 0 && seconds == 0){
      alert("Timer Done!");
    }
  }, 1000);

};

work.addEventListener('click', pomodoro(25));
minibreak.addEventListener('click', pomodoro(5));
longbreak.addEventListener('click', pomodoro(10));
