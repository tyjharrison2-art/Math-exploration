let difficulty = "easy";
let score = 0;
let currentAnswer;

let timeLeft = 30;

function newQuest() {
  let a, b, op;

  if (difficulty === "easy") {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    op = "+";
    currentAnswer = a + b;
  }

  else if (difficulty === "medium") {
    a = Math.floor(Math.random() * 12);
    b = Math.floor(Math.random() * 12);
    op = "×";
    currentAnswer = a * b;
  }

  else if (difficulty === "hard") {
    let operations = ["+", "-", "×"];
    op = operations[Math.floor(Math.random() * operations.length)];

    a = Math.floor(Math.random() * 20);
    b = Math.floor(Math.random() * 20);

    if (op === "+") currentAnswer = a + b;
    if (op === "-") currentAnswer = a - b;
    if (op === "×") currentAnswer = a * b;
  }

  document.getElementById("question").innerText = `${a} ${op} ${b}`;
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
    document.getElementById("score").innerText = "Score: " + score + " | Time: " + timeLeft + " | " + difficulty.toUpperCase();

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("question").innerText = "Game Over!"
      document.getElementById("answer").disabled = true;
    }
  }, 1000);
}

function setDifficulty(level){
  difficulty = level;
  newQuest();
}
document.getElementById("answer").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      checkAnswer();
  }
});
                                                

newQuest();
startTimer();
