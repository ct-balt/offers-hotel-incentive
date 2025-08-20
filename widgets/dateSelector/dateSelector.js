function listDates(dates) {
  const dateSelectorDiv = document.querySelector(".date-items");
  dateSelectorDiv.innerHTML = "";

  dates.map((date) => {
    const dateButton = document.createElement("button");
    dateButton.type = "button";
    dateButton.className = "date";
    dateButton.textContent = date;
    dateButton.dataset.date = date;

    dateSelectorDiv.appendChild(dateButton);
  });

  dateSelectorDiv.firstElementChild.classList.add("selected");

  setSelectedDate(dateSelectorDiv.firstElementChild.dataset.date);

  attachButtonsListener("date", "date", setSelectedDate);
}

const getAvailableDates = (destinations) => {
  const today = getCurrentDate();

  const filteredDestinations = destinations.filter((dest) =>
    dest.departures?.name.includes(selectedDepartureValue)
  );

  return filteredDestinations.map((city) => {
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
