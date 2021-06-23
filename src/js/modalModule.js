class Modal {
  loginRender() {
    const holder = new Div("page__modal-holder").create();
    holder.id = "modalRoot";
    const modalWindow = new Div("page__modal-window modal").create();
    holder.append(modalWindow);
    const header = new Div("modal__header").create();
    const title = new H("h3", "modal__title", "Login").create();
    const close = new H("h4", "modal__close", "&times;").create();
    close.onclick = () => {
      this.closeModal();
    };
    header.append(title, close);
    const content = new Div("modal__content").create();
    modalWindow.append(header, content);
    const form = new Form("modal__form").create();
    content.append(form);
    const shortInfo = new Div("modal__short-info").create();
    form.append(shortInfo);
    const email = new Div("modal__input-holder").create();
    shortInfo.append(email);
    const emailText = new P("modal__input-text", "Email:").create();
    const emailInput = new Input(
      "email",
      "modal__input",
      true,
      "modalEmailInput"
    ).create();
    email.append(emailText, emailInput);
    const pass = new Div("modal__input-holder").create();
    shortInfo.append(pass);
    const passText = new P("modal__input-text", "Password:").create();
    const passInput = new Input(
      "password",
      "modal__input",
      true,
      "modalPassInput"
    ).create();
    pass.append(passText, passInput);
    const buttonHolder = new Div("modal__button-holder").create();
    form.append(buttonHolder);
    const submit = new ButtonToken(
      "modal__form-submit",
      "Login",
      "modalFormSubmit",
      this.post
    ).create();
    buttonHolder.append(submit);
    return holder;
  }
  loginModal() {
    const modal = this.loginRender();
    document.body.append(modal);
    document.body.style.overflow = "hidden";
  }
  createRender() {
    const holders = new Div("page__modal-holder").create();
    holders.id = "modalRoot";
    holders.innerHTML = `
    <div class="page__modal-window modal">
      <div class="modal__header">
        <h3 class="modal__title">Create new visit</h3>
        <h4 class="modal__close" id = "modal__close">&times;</h4>
      </div>
      <div class="modal__content">
        <form class="modal__form modal__form--cardiologist">
          <div class="modal__short-info">
            <div class="modal__input-holder">
              <p class="modal__input-text">Name:</p>
              <input
                type="text"
                required
                class="modal__input"
                id="modalNameInput"
              />
            </div>
            <div class="modal__input-holder">
              <p class="modal__input-text">Doctor:</p>
              <select class="modal__select modalDoctorInput" id="modalDoctorInput">
                <option value="cardiologist" selected>Cardiologist</option>
                <option value="dentist">Dentist</option>
                <option value="therapist">Therapist</option>
              </select>
            </div>
          </div>
          <div class="modal__full-info">
            <div class="modal__input-holder">
              <p class="modal__input-text">Importancy:</p>
              <select class="modal__select" id="modalImportancyInput">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div class="modal__input-holder">
              <p class="modal__input-text">Visit goal:</p>
              <input
                type="text"
                required
                class="modal__input"
                id="modalGoalInput"
              />
            </div>
            <div class="modal__input-holder">
              <p class="modal__input-text">Description:</p>
              <input
                type="text"
                required
                class="modal__input"
                id="modalDescInput"
              />
            </div>
            <div class="modal__input-holder ">
              <p class="modal__input-text">Due date:</p>
              <input
                type="date"
                required
                class="modal__input"
                id="modalDateInput"
              />
            </div>
            <div
              class="modal__input-holder modal__input-holder--cardiologist"
            >
              <p class="modal__input-text">Pressure:</p>
              <input
                type="text"
                class="modal__input"
                id="modalPressureInput"
              />
            </div>
            <div
              class="modal__input-holder modal__input-holder--cardiologist" id="modal__input-holder--cardiologist"
            >
              <p class="modal__input-text">Mass index:</p>
              <input
                type="text"
                class="modal__input"
                id="modalMassInput"
              />
            </div>
            <div
              class="modal__input-holder modal__input-holder--cardiologist" id="modal__input-holder--cardiologist"
            >
              <p class="modal__input-text">Deseases:</p>
              <input
                type="text"
                class="modal__input"
                id="modalHeartInput"
              />
            </div>
            <div
              class="modal__input-holder modal__input-holder--cardiologist" id="modal__input-holder--cardiologist"
            >
              <p class="modal__input-text">Age:</p>
              <input
                type="text"
                class="modal__input"
                id="modalCardioAgeInput"
              />
            </div>
            <div class="modal__input-holder modal__input-holder--dentist" id="modal__input-holder--dentist">
              <p class="modal__input-text">Last visit:</p>
              <input
                type="date"
                class="modal__input"
                id="modalVisitInput"
              />
            </div>
            <div class="modal__input-holder modal__input-holder--therapist" id="modal__input-holder--therapist">
              <p class="modal__input-text">Age:</p>
              <input
                type="text"
                class="modal__input"
                id="modalTherapistAgeInput"
              />
            </div>
          </div>
          <div class="modal__button-holder">
            <button class="modal__form-submit" id="modalFormSubmit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>`;
    document.body.append(holders);
    
  document.addEventListener('change', function(e){
    if(e.target.classList.contains('modalDoctorInput')) {
     
      
      if(e.target.value === 'dentist'){
        const elements = document.getElementsByClassName("modal__input-holder--cardiologist");
      for (const e of elements) {
        e.style.display = e.style.display = 'none';
      }
        document.getElementById("modal__input-holder--dentist").style.display = 'flex';
        document.getElementById("modal__input-holder--therapist").style.display = 'none';
        
      }
      if(e.target.value === 'cardiologist'){
        const elements = document.getElementsByClassName("modal__input-holder--cardiologist");
      for (const e of elements) {
        e.style.display = e.style.display = 'flex';
      }
        document.getElementById("modal__input-holder--dentist").style.display = 'none';
        document.getElementById("modal__input-holder--therapist").style.display = 'none';
    }
      if(e.target.value === 'therapist'){
        const elements = document.getElementsByClassName("modal__input-holder--cardiologist");
      for (const e of elements) {
        e.style.display = e.style.display = 'none' ;
      }
        document.getElementById("modal__input-holder--dentist").style.display = 'none';
        document.getElementById("modal__input-holder--therapist").style.display = 'flex';
      }
      }	 
  });
  
      
  
  const close = document.getElementById(`modal__close`);
    close.onclick = () => {
      this.closeModal();
    };
  const submit = document.getElementById(`modalFormSubmit`);
  submit.onclick = (e) => {
    e.preventDefault();
      const names = document.getElementById("modalNameInput").value;
        const doctors = document.getElementById("modalDoctorInput").value;
        
        const importancys = document.getElementById("modalImportancyInput").value;
        const visitGoals = document.getElementById("modalGoalInput").value;
        const descriptions = document.getElementById("modalDescInput").value;
        const dueDates = document.getElementById("modalDateInput").value;
      if(doctors === 'dentist'){
        const lastVisits = document.getElementById("modalVisitInput").value;
      const Dantists = new VisitDentist (names, importancys, visitGoals, descriptions, dueDates, lastVisits);
      Dantists.post();
      this.closeModal();
    }else if(doctors === 'cardiologist'){
      const pressures = document.getElementById("modalPressureInput").value;
      const massIndexs = document.getElementById("modalMassInput").value;
      const heartDeseasess = document.getElementById("modalHeartInput").value;
      const cardioAges = document.getElementById("modalCardioAgeInput").value;
      const Cardio = new VisitCardiologist (names, importancys, visitGoals, descriptions, dueDates,  pressures, massIndexs,heartDeseasess, cardioAges);
      Cardio.post();
      this.closeModal();
    }else if(doctors === 'therapist'){
      
      const therapistAges = document.getElementById("modalTherapistAgeInput").value;
     
      const Therapevt = new VisitTherapist (names, importancys, visitGoals, descriptions, dueDates, therapistAges);
      Therapevt.post();
      this.closeModal();
    }
    };

    return holders;
  }
  createModal() {
    const modal = this.createRender();
    document.body.append(modal);
    document.body.style.overflow = "hidden";
  }
  async post() {
    if (
      document.getElementById("modalEmailInput").value !== "" &&
      document.getElementById("modalPassInput").value !== ""
    ) {
      return await axios({
        url: "https://ajax.test-danit.com/api/v2/cards/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: document.getElementById("modalEmailInput").value,
          password: document.getElementById("modalPassInput").value,
        },
      }).catch(function (e) {
        document.querySelectorAll(".modal__input").forEach((item) => {
          item.style.borderBottom = "1px solid red";
        });
      });
    }
  }
  closeModal() {
    const modal = document.getElementById("modalRoot");
    modal.remove();
    document.body.style.overflow = "visible";
  }
}
