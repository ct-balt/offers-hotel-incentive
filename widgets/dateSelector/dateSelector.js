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
