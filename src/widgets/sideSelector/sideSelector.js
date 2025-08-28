function removeFilters() {
  removeSelectedHotelCategory();

  updateSelectedValues({ filters: [] });
}

function applyFilters() {
  const hotelCategory = setSelectedHotelCategory();

  const values = [hotelCategory];

  const nonEmptyValues = values.filter(
    (value) => value !== null && value !== undefined
  );

  updateSelectedValues({ filters: nonEmptyValues });
}

function toggleFilters() {
  const additionalFilters = document.querySelector(".additional-filters");
  additionalFilters.classList.toggle("open");

  const additionalFiltersButton = document.querySelector(
    ".additional-filters-button"
  );
  additionalFiltersButton.classList.toggle("open");
}
