class Div {
  constructor(classList) {
    this.classList = classList;
  }
  create() {
    const div = document.createElement("div");
    div.classList = this.classList;
    return div;
  }
}

class H {
  constructor(type, classList, text) {
    this.type = type;
    this.classList = classList;
    this.text = text;
  }
  create() {
    const h = document.createElement(this.type);
    h.classList = this.classList;
    h.innerHTML = this.text;
    return h;
  }
}

class Form {
  constructor(classList) {
    this.classList = classList;
  }
  create() {
    const form = document.createElement("form");
    form.classList = this.classList;
    return form;
  }
}

class P {
  constructor(classList, text) {
    this.classList = classList;
    this.text = text;
  }
  create() {
    const p = document.createElement("p");
    p.classList = this.classList;
    p.innerHTML = this.text;
    return p;
  }
}

class Input {
  constructor(type, classList, isRequired, id) {
    this.type = type;
    this.classList = classList;
    this.isRequired = isRequired;
    this.id = id;
  }
  create() {
    const input = document.createElement("input");
    input.id = this.id;
    input.classList = this.classList;
    input.required = this.isRequired;
    input.type = this.type;
    return input;
  }
}
class ButtonToken {
  constructor(classList, text, id, callback) {
    this.classList = classList;
    this.text = text;
    this.id = id;
    this.callback = callback;
  }
  create() {
    const button = document.createElement("button");
    button.classList = this.classList;
    button.id = this.id;
    button.innerHTML = this.text;
    button.onclick = async (e) => {
      e.preventDefault();
      const token = await this.callback();
      if (token) {
        TOKEN = token.data;
        const modal = new Modal();
        modal.closeModal();
        const renderAll = new AllVisits();
        renderAll.render();
      }
    };
    return button;
  }
}
