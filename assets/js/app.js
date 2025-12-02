const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
const cardTitles = document.querySelectorAll(".card--title");
const currentTimes = document.querySelectorAll(".card--time");
const pastTimes = document.querySelectorAll(".card--detail");

//events
dailyBtn.addEventListener("click", add);
weeklyBtn.addEventListener("click", add);
monthlyBtn.addEventListener("click", add);

// function
function add(e) {
  dailyBtn.classList.remove("selected");
  weeklyBtn.classList.remove("selected");
  monthlyBtn.classList.remove("selected");
  e.target.classList.add("selected");

  getData();
}

//! dont look at this code XD
async function getData() {
  const url = "../../data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response is not ok : ${!response.status}`);
    }

    const result = await response.json();
    result.forEach((data) => {
      if (dailyBtn.classList.contains("selected")) {
        currentTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataCurrent = data.timeframes.daily.current;
            card.dataset.id === id
              ? (card.textContent = `${String(dataCurrent)}hrs`)
              : "";
          }
        });
        pastTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataPrevious = data.timeframes.daily.previous;
            card.dataset.id === id
              ? (card.textContent = `Last Week ${String(dataPrevious)}hrs`)
              : "";
          }
        });
      }
      if (weeklyBtn.classList.contains("selected")) {
        currentTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataCurrent = data.timeframes.weekly.current;
            card.dataset.id === id
              ? (card.textContent = `${String(dataCurrent)}hrs`)
              : "";
          }
        });
        pastTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataPrevious = data.timeframes.weekly.previous;
            card.dataset.id === id
              ? (card.textContent = `Last Week ${String(dataPrevious)}hrs`)
              : "";
          }
        });
      }
    });
    result.forEach((data) => {
      // daily
      if (dailyBtn.classList.contains("selected")) {
        currentTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataCurrent = data.timeframes.daily.current;
            card.dataset.id === id
              ? (card.textContent = `${String(dataCurrent)}hrs`)
              : "";
          }
        });
        pastTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataPrevious = data.timeframes.daily.previous;
            card.dataset.id === id
              ? (card.textContent = `Last Week ${String(dataPrevious)}hrs`)
              : "";
          }
        });
      }

      // weekly
      if (weeklyBtn.classList.contains("selected")) {
        currentTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataCurrent = data.timeframes.weekly.current;
            card.dataset.id === id
              ? (card.textContent = `${String(dataCurrent)}hrs`)
              : "";
          }
        });
        pastTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataPrevious = data.timeframes.weekly.previous;
            card.dataset.id === id
              ? (card.textContent = `Last Week ${String(dataPrevious)}hrs`)
              : "";
          }
        });
      }

      //monthly
      if (monthlyBtn.classList.contains("selected")) {
        currentTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataCurrent = data.timeframes.monthly.current;
            card.dataset.id === id
              ? (card.textContent = `${String(dataCurrent)}hrs`)
              : "";
          }
        });
        pastTimes.forEach((card) => {
          const id = card.dataset.id;
          if (id === data.title) {
            const dataPrevious = data.timeframes.monthly.previous;
            card.dataset.id === id
              ? (card.textContent = `Last Week ${String(dataPrevious)}hrs`)
              : "";
          }
        });
      }
    });
  } catch (err) {
    console.error(err.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getData();
});
