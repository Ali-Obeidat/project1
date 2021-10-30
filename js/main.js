let section = document.querySelector(".skills ");
let spans = document.querySelectorAll(".progress-bar");

let nums = document.querySelectorAll(".count-box span");
let factsSection = document.querySelector("#facts");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= factsSection.offsetTop - 400) {
    if (!started) {
      nums.forEach((ele) => startCount(ele));
    }
    started = true;
  }
  if (window.scrollY >= section.offsetTop - 400) {
    spans.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 500 / goal);
}
