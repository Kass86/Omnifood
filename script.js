"use strict";

const nav = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".btn-close");

menuBtn.addEventListener("click", () => {
  nav.classList.add("nav-open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionTo = document.querySelector(href);
      sectionTo.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("nav-open");
    }
  });
});

// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) document.body.classList.add("sticky");

    if (ent.isIntersecting !== false) document.body.classList.remove("sticky");
  },
  { root: null, threshold: 0, rootMargin: "-65px" }
);
observer.observe(sectionHeroEl);
