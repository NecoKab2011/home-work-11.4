const hourTimer = document.querySelector(".hour-timer");
const secondTimer = document.querySelector(".second-timer");
const startBtn = document.querySelector(".start-again");

function startHourTimer() {
  let timeLeft = 60;
  const timer = setInterval(() => {
    timeLeft--;
    hourTimer.textContent = timeLeft;
    if (timeLeft === 30) alert("Залишилось менше половини часу!");
    if (timeLeft <= 0) clearInterval(timer);
  }, 60000);
}

function startSecondTimer() {
  let timeLeft = 30;
  const timer = setInterval(() => {
    timeLeft -= 0.01;
    secondTimer.textContent = timeLeft.toFixed(3);
    if (timeLeft <= 10) document.body.style.backgroundColor = "yellow";
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.body.style.backgroundColor = "white";
    }
  }, 10);
}

startBtn.addEventListener("click", startSecondTimer);
startHourTimer();
startSecondTimer();
