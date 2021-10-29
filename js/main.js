let section = document.querySelector(".skills ");
let spans = document.querySelectorAll(".progress-bar");

window.onscroll = () => {
  if (window.scrollY >= section.offsetTop - 400) {
    spans.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
};
