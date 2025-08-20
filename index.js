let offersObj;

let selectedDestination;
let selectedDeparture;
let selectedDate;

let selectedDestinationValue;
let selectedDepartureValue;

function init(offers) {
  console.log(offers);
  offersObj = offers;
  fetchOffers(offers);
  loadAvailableCountries();
  loadAvailableDates();
}

function loadAvailableCountries() {
  const destinations = offersObj.destinations.map(
    (dest) => dest.destinationDisplayName
  );

  const lowercasedDestinations = offersObj.destinations.map((d) =>
    d.destinationDisplayName.toLowerCase()
  );

  listDestinations(destinations, lowercasedDestinations);

  loadAvailableDepartures();

  console.log("destinations", destinations);
}

function loadAvailableDepartures() {
  const matched = offersObj.destinations.find(
    (dest) => dest.destinationDisplayName === selectedDestination
  );

  const allDepartures = matched.destination.flatMap((city) => {
    const displayNames = city.departures?.displayName || [];
    const names = city.departures?.name || [];

    return displayNames.map((displayName, i) => ({
      displayName,
      name: names[i] || null,
    }));
  });

  const uniqueDepartures = allDepartures.filter(
    (dep, index, self) => index === self.findIndex((d) => d.name === dep.name)
  );

  const departureDisplayNames = uniqueDepartures.map((d) => d.displayName);
  const departureValues = uniqueDepartures.map((d) => d.name);

  listDepartures(departureDisplayNames, departureValues);
}

function loadAvailableDates() {
  const matchedDestination = offersObj.destinations.find(
    (dest) => dest.destinationDisplayName === selectedDestination
  );
  console.log(matchedDestination);
  const dates = getAvailableDates(matchedDestination.destination);
  const allDates = dates.flatMap((city) => city.availableDates);

  const uniqueDates = [...new Set(allDates)];

  listDates(uniqueDates);
}
