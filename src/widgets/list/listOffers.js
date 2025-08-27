let meals = [];
let hotelCategories = [];

function listOffers(priceSearchListResponse) {
  const result = priceSearchListResponse.result;
  const products = result.products;
  meals = result.meals;
  hotelCategories = result.hotelCategories;

  const offersDiv = document.querySelector(".offers-wrapper");
  const listDiv = document.createElement("div");
  listDiv.className = "list";
  offersDiv.appendChild(listDiv);

  products.forEach((product) =>
    listDiv.appendChild(createProductCard(product))
  );

  const viewAllBtn = document.createElement("a");
  viewAllBtn.className = "view-all-btn";
  viewAllBtn.href = viewAllUrl;
  viewAllBtn.target = "_blank";
  viewAllBtn.textContent = "Visi pasiūlymai";

  listDiv.appendChild(viewAllBtn);
}

function createProductCard(product) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const redirectUrl = `https://www.coraltravel.lt/hotels${product?.offers[0]?.link?.redirectionUrl}/?qp=${product?.offers[0]?.link?.queryParam}&p=1&w=0&s=0&ws=10`;

  cardDiv.innerHTML = `
    <div class="info">
              <a href=${redirectUrl} target="_blank" class="image-wrapper">
                <img
                  src=${product?.hotel?.images[0]?.sizes[0]?.url}
                  alt="${product?.hotel?.name}"
                  loading="lazy" />
              </a>
              <div class="details">
                <div class="hotel">
                  <span class="location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none">
                      <path
                        d="M12.8347 6.16683C12.8347 10.2267 8.5013 15.1668 8.5013 15.1668C8.5013 15.1668 4.16797 10.2267 4.16797 6.16683C4.16797 3.7736 6.10807 1.8335 8.5013 1.8335C10.8946 1.8335 12.8347 3.7736 12.8347 6.16683Z"
                        stroke="black"
                        stroke-opacity="0.651"
                        stroke-width="0.5"
                        stroke-linejoin="round" />
                      <path
                        d="M8.5 8.16699C9.60457 8.16699 10.5 7.27156 10.5 6.16699C10.5 5.06242 9.60457 4.16699 8.5 4.16699C7.39543 4.16699 6.5 5.06242 6.5 6.16699C6.5 7.27156 7.39543 8.16699 8.5 8.16699Z"
                        stroke="black"
                        stroke-opacity="0.651"
                        stroke-width="0.5"
                        stroke-linejoin="round" />
                    </svg>
                    ${product?.hotel?.locationSummary}
                  </span>
                  <h3 class="hotel-name">${product?.hotel?.name}</h3>
                </div>
                <div class="rating">
                  ${getStarCount(product?.hotel?.categoryKey)}
                </div>
                <div class="extra-info">
                  <div class="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none">
                      <g clip-path="url(#clip0_814_1098)">
                        <mask
                          id="mask0_814_1098"
                          style="mask-type: luminance"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="14"
                          height="16">
                          <path
                            d="M0 0.915039H14V15.4605H0V0.915039Z"
                            fill="white" />
                        </mask>
                        <g mask="url(#mask0_814_1098)">
                          <path
                            d="M0.410594 3.58365C0.410594 3.34255 0.502781 3.11131 0.666875 2.94083C0.83097 2.77034 1.05353 2.67456 1.28559 2.67456H12.7127C12.9447 2.67456 13.1673 2.77034 13.3314 2.94083C13.4955 3.11131 13.5877 3.34255 13.5877 3.58365V14.0864C13.5877 14.3275 13.4955 14.5587 13.3314 14.7292C13.1673 14.8997 12.9447 14.9955 12.7127 14.9955H1.28516C1.05309 14.9955 0.830532 14.8997 0.666438 14.7292C0.502343 14.5587 0.410156 14.3275 0.410156 14.0864L0.410594 3.58365Z"
                            stroke="black"
                            stroke-linejoin="round" />
                          <path
                            d="M0.410594 3.58365C0.410594 3.34255 0.502781 3.11131 0.666875 2.94083C0.83097 2.77034 1.05353 2.67456 1.28559 2.67456H12.7127C12.9447 2.67456 13.1673 2.77034 13.3314 2.94083C13.4955 3.11131 13.5877 3.34255 13.5877 3.58365V6.09729H0.410156L0.410594 3.58365Z"
                            stroke="black"
                            stroke-linejoin="round" />
                          <path
                            d="M2.38672 3.70136V1.30591M6.99841 3.70136V1.30591M11.6101 3.70136V1.30591M2.71616 8.835H4.03391M2.71616 11.5727H4.03391M6.33953 8.835H7.65728M6.33953 11.5727H7.65728M9.96334 8.835H11.2807M9.96334 11.5727H11.2807"
                            stroke="black" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_814_1098">
                          <rect
                            width="14"
                            height="15"
                            fill="white"
                            transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>${product?.offers[0]?.checkInDate}</span>
                  </div>
                  <div class="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none">
                      <g clip-path="url(#clip0_814_1129)">
                        <path
                          d="M1.19922 7.88455C1.19922 7.64345 1.29404 7.41222 1.46282 7.24173C1.63161 7.07124 1.86052 6.97546 2.09922 6.97546H16.299C16.5377 6.97546 16.7666 7.07124 16.9354 7.24173C17.1041 7.41222 17.199 7.64345 17.199 7.88455V11.0164H1.19922V7.88455Z"
                          stroke="black"
                          stroke-linejoin="round" />
                        <path
                          d="M1.19922 11.016H17.199V14.6523H15.1992L13.9986 13.0364H4.39917L3.19857 14.6523H1.19922V11.016ZM1.99887 3.03641C1.99887 2.7953 2.09369 2.56407 2.26247 2.39359C2.43126 2.2231 2.66017 2.12732 2.89887 2.12732H15.4989C15.7376 2.12732 15.9665 2.2231 16.1353 2.39359C16.304 2.56407 16.3989 2.7953 16.3989 3.03641V6.9755H1.99887V3.03641Z"
                          stroke="black"
                          stroke-linejoin="round" />
                        <path
                          d="M4.80078 5.00594C4.80078 4.88538 4.84819 4.76977 4.93258 4.68452C5.01697 4.59928 5.13143 4.55139 5.25078 4.55139H7.55028C7.66963 4.55139 7.78409 4.59928 7.86848 4.68452C7.95287 4.76977 8.00028 4.88538 8.00028 5.00594V6.97548H4.80078V5.00594ZM10.4006 5.00594C10.4006 4.88538 10.448 4.76977 10.5324 4.68452C10.6168 4.59928 10.7312 4.55139 10.8506 4.55139H13.1505C13.2699 4.55139 13.3843 4.59928 13.4687 4.68452C13.5531 4.76977 13.6005 4.88538 13.6005 5.00594V6.97548H10.401L10.4006 5.00594Z"
                          stroke="black"
                          stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_814_1129">
                          <rect
                            width="18"
                            height="15"
                            fill="white"
                            transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>${product?.offers[0]?.stayNights} n.</span>
                  </div>
                  <div class="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none">
                      <g clip-path="url(#clip0_814_1141)">
                        <path
                          d="M0.4375 1.30551V4.96005C0.4375 5.20116 0.535506 5.43239 0.709959 5.60288C0.884411 5.77337 1.12102 5.86914 1.36773 5.86914H4.17703C4.42375 5.86914 4.66036 5.77337 4.83481 5.60288C5.00926 5.43239 5.10727 5.20116 5.10727 4.96005V1.30551M2.77192 1.30551V12.4501M16.7803 6.78187V12.4496M14.4459 5.87278V2.21414C14.4459 1.97304 14.5439 1.74181 14.7183 1.57132C14.8928 1.40083 15.1294 1.30505 15.3761 1.30505H18.1849C18.4317 1.30505 18.6683 1.40083 18.8427 1.57132C19.0172 1.74181 19.1152 1.97304 19.1152 2.21414V5.87187C19.1152 6.11298 19.0172 6.34421 18.8427 6.5147C18.6683 6.68518 18.4317 6.78096 18.1849 6.78096H15.3756C15.1289 6.78096 14.8923 6.68518 14.7179 6.5147C14.5434 6.34421 14.4454 6.11298 14.4454 5.87187L14.4459 5.87278Z"
                          stroke="black"
                          stroke-linejoin="round" />
                        <path
                          d="M9.77868 14.9955C12.3575 14.9955 14.448 12.9525 14.448 10.4323C14.448 7.91215 12.3575 5.86914 9.77868 5.86914C7.19989 5.86914 5.10938 7.91215 5.10938 10.4323C5.10938 12.9525 7.19989 14.9955 9.77868 14.9955Z"
                          stroke="black"
                          stroke-linejoin="round" />
                        <path
                          d="M12.1112 10.4319C12.1111 9.82678 11.865 9.24651 11.4271 8.81868C10.9893 8.39086 10.3955 8.15051 9.77629 8.15051M9.77629 12.7141C9.46963 12.7141 9.16597 12.6551 8.88266 12.5404C8.59935 12.4257 8.34193 12.2576 8.12511 12.0457C7.90829 11.8337 7.73632 11.5821 7.61901 11.3052C7.50169 11.0283 7.44135 10.7316 7.44141 10.4319"
                          stroke="black"
                          stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_814_1141">
                          <rect
                            width="20"
                            height="15"
                            fill="white"
                            transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>
                    ${getMealType(product?.offers[0]?.rooms[0]?.mealKey)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator"></div>
            <div class="price-info">
              <div class="top">
                <div class="price">
                  <span class="price-from">kaina nuo</span>
                  ${getOldPrice(product?.offers[0]?.price)}
                  
                  <span class="current-price">${getFormattedPrice(
                    product?.offers[0]?.price?.amount
                  )} € / paketas </span>
                  <span class="current-price-per-person">
                    ${getFormattedPrice(
                      product?.offers[0]?.price?.perPersonAmount
                    )} € / asm.
                  </span>
                </div>
                <div class="additional-price-info">
                  <div class="travelers">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none">
                      <g clip-path="url(#clip0_815_1163)">
                        <path
                          d="M1.875 2.5C2.55859 2.5 3.125 1.95312 3.125 1.25C3.125 0.566406 2.55859 0 1.875 0C1.17188 0 0.625 0.566406 0.625 1.25C0.625 1.95312 1.17188 2.5 1.875 2.5ZM6.875 2.5C7.55859 2.5 8.125 1.95312 8.125 1.25C8.125 0.566406 7.55859 0 6.875 0C6.17188 0 5.625 0.566406 5.625 1.25C5.625 1.95312 6.17188 2.5 6.875 2.5ZM2.5 3.125H1.25C0.546875 3.125 0 3.69141 0 4.375V6.25C0 6.60156 0.273438 6.875 0.625 6.875V9.375C0.625 9.72656 0.898438 10 1.25 10H2.5C2.83203 10 3.125 9.72656 3.125 9.375V6.875C3.45703 6.875 3.75 6.60156 3.75 6.25V4.375C3.75 3.69141 3.18359 3.125 2.5 3.125ZM9.23828 6.71875L8.41797 3.80859C8.30078 3.41797 7.92969 3.125 7.5 3.125H6.21094C5.78125 3.125 5.41016 3.41797 5.29297 3.80859L4.47266 6.71875C4.375 7.10938 4.66797 7.5 5.09766 7.5H5.625V9.375C5.625 9.72656 5.89844 10 6.25 10H7.5C7.83203 10 8.125 9.72656 8.125 9.375V7.5H8.63281C9.0625 7.5 9.35547 7.10938 9.23828 6.71875Z"
                          fill="#353945" />
                      </g>
                      <defs>
                        <clipPath id="clip0_815_1163">
                          <rect width="10" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>2</span>
                  </div>
                  <div class="flight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none">
                      <g clip-path="url(#clip0_812_1035)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 1.375C5.90054 1.375 5.80516 1.41451 5.73484 1.48483C5.66451 1.55516 5.625 1.65054 5.625 1.75V4.084C5.625 4.316 5.505 4.533 5.308 4.656L1.625 6.958V7.27L4.786 6.48C4.88547 6.45509 4.9893 6.45316 5.08962 6.47437C5.18994 6.49558 5.28411 6.53937 5.36498 6.60241C5.44585 6.66544 5.5113 6.74608 5.55635 6.83819C5.60141 6.9303 5.62488 7.03146 5.625 7.134V8.614C5.625 8.809 5.541 8.994 5.395 9.122L4.519 9.888L5.879 9.641C5.95901 9.62642 6.04099 9.62642 6.121 9.641L7.481 9.888L6.606 9.122C6.5335 9.05869 6.47539 8.98061 6.43554 8.89299C6.3957 8.80537 6.37506 8.71025 6.375 8.614V7.134C6.375 6.695 6.788 6.373 7.214 6.479L10.375 7.269V6.958L6.692 4.656C6.59502 4.59533 6.51505 4.51101 6.4596 4.41095C6.40415 4.3109 6.37504 4.19839 6.375 4.084V1.75C6.375 1.65054 6.33549 1.55516 6.26516 1.48483C6.19484 1.41451 6.09946 1.375 6 1.375ZM6 0.625C6.621 0.625 7.125 1.129 7.125 1.75V4.042L10.808 6.344C11.005 6.467 11.125 6.684 11.125 6.916V7.366C11.125 7.805 10.712 8.127 10.286 8.021L7.125 7.231V8.58L8.18 9.503C8.695 9.953 8.288 10.797 7.614 10.675L6 10.38L4.386 10.674C3.712 10.796 3.305 9.953 3.82 9.502L4.875 8.579V7.23L1.714 8.02C1.61453 8.04491 1.5107 8.04684 1.41038 8.02563C1.31006 8.00442 1.21589 7.96063 1.13502 7.89759C1.05415 7.83456 0.988701 7.75392 0.943648 7.66181C0.898594 7.5697 0.875118 7.46854 0.875 7.366V6.916C0.875 6.684 0.995 6.467 1.192 6.344L4.875 4.042V1.75C4.875 1.129 5.379 0.625 6 0.625Z"
                          fill="#535353" />
                      </g>
                      <defs>
                        <clipPath id="clip0_812_1035">
                          <rect
                            width="12"
                            height="11"
                            fill="white"
                            transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Skrydis įskaičiuotas</span>
                  </div>
                </div>
              </div>
              <a href=${redirectUrl} target="_blank" class="choose-button">Rinktis</a>
            </div>
            `;

  return cardDiv;
}

