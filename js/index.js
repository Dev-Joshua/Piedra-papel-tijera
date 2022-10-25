let userScore = 0;
let cpuScore = 0;
let closeButton;
const userScore_p = document.getElementById("user-score");
const cpuScore_p = document.getElementById("cpu-score");
const restart = document.getElementById("restart");
const result = document.getElementById("result");
const modalWindow = document.querySelector(".modal")
const containerRock = document.getElementById("rock");
const containerPaper = document.getElementById("paper");
const containerScissors = document.getElementById("scissors");


function getCpuChoice() {
  const choices = ['roca', 'papel', 'tijera'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function winner(userChoice, cpuChoice) {
  userScore++;
  userScore_p.innerHTML = userScore;
  cpuScore_p.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">¡Tu ganas!</h1> <p>La <strong>CPU</strong> eligio <strong>${cpuChoice}</strong></p>`;
  modalWindow.style.display = 'block';
}

function lose(userChoice, cpuChoice){
  cpuScore++;
  userScore_p.innerHTML = userScore;
  cpuScore_p.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1 class="text-lose">Tu pierdes</h1> <p>La <strong>CPU</strong> eligio <strong>${cpuChoice}</strong></p>`; 
  modalWindow.style.display = 'block'
}

function draw(userChoice, cpuChoice){
  userScore_p.innerHTML = userScore;
  cpuScore_p.innerHTML = cpuScore;
  result.innerHTML = `<span class="close"></span> <h1>Es un empate</h1> <p>Ambos eligieron <strong>${cpuChoice}</strong></p>`;
  modalWindow.style.display = 'block'
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'rocatijera':
    case 'papelroca':
    case 'tijerapapel':
      winner(userChoice, cpuChoice);
      break;
    case 'rocapapel':
    case 'papeltijera':
    case 'tijeraroca':
      lose(userChoice, cpuChoice);
      break;
    case 'rocaroca':
    case 'papelpapel':
    case 'tijeratijera':
      draw(userChoice, cpuChoice);
      break;
  }
}


function main() {
  containerRock.addEventListener('click', function() {
    play('roca');
  })
  
  containerPaper.addEventListener('click', function() {
    play('papel');
  })
  
  containerScissors.addEventListener('click', function() {
    play('tijera');
  })
}


function clearModal(e){
  closeButton = document.querySelector('.close');

  if(e.target == modalWindow) {
    modalWindow.style.display = "none"
  }
  else if(closeButton){
    closeButton.addEventListener('click', function(){
      modalWindow.style.display = "none"
    });
  }
}


function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_p.innerHTML = userScore;
  cpuScore_p.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();