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
    const holders= new Div("page__modal-holder").create();
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
  submit.onclick = () => {
    console.log('FUCK');
      const names = document.getElementById("modalNameInput").value;
        const doctors = document.getElementById("modalDoctorInput").value;
        const importancys = document.getElementById("modalImportancyInput").value;
        const visitGoals = document.getElementById("modalGoalInput").value;
        const descriptions = document.getElementById("modalDescInput").value;
        const dueDates = document.getElementById("modalDateInput").value;
      if(document.getElementById("modalDoctorInput").value === 'dentist'){
        const lastVisits = document.getElementById("modalVisitInput").value;
      const Dantist = new VisitDentist (names, importancys, visitGoals, descriptions, dueDates, lastVisits);
      Dantist.post();
    }else
    if(document.getElementById("modalDoctorInput").value === 'cardiologist'){
      const pressures = document.getElementById("modalPressureInput").value;
      const massIndexs = document.getElementById("modalMassInput").value;
      const heartDeseasess = document.getElementById("modalHeartInput").value;
      const cardioAges = document.getElementById("modalCardioAgeInput").value;
      const Cardio = new VisitCardiologist (names, importancys, visitGoals, descriptions, dueDates,  pressures, massIndexs,heartDeseasess, cardioAges);
      Cardio.post();
    }else
    if(document.getElementById("modalDoctorInput").value === 'therapist'){
      const therapistAges = document.getElementById("modalTherapistAgeInput").value;
      const Therap = new VisitTherapist (names, importancys, visitGoals, descriptions, dueDates, therapistAges);
      Therap.post();
    }
    };
  
  return holders;
  }
  createRender1() {
    const holder = new Div("page__modal-holder").create();
    holder.id = "modalRoots";
    const modalWindow = new Div("page__modal-window modal").create();
    holder.append(modalWindow);
    const header = new Div("modal__header").create();
    const pass1 = new Div("modal__input-holder").create();
    const passText1 = new Select().create();
    pass1.append(passText1);
    const close = new H("h4", "modal__close", "&times;").create();
    close.onclick = () => {
      this.closeModal();
    };
    header.append(pass1, close);
    const content = new Div("modal__content").create();
    modalWindow.append(header, content);
    const form = new Form("modal__form").create();
    content.append(form);
    const shortInfo = new Div("modal__short-info").create();
    form.append(shortInfo);


    const target = new Div("modal__input-holder").create();
    shortInfo.append(target);
    const targetText = new P("modal__input-text", "Цель визита:").create();
    const targetInput = new Input(
      "target",
      "modal__input",
      true,
      "modalTargetInput"
    ).create();
    target.append(targetText, targetInput);

    const shortDiscr = new Div("modal__input-holder").create();
    shortInfo.append(shortDiscr);
    const discrText = new P("modal__input-text", "Описание визита:").create();
    const discrInput = new Input(
      "discription",
      "modal__input",
      true,
      "modalDscriptionInput"
    ).create();
    shortDiscr.append(discrText, discrInput);

    const urgency = new Div("modal__input-holder").create();
    shortInfo.append(urgency);
    const urgencyText = new P("modal__input-text", "Срочность визита:").create();
    const urgencySelect = document.createElement("select");
    urgencySelect.className = 'modal__select';
    const optionDentist = document.createElement("option");
    optionDentist.textContent = 'Обычная';
    optionDentist.value = 'normal';
    const optionCardiolog = document.createElement("option");
    optionCardiolog.textContent = 'Приоритетная';
    optionCardiolog.value = 'private';
    const optionTerapevt = document.createElement("option");
    optionTerapevt.textContent = 'Неотложная';
    optionTerapevt.value = 'high';
    urgencySelect.append(optionDentist,optionCardiolog,optionTerapevt);
    urgency.append(urgencyText, urgencySelect);
    

    document.addEventListener('change', function(e){
      if(e.target.classList.contains('selector')) {
        if(e.target.value === 'Dantist'){console.log('Dantist');
        const fio = new Div("modal__input-holder").create();
        shortInfo.append(fio);
        const fioText = new P("modal__input-text", "ФИО:").create();
        const fioInput = new Input(
          "fio",
          "modal__input",
          true,
          "modalFioInput"
        ).create();
        fio.append(fioText, fioInput);}
        if(e.target.value === 'Cardiolog'){console.log('Cardiolog');}
        if(e.target.value === 'Terapevt'){console.log('Terapevt');}
        }	 
    });
    
    

    const pressure = new Div("modal__input-holder").create();
    shortInfo.append(pressure);
    const pressureText = new P("modal__input-text", "Обычное давление:").create();
    const pressureInput = new Input(
      "pressure",
      "modal__input",
      true,
      "modalPressureInput"
    ).create();
    pressure.append(pressureText, pressureInput);

    const indexMas = new Div("modal__input-holder").create();
    shortInfo.append(indexMas);
    const indexMasText = new P("modal__input-text", "Индекс массы тела:").create();
    const indexMasInput = new Input(
      "indexMas",
      "modal__input",
      true,
      "modalindexMasInput"
    ).create();
    indexMas.append(indexMasText, indexMasInput);
    

    const diseases = new Div("modal__input-holder").create();
    shortInfo.append(diseases);
    const diseasesText = new P("modal__input-text", "Перенесенные заболевания:").create();
    const diseasesInput = new Input(
      "diseases",
      "modal__input",
      true,
      "modalDiseasesInput"
    ).create();
    diseases.append(diseasesText, diseasesInput);

    const age = new Div("modal__input-holder").create();
    shortInfo.append(age);
    const ageText = new P("modal__input-text", "Возраст:").create();
    const ageInput = new Input(
      "age",
      "modal__input",
      true,
      "modalAgeInput"
    ).create();
    age.append(ageText, ageInput);

    const dateDan = new Div("modal__input-holder").create();
    shortInfo.append(dateDan);
    const dateDanText = new P("modal__input-text", "Дата последнего визита:").create();
    const dateDanInput = new Input(
      "dateDan",
      "modal__input",
      true,
      "modalDateDanInput"
    ).create();
    dateDan.append(dateDanText, dateDanInput);


    const buttonSubmit = new Div("modal__button-holder").create();
    form.append(buttonSubmit);
    const submit = new ButtonToken(
      "modal__form-submit",
      "Submit",
      "modalFormSubmit",
      this.post
    ).create();
    buttonSubmit.append(submit);
    return holder;
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