const getFormattedPrice = (price) => {
  const priceStr = Number(price).toFixed(3);
  const truncated = priceStr.slice(0, priceStr.indexOf(".") + 3);
  const formattedPrice = truncated.replace(".", ",");

  return formattedPrice;
};

const getMealType = (mealId) => {
  return meals[mealId]?.name || "";
};

const getOldPrice = (priceObj) => {
  if (priceObj.oldAmount) {
    return `
    <div class="old-price-wrapper">
      <span class="old-price">${getFormattedPrice(
        priceObj.oldAmount
      )} € / paketas</span>
      <span class="discount">- ${Math.floor(
        priceObj.oldAmount - priceObj.amount
      )} €</span>
    </div>
    
  `;
  } else return "";
};

const getStarCount = (ratingId) => {
  return hotelCategories[ratingId]?.starCount
    ? renderStarRating(hotelCategories[ratingId]?.starCount)
    : renderNonStarRating(hotelCategories[ratingId]?.name);
};

const renderStarRating = (starCount) => {
  if (!starCount || isNaN(starCount)) return "";
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

  return (
    new Array(starCount).fill(starSvg).join("") +
    new Array(5 - starCount).fill(emptyStarSvg).join("")
  );
};

const renderNonStarRating = (ratingName) => {
  return `<span class="no-star-category">${ratingName}</span>`;
};
