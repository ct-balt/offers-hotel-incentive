function attachButtonsListener(selector, datasetSelector, func) {
  const buttons = document.querySelectorAll(`.${selector}`);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("selected")) return;

      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      func(button.dataset[datasetSelector], button.dataset[selector]);
    });
  });
}

function setSelectedDestination(text, value) {
  selectedDestination = text;

  updateSelectedValues({ destination: value });

  loadAvailableDepartures();
  loadAvailableDates();
}

function setSelectedDeparture(text, value) {
  selectedDeparture = text;

  updateSelectedValues({ departure: value });

  changeDepartureItem();
  loadAvailableDates();
}

function setSelectedDate(value) {
  updateSelectedValues({ date: value });
}

let fetchOffersTimeout;

function updateSelectedValues(newValues = {}) {
  selectedValues = {
    ...selectedValues,
    ...newValues,
  };

  clearTimeout(fetchOffersTimeout);

  fetchOffersTimeout = setTimeout(() => {
    fetchOffers();

    const offersIncentiveElement = document.querySelector(".offers-incentive");
    if (offersIncentiveElement) {
      offersIncentiveElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);
}

function changeDepartureItem() {
  const deparSelectorBtn = document.querySelector(".departure-selector span");
  deparSelectorBtn.innerHTML = `iš ${selectedDeparture}`;
}

function removeListOffers() {
  const offersDiv = document.querySelectorAll(".list");
  offersDiv.forEach((div) => div.remove());
}
