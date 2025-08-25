const apiCache = new Map();
let fetchController;

async function fetchOffers() {
  if (fetchController) fetchController.abort();
  fetchController = new AbortController();
  const signal = fetchController.signal;

  const payload = generatePayloadPriceSearchEncrypt();

  removeListOffers();
  showLoadingBanner();
  hideWarningBanner();

  try {
    const priceSearchEncryptResponse = await callApi(
      "https://www.coraltravel.lt/endpoints/PackageTourHotelProduct/PriceSearchEncrypt",
      payload,
      { signal }
    );

    if (!priceSearchEncryptResponse) return;

    const priceSearchPayload = generatePayloadPriceSearchList(
      priceSearchEncryptResponse
    );

    const priceSearchListResponse = await callApi(
      "https://www.coraltravel.lt/endpoints/PackageTourHotelProduct/PriceSearchList",
      priceSearchPayload,
      { signal }
    );

    hideWarningBanner();
    listOffers(priceSearchListResponse);
  } catch (error) {
    if (error.name === "AbortError") return;
    showWarningBanner();
    removeListOffers();
    console.error("error in fetchoffers", error);
  } finally {
    hideLoadingBanner();
  }
}

async function callApi(apiUrl, payload, options = {}) {
  const { signal } = options;
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
      signal,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    apiCache.set(cacheKey, data);

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`Request to ${apiUrl} was aborted`);
      return;
    }
    console.error("Error:", error);
  }
}
