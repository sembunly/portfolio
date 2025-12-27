function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const direction = el.dataset.animate;
        el.classList.add(direction);
      } else {
        entry.target.classList.remove("left", "right", "up");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});
