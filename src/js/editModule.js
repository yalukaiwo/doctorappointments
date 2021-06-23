class EditTherapist {
  constructor(id) {
    this.id = id;
  }
  getInfo() {
    const info = new GetInfo().therapist(this.id);
    return info;
  }
  getInputData() {
    const info = new GetInputInfo().therapist();
    return info;
  }
  render() {
    const data = this.getInfo();
    let status;
    if (data.importancy.toLowerCase() === "high") {
      status = `<option value="high" selected>High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>`;
    } else if (data.importancy.toLowerCase() === "medium") {
      status = `<option value="high">High</option>
        <option value="medium" selected>Medium</option>
        <option value="low">Low</option>`;
    } else {
      status = `<option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low" selected>Low</option>`;
    }
    let date = data.date;
    date = date.split("-");
    date.reverse();
    date = date.join("-");
    const form = document.createElement("div");
    form.classList = "card__info-wrapper";
    form.id = `editItem${this.id}`;
    form.innerHTML = `
      <form class="card__short-info">
        <input
          type="text"
          id="editNameInput"
          class="card__name-input"
          value="${data.name}"
        />
        <select id="editDoctorSelect" class="card__doctor-input">
          <option value="cardiologist">Cardiologist</option>
          <option value="dentist">Dentist</option>
          <option value="therapist" selected>Therapist</option>
        </select>
      </form>
      <div class="card__full-info">
        <div class="card__element">
          <p class="card__importancy-text card__text">Importance:</p>
          <select
            id="editImportancySelect"
            class="card__edit-importancy"
          >
            ${status}
          </select>
        </div>
        <div class="card__element">
          <p class="card__goal-text card__text">Visit goal:</p>
          <input
            type="text"
            id="editGoalInput"
            class="card__edit-input"
            value="${data.goal}"
          />
        </div>
        <div class="card__element">
          <p class="card__description-text card__text">Description:</p>
          <input
            type="text"
            id="editDescriptionInput"
            class="card__edit-input"
            value="${data.description}"
          />
        </div>
        <div class="card__element">
          <p class="card__age-text card__text">Due date:</p>
          <input
            type="date"
            id="editDueDateInput"
            class="card__edit-input"
            value="${date}"
          />
        </div>
        <div class="card__element">
          <p class="card__age-text card__text">Age:</p>
          <input
            type="text"
            id="editAgeInput"
            class="card__edit-input"
            value="${data.age}"
          />
        </div>
        <div class="card__edit-buttons buttons">
          <button class="buttons-cancel card__button" id="editCancel${this.id}">Cancel</button>
          <button class="buttons-submit card__button" id="editSubmit${this.id}">Submit</button>
        </div>
      </div>`;
    const root = document.getElementById(`visit${this.id}`);
    root.children[0].style.display = "none";
    root.children[1].style.display = "none";
    root.append(form);
    const cancel = document.getElementById(`editCancel${this.id}`);
    cancel.onclick = () => {
      root.children[root.children.length - 1].remove();
      root.children[0].style.display = "flex";
      root.children[1].style.display = "flex";
    };
    const submit = document.getElementById(`editSubmit${this.id}`);
    submit.onclick = () => {
      const inputData = this.getInputData();
      const update = new VisitTherapist(...inputData);
      update.patch(this.id);
    };
  }
}

class GetInfo {
  therapist(id) {
    const card = document.getElementById(`visit${id}`);
    const shortInfo = card.querySelector(".card__short-info");
    const name = shortInfo.querySelector(".card__name").textContent.trim();
    const fullInfo = card.querySelector(".card__full-info");
    const importance = fullInfo
      .querySelector(".card__importancy-value")
      .textContent.trim();
    const goal = fullInfo.querySelector(".card__goal-value").textContent.trim();
    const description = fullInfo
      .querySelector(".card__description-value")
      .textContent.trim();
    const duedate = fullInfo
      .querySelector(".card__duedate-value")
      .textContent.trim();
    const age = fullInfo.querySelector(".card__age-value").textContent.trim();
    return {
      name: name,
      importancy: importance,
      goal: goal,
      description: description,
      date: duedate,
      age: age,
    };
  }
}

class GetInputInfo {
  therapist() {
    const name = document.getElementById(`editNameInput`).value;
    const importance = document.getElementById(`editImportancySelect`).value;
    const goal = document.getElementById(`editGoalInput`).value;
    const description = document.getElementById(`editDescriptionInput`).value;
    const duedate = document.getElementById(`editDueDateInput`).value;
    const age = document.getElementById(`editAgeInput`).value;
    return [name, importance, goal, description, duedate, age];
  }
}
