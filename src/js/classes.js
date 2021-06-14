// export class Visit {
//   constructor(name, doctor, importancy, goal, description, date) {
//     this.name = name;
//     this.doctor = doctor;
//     this.importancy = importancy;
//     this.goal = goal;
//     this.description = description;
//     this.date = date;
//   }
//   async post() {
//     let response = await axios.post(
//       "https://ajax.test-danit.com/api/v2/cards",
//       {
//         data: {
//           title: "Визит к кардиологу",
//           description: "Плановый визит",
//           doctor: "Cardiologist",
//           bp: "24",
//           age: 23,
//           weight: 70,
//         },
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 04a749a6-0cb8-43ca-9511-6bc6d5fa9396`,
//         },
//       }
//     );
//     console.log(response);
//   }
//   render() {}
//   edit() {}
//   delete() {}
// }
// export class Therapist extends Visit{
//     constructor(){
//         super(){

//         }
//     }
// }
// export class Cardiologist extends Therapist{
//     constructor(){
//         super(){

//         }
//     }
// }
