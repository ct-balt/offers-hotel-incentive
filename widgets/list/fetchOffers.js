function fetchOffers(offers) {}

const generatePayload = (offers) => {
  const payload = {
    searchCriterias: {
      flightType: 2,
      reservationType: 1,
      beginDates: ["2025-08-23"],
      datePickerMode: 0,
      nights: [
        {
          value: 9,
        },
        {
          value: 11,
        },
        {
          value: 12,
        },
      ],
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
      departureLocations: [
        {
          id: 9239 - 5,
          type: 5,
          name: Vilnius,
          friendlyUrl: vilnius,
        },
      ],
      arrivalLocations: [
        {
          id: 5 - 3,
          type: 3,
          name: Antalija,
          friendlyUrl: antalija,
          parent: {
            id: 1,
            type: 0,
            name: Turkija,
            countryId: 1 - 0,
          },
        },
      ],
      paging: {
        hasPreviousPage: false,
        hasNextPage: false,
        pageNumber: 1,
        pageSize: 20,
        sortType: 0,
      },
      imageSizes: [4],
      additionalFilters: [
        {
          type: 2,
          values: [
            {
              id: 4,
              value: 4,
            },
          ],
          providers: [],
        },
      ],
    },
    notIncludeFilters: false,
    searchSource: 2,
    getOnlyTopHotels: false,
    dontSearchTopHotels: true,
  };
};
