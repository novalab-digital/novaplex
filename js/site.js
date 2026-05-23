/* NOVAPLEX — minimal interactions: mobile menu + reveal on scroll */
(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu when a nav link is tapped
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll (only enhances; content is visible without JS)
  var items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !items.length) return;
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );
  items.forEach(function (el) { io.observe(el); });
})();
