const input = document.getElementById("input");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const red = document.getElementById("red");
const stops = document.getElementById("stop");
const enter = document.getElementById("enter");

let running = true;
let num = 0;

function trafficLight(count) {
  let yelCount = count;
  let middleCount = count + yelCount;
  let finalCount = middleCount + count;
  let extraCount = finalCount + yelCount;

  setInterval(() => {
    if (running) {
      ++num;
      if (num <= count) {
        yellow.style.backgroundColor = "inherit";
        green.style.backgroundColor = "#00FF00";
      } else if (num > count && num <= middleCount) {
        green.style.backgroundColor = "inherit";
        yellow.style.backgroundColor = "#FFFF00";
      } else if (num > middleCount && num <= finalCount) {
        yellow.style.backgroundColor = "inherit";
        red.style.backgroundColor = "#FF0000";
      } else if (num > finalCount && num <= extraCount) {
        red.style.backgroundColor = "inherit";
        yellow.style.backgroundColor = "#FFFF00";
      } else {
        num = 0;
        yellow.style.backgroundColor = "inherit";
        green.style.backgroundColor = "#00FF00";
      }
    }
  }, 1000);
}

enter.addEventListener("click", function () {
  if (input.value) {
    running = true;
    let sets = Number(input.value);
    trafficLight(sets);
  }
});

stops.addEventListener("click", () => (running = false));
