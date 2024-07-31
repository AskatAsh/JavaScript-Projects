const start_stop_btn = document.querySelector(".start-stop-btn");
const reset_btn = document.querySelector(".reset-btn");
const display_time = document.querySelector(".time-display");
const milisecond_display = document.querySelector(".milisecond-display");

console.log(start_stop_btn);
console.log(reset_btn);
console.log(display_time);

let active = false;
let interval;
let milisecond = 0;
let [sec, min, hour] = [0, 0, 0];

function time_count() {
    milisecond++;
    if (milisecond > 99) {
      milisecond = 0;
      sec++;
      if (sec > 59) {
        sec = 0;
        min++;
        if (min > 59) {
          min = 0;
          hour++;
        }
      }
    }
  // console.log(sec, min, hour);
  milisecond = String(milisecond).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  min = String(min).padStart(2, "0");
  hour = String(hour).padStart(2, "0");
  display_time.innerHTML = `${hour}<span>h</span>:${min}<span>m</span>:${sec}<span>s</span>`;
  milisecond_display.textContent = `${milisecond}`;
}

start_stop_btn.addEventListener("click", () => {
  active = active ? false : true;
  if (active) {
    start_stop_btn.textContent = "Stop";
    start_stop_btn.classList.add("active-btn");
    interval = setInterval(time_count, 10);
  } else {
    start_stop_btn.textContent = "Start";
    start_stop_btn.classList.remove("active-btn");
    clearInterval(interval);
  }
});

reset_btn.addEventListener("click", () => {
  display_time.innerHTML = `00<span>h</span>:00<span>m</span>:00<span>s</span>`;
  milisecond_display.textContent = "00";
});
