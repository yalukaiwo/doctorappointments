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
      const edit = new EditTherapist(e.target.id.split("edit")[1]);
      edit.render();
    }
  }
});

if (TOKEN === null) {
  const login = document.getElementById("loginButton");

  login.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = new Modal();
    modal.loginModal();
  });
} else {
  const login = document.getElementById("loginButton");
  login.style.display = "none";
  const create = document.getElementById("createButton");
  create.style.display = "block";
 
  create.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = new Modal();
    modal.createModal();
    
  });
  const renderAll = new AllVisits();
  renderAll.render();
}



