const generatePayloadPriceSearchEncrypt = () => {
  const departure = getDepartureLocation();
  const arrival = getDestinationLocation();
  const nights = getStayNights();

  const payload = {
    beginDates: [selectedValues.date],
    arrivalLocations: arrival,
    departureLocations: [departure],
    nights: nights,
    datePickerMode: 0,
    roomCriterias: [
      {
        passengers: [
          {
            age: 20,
            passengerType: 0,
          },
          {
            age: 20,
            passengerType: 0,
          },
        ],
      },
    ],
    reservationType: 1,
    paging: {
      pageNumber: activePageNumber,
      pageSize: 20,
      sortType: 0,
    },
    additionalFilters: [],
    imageSizes: [4],
  };

  return payload;
};

const generatePayloadPriceSearchList = (priceSearchEncryptResponse) => {
  const payload = {
    queryParam: priceSearchEncryptResponse.result.queryParam,
    notIncludeFilters: false,
    searchSource: 0,
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
  console.log("destinationobj", destinationObj);

  if (!destinationObj.children) {
    if (destinationObj.country === "juodkalnija") {
      const additionalValues = destinationsConstants.find(
        (destination) => destination.friendlyUrl === "kroatija"
      );
      return [
        {
          id: destinationObj.id,
          type: destinationObj.type,
          name: destinationObj.name,
          friendlyUrl: destinationObj.friendlyUrl,
        },
        {
          id: additionalValues.id,
          type: additionalValues.type,
          name: additionalValues.name,
          friendlyUrl: additionalValues.friendlyUrl,
        },
      ];
    } else {
      return [
        {
          id: destinationObj.id,
          type: destinationObj.type,
          name: destinationObj.name,
          friendlyUrl: destinationObj.friendlyUrl,
        },
      ];
    }
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
