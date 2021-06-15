const form = document.querySelector(".modal__form");
const submit = form[12];

console.dir(form);
submit.addEventListener("click", (evt) => {
  evt.preventDefault();
  const visit = new Visit(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].value,
    form[4].value,
    form[5].value
  );
  visit.post();
});
