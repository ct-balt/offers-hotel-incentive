let offersObj;

let selectedDestination;
let selectedDeparture;
let selectedDate;

let selectedValues = {
  destination: null,
  departure: null,
  date: null,
  filters: null,
};

let viewAllUrl = null;

function init(offers) {
  offersObj = offers;
  loadAvailableCountries();
  loadAvailableDepartures();
  loadAvailableDates();
  loadHotelCategory();
}

function loadAvailableCountries() {
  const today = getCurrentDate();

  const validDestinations = offersObj.destinations.filter((dest) => {
    const hasValidDate = dest.destination.some((city) =>
      city.beginDates.some((dateObj) => dateObj.date > today),
    );
    return hasValidDate;
  });

  const destinations = validDestinations.map(
    (dest) => dest.destinationDisplayName,
  );

  const lowercasedDestinations = validDestinations.map((d) =>
    d.destinationDisplayName.toLowerCase(),
  );

  listDestinations(destinations, lowercasedDestinations);
}

function loadAvailableDepartures() {
  const matched = offersObj.destinations.find(
    (dest) => dest.destinationDisplayName === selectedDestination,
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
    (dep, index, self) => index === self.findIndex((d) => d.name === dep.name),
  );

  const departureDisplayNames = uniqueDepartures.map((d) => d.displayName);
  const departureValues = uniqueDepartures.map((d) => d.name);

  listDepartures(departureDisplayNames, departureValues);
}

function loadAvailableDates() {
  const matchedDestination = offersObj.destinations.find(
    (dest) => dest.destinationDisplayName === selectedDestination,
  );

  const dates = getAvailableDates(matchedDestination.destination);
  const allDates = dates.flatMap((city) => city.availableDates);

  const uniqueDates = [...new Set(allDates)].sort();

  if (uniqueDates.length > 0) {
    listDates(uniqueDates);
  }
}
