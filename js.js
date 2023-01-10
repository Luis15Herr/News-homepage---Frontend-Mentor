let trigger = document.querySelector(".mobile__nav-trigger");
let sideNav = document.querySelector(".side__nav");
let body = document.querySelector("body");

trigger.addEventListener("click", function () {
  sideNav.classList.toggle("active");
  trigger.classList.toggle("active");
  body.classList.toggle("fixed");
});

sideNav.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("side__nav-inner") ||
    e.target.classList.contains("side__nav-item")
  )
    return;

  sideNav.classList.toggle("active");
  trigger.classList.toggle("active");
  body.classList.toggle("fixed");
});
