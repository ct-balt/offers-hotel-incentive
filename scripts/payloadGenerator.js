const generatePayload = () => {
  const departure = getDepartureLocation();
  const arrival = getDestinationLocation();
  const nights = getStayNights();

  const payload = {
    searchCriterias: {
      flightType: 2,
      reservationType: 1,
      beginDates: [selectedValues.date],
      datePickerMode: 0,
      nights: nights,
      roomCriterias: [
        {
          passengers: [
            {
              passengerType: 0,
              age: 20,
            },
            {
              passengerType: 0,
              age: 20,
            },
          ],
        },
      ],
      departureLocations: departure,
      arrivalLocations: arrival,
      paging: {
        hasPreviousPage: false,
        hasNextPage: false,
        pageNumber: 1,
        pageSize: 20,
        sortType: 0,
      },
      imageSizes: [4],
      additionalFilters: [],
    },
    notIncludeFilters: false,
    searchSource: 2,
    getOnlyTopHotels: false,
    dontSearchTopHotels: true,
  };

  return payload;
};

const getDepartureLocation = () =>
  departuresConstants.find(
    (departure) => departure.friendlyUrl === selectedValues.departure
  );

const getDestinationObj = () =>
  destinationsConstants.find(
    (destination) => destination.friendlyUrl === selectedValues.destination
  );

const getDestinationLocation = () => {
  const destinationObj = getDestinationObj();

  if (!destinationObj.children) {
    return {
      id: destinationObj.id,
      type: destinationObj.type,
      name: destinationObj.name,
      friendlyUrl: destinationObj.friendlyUrl,
    };
  }
  const offerCityNames =
    offers.destinations
      .find(
        (dest) =>
          dest.destinationDisplayName.toLowerCase() ===
          destinationObj.friendlyUrl
      )
      ?.destination.map((d) => d.name) || [];

  const matchingChildren = destinationObj.children.filter((child) =>
    offerCityNames.includes(child.friendlyUrl)
  );

  const destination = matchingChildren.map((child) => ({
    ...child,
    parent: {
      id: destinationObj.id,
      type: destinationObj.type,
      name: destinationObj.name,
      friendlyUrl: destinationObj.friendlyUrl,
    },
  }));

  return destination;
};

const getStayNights = () => {
  const { destination, date } = selectedValues;

  const country = offersObj.destinations.find(
    (c) => c.destinationDisplayName.toLowerCase() === destination
  );

  const allStayNights = country.destination.flatMap((city) => {
    return city.beginDates
      .filter((beginDate) => beginDate.date === date)
      .flatMap((beginDate) => beginDate.stayNights);
  });

  const allUniqueStayNights = allStayNights.filter(
    (stayNight, index, self) =>
      index === self.findIndex((sn) => sn.value === stayNight.value)
  );

  allUniqueStayNights.sort((a, b) => a.value - b.value);

  if (allUniqueStayNights.length >= 8) {
    allUniqueStayNights.length = 8;
  }

  return allUniqueStayNights;
};
