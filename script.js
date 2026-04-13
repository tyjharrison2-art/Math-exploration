let score = 0;
let currentAnswer;

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

  document.getElementById("score").innerText = "Score: " + score;

  document.getElementById("answer").value = "";
  newQuest();
}

newQuest();
