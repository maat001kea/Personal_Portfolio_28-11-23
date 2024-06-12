navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".forside__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".forside__content .description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".forside__content .forside__button", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".om_mig__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".om_mig__content .description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".om_mig__content .om_mig__button", {
  ...scrollRevealOption,
  delay: 1000,
});

// semester container
ScrollReveal().reveal(".semester__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
