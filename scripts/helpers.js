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
  console.log(
    "selected destination",
    selectedDestination,
    selectedDestinationValue
  );

  //selectedDestinationObj =
  loadAvailableDepartures();
  loadAvailableDates();
  //fetch offers
}

function setSelectedDeparture(text, value) {
  selectedDeparture = text;
  selectedDepartureValue = value;

  changeDepartureItem();
  console.log("selected departure", selectedDeparture, selectedDepartureValue);
  //fetch offers
}

function setSelectedDate(value) {
  selectedDate = value;

  console.log("selected date", selectedDate);
}

function changeDepartureItem() {
  const deparSelectorBtn = document.querySelector(".departure-selector span");
  deparSelectorBtn.innerHTML = `iš ${selectedDeparture}`;

  const deparSelectorDiv = document.querySelector(".departure-list");
  deparSelectorDiv.classList.toggle("open");
}

const getAvailableDates = (destinations) => {
  const today = getCurrentDate();

  return destinations.map((city) => {
    const availableDates = city.beginDates
      .map((d) => d.date)
      .filter((dateStr) => dateStr > today);

    return {
      name: city.name,
      availableDates,
    };
  });
};

const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};
