const work = document.getElementById('work');
const minibreak = document.getElementById('mini');
const longbreak = document.getElementById('long');

function pomodoro(mins){
  
};

work.addEventListener('click', pomodoro(25));
minibreak.addEventListener('click', pomodoro(5));
longbreak.addEventListener('click', pomodoro(10));
