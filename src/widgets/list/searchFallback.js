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
      }
      break;
    }
  }
}
