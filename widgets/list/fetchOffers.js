const apiCache = new Map();

async function fetchOffers() {
  const payload = generatePayloadPriceSearchEncrypt();

  removeListOffers();
  showLoadingBanner();
  hideWarningBanner();

  try {
    const priceSearchEncryptResponse = await callApi(
      "https://www.coraltravel.lt/endpoints/PackageTourHotelProduct/PriceSearchEncrypt",
      payload
    );
    const priceSearchPayload = generatePayloadPriceSearchList(
      priceSearchEncryptResponse
    );
    const priceSearchListResponse = await callApi(
      "https://www.coraltravel.lt/endpoints/PackageTourHotelProduct/PriceSearchList",
      priceSearchPayload
    );

    listOffers(priceSearchListResponse);
  } catch (error) {
    showWarningBanner();
    removeListOffers();
    console.error("error in fetchoffers", error);
  } finally {
    hideLoadingBanner();
  }
}

async function callApi(apiUrl, payload) {
  const cacheKey = `${apiUrl}:${JSON.stringify(payload)}`;

  if (apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    apiCache.set(cacheKey, data);

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
