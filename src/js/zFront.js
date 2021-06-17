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
  if (e.target.id.includes("delete")) {
    el = e.target;
    const id = el.id.split("delete")[1];
    const visit = new VisitDelete();
    visit.delete(id);
  }
  if (
    e.target.id.includes("edit") &&
    e.target.classList.contains("options__icon")
  ) {
    if (
      e.target.closest(".card").children[0].children[0].children[1]
        .textContent === "Therapist"
    ) {
      console.log(
        e.target.closest(".card").children[0].children[0].children[1]
      );
      const edit = new EditTherapist(e.target.id.split("edit")[1]);
      edit.render();
    }
  }
});
