function removeFilters() {
  removeSelectedHotelCategory();

  updateSelectedValues();
}

function applyFilters() {
  const hotelCategory = setSelectedHotelCategory();

  const values = [hotelCategory];

  const nonEmptyValues = values.filter(
    (value) => value !== null && value !== undefined
  );

  updateSelectedValues({ filters: nonEmptyValues });
}
