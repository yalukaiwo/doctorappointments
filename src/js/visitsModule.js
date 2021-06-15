class Visit {
  constructor(name, doctor, importancy, goal, description, date) {
    this.name = name;
    this.doctor = doctor;
    this.importancy = importancy;
    this.goal = goal;
    this.description = description;
    this.date = date;
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
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 04a749a6-0cb8-43ca-9511-6bc6d5fa9396`,
      },
    });
    console.log(response.data);
    console.log(response.data.doctor);
    if (response.data.doctor === "therapist") {
      var therapistVisit = new Therapist(
        response.data.name,
        response.data.doctor,
        response.data.importancy,
        response.data.goal,
        response.data.description,
        response.data.date,
        response.data.age
      );
      therapistVisit.render();
    } else if (response.data.doctor === "dentist") {
      var dentistVisit = new Visit(
        response.data.name,
        response.data.doctor,
        response.data.importancy,
        response.data.goal,
        response.data.description,
        response.data.date
      );
      dentistVisit.render();
    } else if (response.data.doctor === "cardiologist") {
      var cardiologistVisit = new Cardiologist(
        response.data.name,
        response.data.doctor,
        response.data.importancy,
        response.data.goal,
        response.data.description,
        response.data.date
      );
      cardiologistVisit.render();
    }
  }
  render() {
    const root = document.getElementById("cardRoot");
    const card = `<div class="cards__card card" id="visit2">
            <!-- id="visit{номер карточки на сервере}" -->
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
                    id="delete2"
                  />
                  <!-- id="delete{номер карточки на сервере}" -->
                </div>
                <div class="options__long">
                  <img
                    src="./dist/img/edit.png"
                    alt="edit"
                    class="options__icon"
                    id="edit2"
                  />
                  <!-- id="edit{номер карточки на сервере}" -->
                </div>
              </div>
              <div class="card__full-info">
                <div class="card__element">
                  <p class="card__importancy-text card__text">Importancy:</p>
                  <p class="card__importancy-value card__value">${this.importancy}</p>
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
                  <p class="card__date-text card__text">Date:</p>
                  <p class="card__date-value card__value">${this.date}</p>
                </div>
                <div class="card__element">
                  <p class="card__pressure-text card__text">Pressure:</p>
                  <p class="card__pressure-value card__value">${this.pressure}</p>
                </div>
                <div class="card__element">
                  <p class="card__mass-text card__text">Mass index:</p>
                  <p class="card__mass-value card__value">${this.massIndex}</p>
                </div>
                <div class="card__element">
                  <p class="card__problems-text card__text">Heart diseases:</p>
                  <p class="card__problems-value card__value">${this.heartDeseases}</p>
                </div>
                <div class="card__element">
                  <p class="card__age-text card__text">Age:</p>
                  <p class="card__age-value card__value">${this.age}</p>
                </div>
              </div>
            </div>
            <p class="card__showmore" id="showmore2">Show more</p>
            <!-- id="showmore{номер карточки на сервере}" -->
          </div>`;
    root.innerHTML += card;
  }

  edit() {}
  delete() {}
}
class Therapist extends Visit {
  constructor(name, doctor, importancy, goal, description, date, age) {
    super(name, doctor, importancy, goal, description, date);
    this.age = age;
  }
}
class Cardiologist extends Therapist {
  constructor(
    name,
    doctor,
    importancy,
    goal,
    description,
    date,
    pressure,
    massIndex,
    heartDeseases,
    age
  ) {
    super(name, doctor, importancy, goal, description, date, age);
    this.pressure = pressure;
    this.massIndex = massIndex;
    this.heartDeseases = heartDeseases;
  }
}
