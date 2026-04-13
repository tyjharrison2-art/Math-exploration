let score = 0;
let currentAnswer;

let timeLeft = 30;

function newQuest() {
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);

  currentAnswer = a + b;

  document.getElementById("question").innerText = `${a} + ${b}`;
}

function checkAnswer() {
  let user = Number(document.getElementById("answer").value);
  if (user === currentAnswer) {
    score = score + 1;
  }

  // document.getElementById("score").innerText = "Score: " + score;

  document.getElementById("answer").value = "";
  newQuest();
}

function startTimer() {
  let timer = setInterval(function () {
    timeLeft--;
    document.getElementById("score").innerText = "Score: " + score + " | Time: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("question").innerText = "Game Over!"
      document.getElementById("answer").disabled = true;
    }
  }, 1000);
}

document.getElementById("answer").addEventListener("keydown", function (event) {
  if (event.key === "Enter) {
      checkAnswer();
  }
});
                                                

newQuest();
startTimer();
