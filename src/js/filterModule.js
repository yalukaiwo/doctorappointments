const cardHolder = document.getElementById("cardRoot"),
  nameInput = document.getElementById("nameFilterInput"),
  statusInput = document.getElementById("statusFilterSelect"),
  importancyInput = document.getElementById("importanceFilterSelect");

function filterCards(card) {
  let count = 0;
  const name =
      card.children[0].children[0].children[0].textContent.toLowerCase(),
    date = card.children[0].children[2].children[3].children[1].textContent
      .toLowerCase()
      .split("-"),
    importance =
      card.children[0].children[2].children[0].children[1].textContent.toLowerCase(),
    today = new Date();
  let status;
  if (parseInt(today.getYear()) + 1900 > parseInt(date[2])) {
    status = "done";
  } else if (parseInt(today.getYear()) + 1900 < parseInt(date[2])) {
    status = "open";
  } else if (parseInt(today.getMonth()) > parseInt(date[1]) - 1) {
    status = "done";
  } else if (parseInt(today.getMonth()) < parseInt(date[1]) - 1) {
    status = "open";
  } else if (parseInt(today.getDate()) >= parseInt(date[0])) {
    status = "done";
  } else if (parseInt(today.getDate()) < parseInt(date[0])) {
    status = "open";
  } else {
    status = "open";
  }
  if (
    name.includes(nameInput.value.trim()) &&
    status.includes(statusInput.value) &&
    importance.includes(importancyInput.value)
  ) {
    card.style.display = "block";
    const text1 = document.getElementById("nothingFoundCards");
    text1.style.display = "none";
  } else {
    card.style.display = "none";
    count += 1;
  }
  return count;
}
nameInput.addEventListener("input", () => {
  const cardsList = document.querySelectorAll(".cards__card");
  let numCount = 0;
  cardsList.forEach((card) => {
    numCount += filterCards(card);
    if (numCount === cardsList.length && numCount !== 0) {
      const text1 = document.getElementById("nothingFoundCards");
      text1.style.display = "block";
    }
  });
});

statusInput.onchange = () => {
  const cardsList = document.querySelectorAll(".cards__card");
  let numCount = 0;
  cardsList.forEach((card) => {
    numCount += filterCards(card);
    if (numCount === cardsList.length && numCount !== 0) {
      const text1 = document.getElementById("nothingFoundCards");
      text1.style.display = "block";
    }
  });
};

importancyInput.onchange = () => {
  const cardsList = document.querySelectorAll(".cards__card");
  let numCount = 0;
  cardsList.forEach((card) => {
    numCount += filterCards(card);
    if (numCount === cardsList.length && numCount !== 0) {
      const text1 = document.getElementById("nothingFoundCards");
      text1.style.display = "block";
    }
  });
};
