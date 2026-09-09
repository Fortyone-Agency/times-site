import "./site.css";

const clockElements = document.querySelectorAll<HTMLElement>("[data-clock]");

const updateClocks = () => {
  const locale = document.documentElement.lang || "en";
  const now = new Date();

  clockElements.forEach((clock) => {
    const timeZone = clock.dataset.clock;
    if (!timeZone) return;
    clock.textContent = new Intl.DateTimeFormat(locale, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);
  });
};

updateClocks();
window.setInterval(updateClocks, 30_000);

document.querySelectorAll<HTMLElement>("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear().toString();
});

const header = document.querySelector<HTMLElement>("[data-header]");
const updateHeader = () =>
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealElements.forEach((element) => observer.observe(element));
}
