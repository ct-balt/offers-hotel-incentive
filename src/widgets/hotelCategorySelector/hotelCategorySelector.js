function loadHotelCategory() {
  const hotelCategoryItemsDiv = document.querySelector(
    ".hotel-category .items"
  );

  hotelCategoryItemsDiv.innerHTML = "";

  const starSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none">
    <path
    d="M15.0728 5.1625L10.5389 4.50357L8.51212 0.394646C8.45676 0.282146 8.36569 0.191075 8.25319 0.135717C7.97104 -0.00356831 7.62819 0.112503 7.48711 0.394646L5.46033 4.50357L0.926401 5.1625C0.801401 5.18036 0.687115 5.23929 0.599615 5.32857C0.493832 5.4373 0.435541 5.58357 0.43755 5.73526C0.439559 5.88694 0.501704 6.03162 0.610329 6.1375L3.89069 9.33572L3.11569 13.8518C3.09751 13.9568 3.10914 14.0649 3.14924 14.1637C3.18935 14.2625 3.25633 14.348 3.34259 14.4107C3.42886 14.4733 3.53095 14.5106 3.63729 14.5181C3.74364 14.5257 3.84998 14.5034 3.94426 14.4536L7.99962 12.3214L12.055 14.4536C12.1657 14.5125 12.2943 14.5321 12.4175 14.5107C12.7282 14.4571 12.9371 14.1625 12.8835 13.8518L12.1085 9.33572L15.3889 6.1375C15.4782 6.05 15.5371 5.93572 15.555 5.81072C15.6032 5.49822 15.3853 5.20893 15.0728 5.1625Z"
    fill="#FAB60B" />
  </svg>
  `;

  const emptyStarSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none">
    <path
    d="M15.0728 5.1625L10.5389 4.50357L8.51212 0.394646C8.45676 0.282146 8.36569 0.191075 8.25319 0.135717C7.97104 -0.00356831 7.62819 0.112503 7.48711 0.394646L5.46033 4.50357L0.926401 5.1625C0.801401 5.18036 0.687115 5.23929 0.599615 5.32857C0.493832 5.4373 0.435541 5.58357 0.43755 5.73526C0.439559 5.88694 0.501704 6.03162 0.610329 6.1375L3.89069 9.33572L3.11569 13.8518C3.09751 13.9568 3.10914 14.0649 3.14924 14.1637C3.18935 14.2625 3.25633 14.348 3.34259 14.4107C3.42886 14.4733 3.53095 14.5106 3.63729 14.5181C3.74364 14.5257 3.84998 14.5034 3.94426 14.4536L7.99962 12.3214L12.055 14.4536C12.1657 14.5125 12.2943 14.5321 12.4175 14.5107C12.7282 14.4571 12.9371 14.1625 12.8835 13.8518L12.1085 9.33572L15.3889 6.1375C15.4782 6.05 15.5371 5.93572 15.555 5.81072C15.6032 5.49822 15.3853 5.20893 15.0728 5.1625Z"
    fill="var(--light-gray)" />
  </svg>
  `;

  for (let i = 5; i >= 1; i--) {
    const itemDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    itemDiv.className = "item";

    checkbox.className = "star-checkbox";
    checkbox.id = `star-${i}`;
    checkbox.value = i;
    checkbox.type = "checkbox";
    checkbox.title = "Viešbučio kategorija";

    const stars =
      new Array(i).fill(starSvg).join("") +
      new Array(5 - i).fill(emptyStarSvg).join("");

    label.setAttribute("for", checkbox.id);
    label.innerHTML = stars;
    label.className = "stars";

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        itemDiv.classList.add("checked");
      } else {
        itemDiv.classList.remove("checked");
      }
    });

    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(label);

    hotelCategoryItemsDiv.appendChild(itemDiv);
  }
}

function removeSelectedHotelCategory() {
  const checkedItems = document.querySelectorAll(
    ".hotel-category .items .item.checked"
  );

  checkedItems.forEach((item) => {
    item.classList.remove("checked");
  });
}

function setSelectedHotelCategory() {
  const checkedItems = document.querySelectorAll(
    ".hotel-category .items .item.checked"
  );

  if (!checkedItems.length) return;

  const checkedValues = Array.from(checkedItems).map((item) =>
    parseInt(item.querySelector(".star-checkbox").value)
  );

  const selectedValues = {
    type: 2,
    values: [],
    providers: [],
  };

  for (let i = 0; i < checkedValues.length; i++) {
    const value = {
      id: `${checkedValues[i]}`,
      value: `${checkedValues[i]}`,
    };

    selectedValues.values.push(value);
  }

  return selectedValues;
}
