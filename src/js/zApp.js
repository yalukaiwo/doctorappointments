<<<<<<< HEAD
const form = document.querySelector(".modal__form");
const submit = document.getElementById("modalFormSubmit");

console.dir(form);
// submit.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   const visit = new Visit(
//     form[0].value,
//     form[1].value,
//     form[2].value,
//     form[3].value,
//     form[4].value,
//     form[5].value
//   );
//   visit.post();
// });
const visit = new Cardiologist(123, 123, 412, 124, 12, 142, 124, 124, 124, 24);
visit.post();
// visit.render();
=======
const visit = new Cardiologist(123, 123, 412, 124, 12, 142, 124, 124, 124, 24);
visit.post();
>>>>>>> dev
