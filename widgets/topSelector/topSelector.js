function listDestinations(destinations, values) {
  const destSelectorDiv = document.querySelector(".destination-selector");

  destinations.map((dest, index) => {
    const destButton = document.createElement("button");
    destButton.type = "button";
    destButton.className = "destination";
    destButton.textContent = dest;
    destButton.dataset.text = dest;
    destButton.dataset.destination = values[index];

    destSelectorDiv.appendChild(destButton);
  });

  destSelectorDiv.firstElementChild.classList.add("selected");

  setSelectedDestination(
    destSelectorDiv.firstElementChild.textContent,
    destSelectorDiv.firstElementChild.dataset.destination
  );

  attachButtonsListener("destination", "text", setSelectedDestination);
}

function listDepartures(departures, values) {
  const deparSelectorDiv = document.querySelector(".departure-list");
  deparSelectorDiv.innerHTML = "";
  deparSelectorDiv.classList.toggle("open");

  departures.map((depar, index) => {
    const deparButton = document.createElement("button");
    deparButton.type = "button";
    deparButton.className = "departure";
    deparButton.textContent = depar;
    deparButton.dataset.text = depar;
    deparButton.dataset.departure = values[index];

    deparSelectorDiv.appendChild(deparButton);
  });

  deparSelectorDiv.firstElementChild.classList.add("selected");

  setSelectedDeparture(
    deparSelectorDiv.firstElementChild.textContent,
    deparSelectorDiv.firstElementChild.dataset.departure
  );

  attachButtonsListener("departure", "text", setSelectedDeparture);
}

document.addEventListener("click", (e) => {
  const deparSelectorDiv = document.querySelector(
    ".departure-selector-wrapper"
  );

  const isClickOnSelector = e.target.closest(".departure-selector");

  if (isClickOnSelector) {
    deparSelectorDiv.classList.toggle("open");
  } else if (deparSelectorDiv.classList.contains("open")) {
    deparSelectorDiv.classList.remove("open");
  }
});
