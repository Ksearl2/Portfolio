const body = document.body;
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 0) {
    body.classList.add(toggleClass);
  } else {
    body.classList.remove(toggleClass);
  }
});
