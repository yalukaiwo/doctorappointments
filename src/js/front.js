const switchBtn = document.getElementById("filterSwitch");
const menu = document.getElementById("filtersForm");

switchBtn.addEventListener("click", () => {
  menu.classList.toggle("main__filters--active");
});

const cards = document.getElementById("cardRoot");

cards.addEventListener("click", (e) => {
  if (e.target.id.includes("showmore")) {
    el = e.target;
    const id = "visit" + el.id.split("showmore")[1];
    document.getElementById(id).classList.toggle("card--open");
    if (document.getElementById(id).classList.contains("card--open")) {
      el.textContent = "Show less";
    } else {
      el.textContent = "Show more";
    }
  }
});
