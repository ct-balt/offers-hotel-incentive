function showLoadingBanner() {
  const offersDiv = document.querySelector(".offers-wrapper");

  if (offersDiv.querySelector(".loading-banner")) return;

  const loadingBanner = document.createElement("div");
  loadingBanner.className = "loading-banner";
  loadingBanner.innerHTML = `<div class="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none">
              <g clip-path="url(#clip0_814_1059)">
                <mask
                  id="mask0_814_1059"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="44"
                  height="45">
                  <path d="M0 0.5H44V44.5H0V0.5Z" fill="white" />
                </mask>
                <g mask="url(#mask0_814_1059)">
                  <path
                    d="M21.9992 42.3C25.9153 42.3 29.7434 41.1387 32.9995 38.9631C36.2556 36.7874 38.7934 33.6951 40.292 30.0771C41.7907 26.4591 42.1828 22.478 41.4188 18.6372C40.6548 14.7963 38.769 11.2683 35.9999 8.49925C33.2309 5.73017 29.7028 3.8444 25.862 3.08041C22.0212 2.31642 18.0401 2.70853 14.4221 4.20715C10.8041 5.70576 7.71177 8.24358 5.53612 11.4997C3.36047 14.7558 2.19922 18.5839 2.19922 22.5C2.19922 25.635 2.92742 28.5984 4.22322 31.234C4.33322 31.4584 4.37062 31.7136 4.32002 31.96L2.52922 40.6962C2.49303 40.8727 2.50079 41.0555 2.5518 41.2283C2.6028 41.4012 2.6955 41.5589 2.82174 41.6875C2.94798 41.8161 3.1039 41.9118 3.27577 41.966C3.44764 42.0202 3.63021 42.0314 3.80742 41.9986L12.8362 40.309C13.0721 40.2638 13.3162 40.297 13.5314 40.4036C16.1791 41.654 19.0711 42.3017 21.9992 42.3Z"
                    stroke="#0093D0" />
                  <path
                    d="M21.9977 33.4999V18.0999H17.5977M17.5977 33.4999H26.3977M21.9977 12.5999V9.29993"
                    stroke="#0093D0"
                    stroke-linejoin="round" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_814_1059">
                  <rect
                    width="44"
                    height="44"
                    fill="white"
                    transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <div class="text">
              <span class="title">Renkame geriausius pasiūlymus</span>
              <span class="subtitle">Prašome palaukti...</span>
            </div>
          </div>
          <div class="loading-spinner"></div>`;

  offersDiv.appendChild(loadingBanner);
}

function showWarningBanner() {
  const offersDiv = document.querySelector(".offers-wrapper");

  if (offersDiv.querySelector(".warning-banner")) return;

  const warningBanner = document.createElement("div");
  warningBanner.className = "warning-banner";
  warningBanner.innerHTML = `<div class="content">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 45" fill="none">
<g clip-path="url(#clip0_826_1620)">
<mask id="mask0_826_1620" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="45">
<path d="M0.5 0.5H49.5V44.5H0.5V0.5Z" fill="white"/>
</mask>
<g mask="url(#mask0_826_1620)">
<path d="M25 12.7222V27.3888M25 32.2777V35.9444M4.84384 34.688L20.7762 7.66462C22.67 4.45017 27.3299 4.45017 29.2238 7.66462L45.1561 34.688C47.0769 37.9464 44.7225 42.0555 40.9323 42.0555H9.06764C5.27749 42.0555 2.92304 37.9488 4.84384 34.688Z" stroke="#F0AB00" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_826_1620">
<rect width="49" height="44" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>
            <div class="text">
              <span class="title">Nėra tinkamų variantų</span>
              <span class="subtitle">Prašome pabandyti pakeisti paieškos parametrus</span>
            </div>
          </div>`;

  offersDiv.appendChild(warningBanner);
}

function showFallbackBanner() {
  const offersDiv = document.querySelector(".offers-wrapper");

  if (offersDiv.querySelector(".warning-banner")) return;

  const warningBanner = document.createElement("div");
  warningBanner.className = "warning-banner";
  warningBanner.innerHTML = `<div class="content">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 45" fill="none">
<g clip-path="url(#clip0_826_1620)">
<mask id="mask0_826_1620" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="45">
<path d="M0.5 0.5H49.5V44.5H0.5V0.5Z" fill="white"/>
</mask>
<g mask="url(#mask0_826_1620)">
<path d="M25 12.7222V27.3888M25 32.2777V35.9444M4.84384 34.688L20.7762 7.66462C22.67 4.45017 27.3299 4.45017 29.2238 7.66462L45.1561 34.688C47.0769 37.9464 44.7225 42.0555 40.9323 42.0555H9.06764C5.27749 42.0555 2.92304 37.9488 4.84384 34.688Z" stroke="#F0AB00" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_826_1620">
<rect width="49" height="44" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>
            <div class="text">
              <span class="title">Neradome tinkamų variantų</span>
              <span class="subtitle">Ieškome naujų rezultatų kitomis datomis, prašome palaukti...</span>
            </div>
            
          </div>
          <div class="loading-spinner"></div>
          `;

  offersDiv.appendChild(warningBanner);
}

function showAltSearchBanner(url) {
  const offersDiv = document.querySelector(".offers-wrapper");

  if (offersDiv.querySelector(".warning-banner")) return;

  const warningBanner = document.createElement("div");
  warningBanner.className = "warning-banner";
  warningBanner.innerHTML = `<div class="content">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 45" fill="none">
<g clip-path="url(#clip0_826_1620)">
<mask id="mask0_826_1620" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="45">
<path d="M0.5 0.5H49.5V44.5H0.5V0.5Z" fill="white"/>
</mask>
<g mask="url(#mask0_826_1620)">
<path d="M25 12.7222V27.3888M25 32.2777V35.9444M4.84384 34.688L20.7762 7.66462C22.67 4.45017 27.3299 4.45017 29.2238 7.66462L45.1561 34.688C47.0769 37.9464 44.7225 42.0555 40.9323 42.0555H9.06764C5.27749 42.0555 2.92304 37.9488 4.84384 34.688Z" stroke="#F0AB00" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_826_1620">
<rect width="49" height="44" fill="white" transform="translate(0.5 0.5)"/>
</clipPath>
</defs>
</svg>
            <div class="text">
              <span class="title">Nėra kelionių šiomis datomis</span>
              <span class="subtitle">Peržiūrėkite kitus pasiūlymus</span>
            </div>
            
          </div>
          <div class="button-wrapper">
            <a href="https://www.coraltravel.lt/contact-us" target="_blank" class="contact-us">Siųsti užklausą</a>
            <span>arba</span>
            <a href=${url} class="alt-search">Peržiūrėti kitus pasiūlymus</a>
          </div>
          
          `;

  offersDiv.appendChild(warningBanner);
}

function hideBanner(banner) {
  banner = banner === "fallback" ? "warning" : banner;

  const offersDiv = document.querySelector(".offers-wrapper");
  const existingBanner = offersDiv.querySelector(`.${banner}-banner`);
  if (existingBanner) existingBanner.remove();
}
