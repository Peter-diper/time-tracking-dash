const cards = document.querySelectorAll(".card");
const btns = document.querySelectorAll(".set--time");

async function getData() {
  const response = await fetch("data.json");
  const result = await response.json();

  cards.forEach((card) => {
    const cardTitle = card.querySelector(".card--title");
    const cardDateNow = card.querySelector(".card--time");
    const cardPreviuse = card.querySelector(".card--detail");

    const fetchData = result.find(
      (data) => data.title === cardTitle.textContent
    ).timeframes;
    console.log(fetchData);

    btns.forEach((btn) => {
      const btnId = btn.dataset.btnValue;
      const isSelected = btn.classList.contains("selected");
      btn.addEventListener("click", addActive);
      if (isSelected) {
        cardDateNow.textContent = fetchData[btnId].current + "hr";

        switch (btnId) {
          case "daily": {
            cardPreviuse.textContent = `Last Day ${fetchData[btnId].previous}`;
            break;
          }
          case "weekly": {
            cardPreviuse.textContent = `Last Week ${fetchData[btnId].previous}`;
            break;
          }
          case "monthly": {
            cardPreviuse.textContent = `Last Month ${fetchData[btnId].previous}`;
            break;
          }
        }
      }
    });
  });
}
getData();

function addActive(e) {
  btns.forEach((btn) => {
    btn.classList.remove("selected");
  });
  getData();
  e.target.classList.add("selected");
}
