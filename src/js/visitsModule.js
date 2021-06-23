class Visit {
  constructor(name, doctor, importancy, goal, description, date) {
    this.name = name;
    this.doctor = doctor;
    this.importancy = importancy;
    this.goal = goal;
    this.description = description;
    this.date = date;
  }
}
class VisitDelete {
  async delete(id) {
    let response = await axios({
      url: `https://ajax.test-danit.com/api/v2/cards/${id}`,
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status === 200) {
      this.remov(id);
    }
  }
  remov(id) {
    const cardDelete = document.getElementById(`visit${id}`);
    cardDelete.remove();
    const cards = document.querySelectorAll(".card");
    if (cards.length === 0) {
      document.getElementById("noCardsAdded").style.display = "block";
    }
  }
}
class VisitDentist extends Visit {
  constructor(name, importancy, goal, description, date, lastVisit) {
    super(name, "Dentist", importancy, goal, description, date);
    this.lastVisit = lastVisit;
  }
  async post() {
    let response = await axios({
      url: "https://ajax.test-danit.com/api/v2/cards/",
      method: "post",
      data: {
        name: this.name,
        description: this.description,
        doctor: this.doctor,
        importancy: this.importancy,
        goal: this.goal,
        date: this.date,
        lastVisit: this.lastVisit,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const card = this.render(response.data.id);
    const root = document.getElementById("cardRoot");
    root.append(card);
  }

  render(id) {
    const text = document.getElementById("noCardsAdded");
    text.style.display = "none";
    const card = document.createElement("div");
    card.classList = "cards__card card";
    card.id = `visit${id}`;
    card.innerHTML = `
            <div class="card__info-wrapper">
              <div class="card__short-info">
                <h3 class="card__name">${this.name}</h3>
                <h4 class="card__doctor">Dentist</h4>
              </div>
              <div class="card__options options">
                <div class="options__short">
                  <img src="./dist/img/trash.png" alt="delete" class="options__icon" id="delete${id}">
                </div>
                <div class="options__long">
                  <img src="./dist/img/edit.png" alt="edit" class="options__icon" id="edit${id}">
                </div>
              </div>
              <div class="card__full-info">
                <div class="card__element">
                  <p class="card__importancy-text card__text">Importancy:</p>
                  <p class="card__importancy-value card__value">${
                    this.importancy
                  }</p>
                </div>
                <div class="card__element">
                  <p class="card__goal-text card__text">Visit goal:</p>
                  <p class="card__goal-value card__value">
                    ${this.goal}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__description-text card__text">Description:</p>
                  <p class="card__description-value card__value">
                    ${this.description}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__description-text card__text">Due date:</p>
                  <p class="card__duedate-value card__value">
                    ${this.date.split("-").reverse().join("-")}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__problems-text card__text">Last visit:</p>
                  <p class="card__lastvisit-value card__value">${
                    this.lastVisit
                  }</p>
                </div>
              </div>
            </div>
            <p class="card__showmore" id="showmore${id}">Show more</p>`;
    return card;
  }
  async patch(id) {
    let response = await axios({
      url: `https://ajax.test-danit.com/api/v2/cards/${id}`,
      method: "put",
      data: {
        name: this.name,
        description: this.description,
        doctor: this.doctor,
        importancy: this.importancy,
        goal: this.goal,
        date: this.date,
        lastVisit: this.lastVisit,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status === 200) {
      const root = document.getElementById(`visit${id}`);
      const card = this.render(id);
      console.log(this.render(id));
      root.innerHTML = card.innerHTML;
      console.log(root);
    }
  }
}
class VisitCardiologist extends Visit {
  constructor(
    name,
    importancy,
    goal,
    description,
    date,
    pressure,
    massIndex,
    heartDeseases,
    age
  ) {
    super(name, "Cardiologist", importancy, goal, description, date);
    this.pressure = pressure;
    this.massIndex = massIndex;
    this.heartDeseases = heartDeseases;
    this.age = age;
  }
  async post() {
    let response = await axios({
      url: "https://ajax.test-danit.com/api/v2/cards/",
      method: "post",
      data: {
        name: this.name,
        description: this.description,
        doctor: this.doctor,
        importancy: this.importancy,
        goal: this.goal,
        date: this.date,
        pressure: this.pressure,
        massIndex: this.massIndex,
        heartDeseases: this.heartDeseases,
        age: this.age,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const root = document.getElementById("cardRoot");
    const card = this.render(response.data.id);
    root.append(card);
  }
  async patch(id) {
    let response = await axios({
      url: `https://ajax.test-danit.com/api/v2/cards/${id}`,
      method: "put",
      data: {
        name: this.name,
        description: this.description,
        doctor: this.doctor,
        importancy: this.importancy,
        goal: this.goal,
        date: this.date,
        pressure:this.pressure,
        heartDeseases:this.heartDeseases,
        massIndex:this.massIndex,
        age: this.age,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status === 200) {
      const root = document.getElementById(`visit${id}`);
      const card = this.render(id);
      console.log(this.render(id));
      root.innerHTML = card.innerHTML;
      console.log(root);
    }
  }
  render(id) {
    const text = document.getElementById("noCardsAdded");
    text.style.display = "none";
    const card = document.createElement("div");
    card.classList = "cards__card card";
    card.id = `visit${id}`;
    card.innerHTML = `
            <div class="card__info-wrapper">
              <div class="card__short-info">
                <h3 class="card__name">${this.name}</h3>
                <h4 class="card__doctor">${this.doctor}</h4>
              </div>
              <div class="card__options options">
                <div class="options__short">
                  <img
                    src="./dist/img/trash.png"
                    alt="delete"
                    class="options__icon"
                    id="delete${id}"
                  />
                </div>
                <div class="options__long">
                  <img
                    src="./dist/img/edit.png"
                    alt="edit"
                    class="options__icon"
                    id="edit${id}"
                  />
                </div>
              </div>
              <div class="card__full-info">
                <div class="card__element">
                  <p class="card__importancy-text card__text">Importancy:</p>
                  <p class="card__importancy-value card__value">${
                    this.importancy
                  }</p>
                </div>
                <div class="card__element">
                  <p class="card__goal-text card__text">Visit goal:</p>
                  <p class="card__goal-value card__value">
                    ${this.goal}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__description-text card__text">Description:</p>
                  <p class="card__description-value card__value">
                    ${this.description}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__date-text card__text">Due date:</p>
                  <p class="card__duedate-value card__value">${this.date
                    .split("-")
                    .reverse()
                    .join("-")}</p>
                </div>
                <div class="card__element">
                  <p class="card__pressure-text card__text">Pressure:</p>
                  <p class="card__pressure-value card__value">${
                    this.pressure
                  }</p>
                </div>
                <div class="card__element">
                  <p class="card__mass-text card__text">Mass index:</p>
                  <p class="card__mass-value card__value">${this.massIndex}</p>
                </div>
                <div class="card__element">
                  <p class="card__problems-text card__text">Heart diseases:</p>
                  <p class="card__problems-value card__value">${
                    this.heartDeseases
                  }</p>
                </div>
                <div class="card__element">
                  <p class="card__age-text card__text">Age:</p>
                  <p class="card__age-value card__value">${this.age}</p>
                </div>
              </div>
            </div>
            <p class="card__showmore" id="showmore${id}">Show more</p>
`;
    return card;
  }
}
class VisitTherapist extends Visit {
  constructor(name, importancy, goal, description, date, age) {
    super(name, "Therapist", importancy, goal, description, date);
    this.age = age;
  }
  async post() {
    let response = await axios({
      url: "https://ajax.test-danit.com/api/v2/cards/",
      method: "post",
      data: {
        name: this.name,
        description: this.description,
        doctor: this.doctor,
        importancy: this.importancy,
        goal: this.goal,
        date: this.date,
        age: this.age,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const card = this.render(response.data.id);
    const root = document.getElementById("cardRoot");
    root.append(card);
  }
  async patch(id) {
    let response = await axios({
      url: `https://ajax.test-danit.com/api/v2/cards/${id}`,
      method: "put",
      data: {
        name: this.name,
        description: this.description,
        doctor: this.doctor,
        importancy: this.importancy,
        goal: this.goal,
        date: this.date,
        age: this.age,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status === 200) {
      const root = document.getElementById(`visit${id}`);
      const card = this.render(id);
      root.innerHTML = card.innerHTML;
    }
  }
  render(id) {
    const text = document.getElementById("noCardsAdded");
    text.style.display = "none";
    const card = document.createElement("div");
    card.classList = "cards__card card";
    card.id = `visit${id}`;
    card.innerHTML = `
            <div class="card__info-wrapper">
              <div class="card__short-info">
                <h3 class="card__name">${this.name}</h3>
                <h4 class="card__doctor">Therapist</h4>
              </div>
              <div class="card__options options">
                <div class="options__short">
                  <img src="./dist/img/trash.png" alt="delete" class="options__icon" id="delete${id}">
                </div>
                <div class="options__long">
                  <img src="./dist/img/edit.png" alt="edit" class="options__icon" id="edit${id}">
                </div>
              </div>
              <div class="card__full-info">
                <div class="card__element">
                  <p class="card__importancy-text card__text">Importancy:</p>
                  <p class="card__importancy-value card__value">${
                    this.importancy.charAt(0).toUpperCase() +
                    this.importancy.slice(1)
                  }</p>
                </div>
                <div class="card__element">
                  <p class="card__goal-text card__text">Visit goal:</p>
                  <p class="card__goal-value card__value">
                    ${this.goal}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__description-text card__text">Description:</p>
                  <p class="card__description-value card__value">
                   ${this.description}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__description-text card__text">Due date:</p>
                  <p class="card__duedate-value card__value">
                   ${this.date.split("-").reverse().join("-")}
                  </p>
                </div>
                <div class="card__element">
                  <p class="card__age-text card__text">Age:</p>
                  <p class="card__age-value card__value">${this.age}</p>
                </div>
              </div>
            </div>
            <p class="card__showmore" id="showmore${id}">Show more</p>`;
    return card;
  }
}
class AllVisits {
  async get() {
    return await axios({
      url: "https://ajax.test-danit.com/api/v2/cards",
      method: "get",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  }
  async render() {
    const data = await this.get();
    const root = document.getElementById("cardRoot");
    data.data.forEach((element) => {
      if (element.doctor === "Therapist") {
        const visit = new VisitTherapist(
          element.name.toString(),
          element.importancy.toString(),
          element.goal.toString(),
          element.description.toString(),
          element.date.toString(),
          element.age.toString()
        );
        root.append(visit.render(element.id));
      } else if (element.doctor === "Dentist") {
        const visit = new VisitDentist(
          element.name.toString(),
          element.importancy.toString(),
          element.goal.toString(),
          element.description.toString(),
          element.date.toString(),
          element.lastVisit.toString()
        );
        root.append(visit.render(element.id));
      } else if (element.doctor === "Cardiologist") {
        const visit = new VisitCardiologist(
          element.name.toString(),
          element.importancy.toString(),
          element.goal.toString(),
          element.description.toString(),
          element.date.toString(),
          element.pressure.toString(),
          element.massIndex.toString(),
          element.heartDeseases.toString(),
          element.age.toString()
        );
        root.append(visit.render(element.id));
      }
    });
  }
}
