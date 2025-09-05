function searchNextAvailableDate() {
  showFallbackBanner();

  const dateItems = document.querySelectorAll(".date-items .date");

  for (let i = 0; i < dateItems.length; i++) {
    if (dateItems[i].classList.contains("selected")) {
      if (i < dateItems.length - 1) {
        dateItems[i].classList.remove("selected");
        dateItems[i + 1].classList.add("selected");

        setTimeout(() => {
          updateSelectedValues({ date: dateItems[i + 1].dataset.date });
        }, 2000);
      } else {
        hideBanner("fallback");
        return 0;
      }
      break;
    }
  }
}

const generateFallbackOffers = async () => {
  const payload = generateFallbackPayload();

  try {
    const response = await callApi(
      "https://www.coraltravel.lt/endpoints/PackageTourHotelProduct/PriceSearchEncrypt",
      payload
    );

    return response;
  } catch (error) {
    return null;
  }
};

const generateFallbackPayload = () => {
  const arrival = getDestination();
  const departure = getDepartureLocation();
  const dates = getBeginDates();
  const nights = [{ value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }];

  const payload = {
    beginDates: dates,
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
      pageNumber: 1,
      pageSize: 20,
      sortType: 0,
    },
    additionalFilters: [],
    imageSizes: [4],
  };

  return payload;
};

const getDestination = () => {
  const selectedDestination = getDestinationObj();

  return [
    {
      id: selectedDestination.id,
      type: selectedDestination.type,
      name: selectedDestination.name,
      friendlyUrl: selectedDestination.friendlyUrl,
    },
  ];
};

const getBeginDates = () => {
  const today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();

  const getLastDayOfMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const lastDayOfCurrentMonth = getLastDayOfMonth(currentYear, currentMonth);
  const remainingDays = lastDayOfCurrentMonth - today.getDate();

  let targetMonth = currentMonth;
  let targetYear = currentYear;

  if (remainingDays <= 10) {
    targetMonth++;
    if (targetMonth > 11) {
      targetMonth = 0;
      targetYear++;
    }
  }

  const lastDayOfTargetMonth = getLastDayOfMonth(targetYear, targetMonth);

  const pad = (n) => String(n).padStart(2, "0");

  return [
    `${targetYear}-${pad(targetMonth + 1)}-01T00:00:00Z`,
    `${targetYear}-${pad(targetMonth + 1)}-${pad(
      lastDayOfTargetMonth
    )}T00:00:00Z`,
  ];
};
