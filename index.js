"use strict";

const popover = document.querySelector("#popover");
const content = document.querySelector("#popoverContent");

popover.addEventListener("mouseenter", () => {
  content.classList.add("popoverShow");
});

popover.addEventListener("mouseleave", () => {
  content.classList.remove("popoverShow");
});

content.addEventListener("mouseenter", () => {
  content.classList.add("popoverShow");
});

content.addEventListener("mouseleave", () => {
  content.classList.remove("popoverShow");
});
