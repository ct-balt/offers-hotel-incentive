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
  selectedDestinationValue = value;

  updateSelectedValues();

  loadAvailableDepartures();
  loadAvailableDates();
}

function setSelectedDeparture(text, value) {
  selectedDeparture = text;
  selectedDepartureValue = value;

  updateSelectedValues();

  changeDepartureItem();
  loadAvailableDates();
}

function setSelectedDate(value) {
  selectedDate = value;

  updateSelectedValues();
}

let fetchOffersTimeout;

function updateSelectedValues() {
  selectedValues = {
    destination: selectedDestinationValue,
    departure: selectedDepartureValue,
    date: selectedDate,
  };

  clearTimeout(fetchOffersTimeout);

  fetchOffersTimeout = setTimeout(() => {
    fetchOffers();
  }, 100);
}

function changeDepartureItem() {
  const deparSelectorBtn = document.querySelector(".departure-selector span");
  deparSelectorBtn.innerHTML = `iš ${selectedDeparture}`;

  const deparSelectorDiv = document.querySelector(".departure-list");
  deparSelectorDiv.classList.toggle("open");
}
