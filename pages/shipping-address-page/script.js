document.querySelector(".applyBtn").addEventListener("click", () => {
  const radios = document.querySelectorAll('input[name="optradio"]');
  for (const radio of radios) {
    if (radio.checked) {
      localStorage.setItem("location", radio.value);
      break;
    }
  }
  // window.location.href = "./chechkout.html"
});
document.querySelector(".addNewAddress").addEventListener("click", () => {
  window.location.href = "../select-your-new-location-page/index.html";
});
const locationsName = localStorage
  .getItem("locationName")
  .split(",")
  .slice(0, -1);
const locations = localStorage.getItem("location").split(",").slice(0, -1);
for (let i = 0; i < locations.length; i++) {
  const addressContainer = document.querySelector(".addressContainer");

  const innerAddress = document.createElement("div");
  innerAddress.classList.add("innerAddressContainer");

  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.for = `radio${i}`;

  const contContainer = document.createElement("div");
  contContainer.classList.add("d-flex");
  contContainer.classList.add("align-items-center");
  contContainer.classList.add("gap-3");

  const locationImg = document.createElement("img");
  locationImg.src = "../../assets/icons8-map-marker-50.png";
  locationImg.style.width = "36px";
  locationImg.classList.add("p-1");
  locationImg.classList.add("rounded-circle");
  locationImg.classList.add("gpsIcon");

  const textContainer = document.createElement("div");
  textContainer.classList.add("d-flex");
  textContainer.classList.add("flex-column");

  const locationNameText = document.createElement("h2");
  locationNameText.innerHTML = locationsName[i];

  const locationText = document.createElement("p");
  locationText.innerHTML = locations[i];

  textContainer.appendChild(locationNameText);
  textContainer.appendChild(locationText);

  contContainer.appendChild(locationImg);
  contContainer.appendChild(textContainer);

  label.appendChild(contContainer);

  const input = document.createElement("input");
  input.type = "radio";
  input.classList.add("form-check-input");
  input.id = `radio${i}`;
  input.name = "optradio";
  input.value = `${locations[i] + "," + locationsName[i]}`;

  innerAddress.appendChild(label);
  innerAddress.appendChild(input);

  addressContainer.appendChild(innerAddress);
}
// document.querySelector(".backBtn").addEventListener("click",()=>{
//     const radios = document.querySelectorAll('input[name="optradio"]')
//     for(const radio of radios){
//         if (radio.checked){
//             localStorage.setItem("selectedLocation",radio.value);
//             break;
//     }}
//     window.location.href="./chechkout.html"
// })
