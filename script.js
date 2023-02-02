var sec = 00;
var min = 00;
var hrs = 00;
var tens = 00;

const startButton = document.querySelector("#start");
const milliSeconds = document.querySelector("#mili-seconds");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hrs");
const resetButton = document.querySelector("#reset");
const listDiv = document.querySelector(".record-time")
const listRecordedTime = document.querySelector("#record-time-list")
const clearButton = document.querySelector("#clear")

// const clearButton = document.querySelector('#');
var interval;

const clearList = () => {
    listRecordedTime.innerHTML = '';
    listDiv.style.display = "none";
}
const recordTime = () => {
    listDiv.style.display = "flex";
    let ele = document.createElement("li");
    ele.innerText = `${hours.innerText}:${minutes.innerText}:${seconds.innerText}:${milliSeconds.innerText}`
    listRecordedTime.appendChild(ele);
}
const startTimer = function () {
  tens++;
  if (tens <= 9) {
    milliSeconds.innerText = `0${tens}`;
  }
  if (tens > 9 && tens < 99) {
    milliSeconds.innerText = tens;
  }
  if (tens > 99) {
    tens = 0;
    sec++;
    if (sec <= 9) {
      seconds.innerText = `0${sec}`;
    }
    if (sec > 9 && sec < 60) {
      seconds.innerText = sec;
    }
    if (sec > 59) {
      sec = 0;
      min++;
      if (min <= 9) {
        minutes.innerText = `0${min}`;
      }
      if (min > 9 && min < 60) {
        minutes.innerText = min;
      }
      if (min > 59) {
        min = 0;
        hrs++;
        if (hrs <= 9) {
          hours.innerText = `0${hrs}`;
        }
        if (hours > 9 && tens < 24) {
          hours.innerText = hrs;
        }
        if (hours > 24) {
          clearInterval(interval);
          tens = 00;
          sec = 00;
          min = 00;
          hrs = 00;
          milliSeconds.innerText = tens;
          seconds.innerText = sec;
          minutes.innerText = min;
          hours.innerText = hrs;
        }
      }
    }
  }
};
const startStopwatch = () => {
  if (startButton.classList.contains("stop")) {
    startButton.classList.remove("stop");
    clearInterval(interval);
    startButton.innerText = "Start";
} else {
    startButton.classList.add("stop");
    startButton.innerText = "Stop";
    interval = setInterval(startTimer,10);
  }
};

const resetTime = () => {
    console.log('hi');
    startButton.classList.remove("stop");
    startButton.innerText = "Start";
    clearInterval(interval);
    tens = 0;
    sec = 0;
    min = 0;
    hrs = 0;
    milliSeconds.innerText = '00';
    seconds.innerText = '00';
    minutes.innerText = '00';
    hours.innerText = '00';
}

startButton.addEventListener("click", startStopwatch);

