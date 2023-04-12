document.querySelector(".addingTheAddress").addEventListener("click", () => {
  if (localStorage.getItem("location")) {
    localStorage.setItem(
      "location",
      localStorage.getItem("location") +
        document.querySelector("#locName").value +
        ","
    );
    localStorage.setItem(
      "locationName",
      localStorage.getItem("locationName") +
        document.querySelector("#LocPlace").value +
        ","
    );
  } else {
    localStorage.setItem(
      "locationName",
      document.querySelector("#locName").value + ","
    );
    localStorage.setItem(
      "location",
      document.querySelector("#LocPlace").value + ","
    );
  }
  window.location.href = "../shipping-address-page/index.html";
});
