// const { Visit } = require("./classes.js");
class Visit {
  constructor(id, name, doctor, importancy, goal, description, date) {
    this.name = name;
    this.doctor = doctor;
    this.importancy = importancy;
    this.goal = goal;
    this.description = description;
    this.date = date;
    this.id = id;
  }
  async post() {
    let response = await axios({
      method: "post",
      url: "https://ajax.test-danit.com/api/v2/cards",
      data: {
        title: "Визит к кардиологу",
        description: "Плановый визит",
        doctor: "Cardiologist",
        bp: "24",
        age: 23,
        weight: 70,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 04a749a6-0cb8-43ca-9511-6bc6d5fa9396`,
      },
    });
    this.description = response.data.description;
    this.id = response.data.id;
    console.log(response);
    console.log(this.description);
  }
  render() {}
  edit() {}
  delete() {}
  async get: description{
      let response = await axios.get("https://ajax.test-danit.com/api/v2/cards"+this.id);
      return response.data.description;
  }
}
const test = new Visit();
test.post();
