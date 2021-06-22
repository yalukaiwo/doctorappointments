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
    login.style.display = "none";
    create.style.display = "block";
  }
}
