document.querySelector(".locChanger").addEventListener("click", () => {
  window.location.href = "../shipping-address-page/index.html";
});
let totalPrice = 0;
const orders = localStorage.getItem("Orders");
ordersList = JSON.parse(orders);
let filteredList = ordersList.filter(
  (order) => order !== "null" && order !== ""
);
const finalLists = [];
const finalList = filteredList.filter((element) => {
  const isDuplicate = finalLists.includes(element.id);
  if (!isDuplicate) {
    finalLists.push(element.id);
    return true;
  }
  return false;
});

finalList.forEach((element) => {
  const shoeBox = document.querySelector(".bodyPart");
  const cartContainer = document.createElement("div");
  cartContainer.classList.add("d-flex");
  cartContainer.classList.add("justify-content-between");
  cartContainer.classList.add("bg-light");
  cartContainer.classList.add("mb-4");

  const imgHolder = document.createElement("img");
  if (element.brand === "nike") {
    imgHolder.src = "../../assets/sampleShoe.svg";
  } else if (element.brand === "adidas") {
    imgHolder.src = "../../assets/adidas.svg";
  } else if (element.brand === "puma") {
    imgHolder.src = "../../assets/puma.svg";
  } else if (element.brand === "asics") {
    imgHolder.src = "../../assets/asics.svg";
  } else if (element.brand === "newbalance") {
    imgHolder.src = "../../assets/newbalance.svg";
  } else if (element.brand === "reebok") {
    imgHolder.src = "../../assets/reebok.png";
  } else if (element.brand === "converce") {
    imgHolder.src = "../../assets/converce.svg";
  }
  imgHolder.classList.add("itemImg");
  imgHolder.classList.add("rounded-5");
  imgHolder.classList.add("m-3");
  imgHolder.style.width = "142px";
  imgHolder.style.height = "142px";

  const secondContainer = document.createElement("div");
  secondContainer.classList.add("d-flex");
  secondContainer.classList.add("flex-column");
  secondContainer.classList.add("justify-content-around");

  const name = document.createElement("h1");
  name.innerHTML = element.name;

  const priceContainer = document.createElement("div");
  const dolorSign = document.createElement("span");
  dolorSign.innerHTML = "$";

  const price = document.createElement("span");
  price.innerHTML = +element.price;
  price.classList.add("itemPrice");

  priceContainer.classList.add("d-flex");
  priceContainer.appendChild(dolorSign);
  priceContainer.appendChild(price);

  secondContainer.appendChild(name);
  secondContainer.appendChild(priceContainer);

  const localStorageProductName = '"' + element.name + '"';
  let newItem = +localStorage.getItem(localStorageProductName) + 1;

  const counterSpan = document.createElement("span");
  counterSpan.innerHTML = localStorage.getItem(localStorageProductName);
  counterSpan.classList.add("orderCounter");
  counterSpan.classList.add("rounded-circle");

  cartContainer.appendChild(imgHolder);
  cartContainer.appendChild(secondContainer);
  cartContainer.appendChild(counterSpan);

  if (newItem === 1) {
  } else {
    shoeBox.appendChild(cartContainer);
  }
  totalPrice =
    totalPrice + element.price * localStorage.getItem('"' + element.name + '"');
  console.log(totalPrice);
  newItem = newItem - 1;
});

// document.querySelector(".totalPrice").innerHTML = totalPrice;
const selectedLocation = localStorage.getItem("location").split(",");
document.querySelector(".locationTitle").innerHTML = selectedLocation[1];

document.querySelector(".location").innerHTML = selectedLocation[0];
document.querySelector(".promoBtn").addEventListener("click", () => {
  alert("کارگران مشغول کار اند.");
});

if (localStorage.getItem("shippingType")) {
  if (document.querySelector(".choseShippingTypeText").innerHTML == "") {
    document.querySelector(".choseShippingTypeText").innerHTML =
      "choose your shipping type";
  } else {
    document.querySelector(".choseShippingTypeText").innerHTML =
      localStorage.getItem("shippingType");
  }
}
document.querySelector(".totalPrice").innerHTML =
  "$" + localStorage.getItem("totalPrice");
if (!localStorage.getItem("shippingCost")) {
  document.querySelector(".shippingPrice").innerHTML = 0;
  document.querySelector(".totalPricePlusShipping").innerHTML =
    "$" + localStorage.getItem("totalPrice");
} else {
  document.querySelector(".shippingPrice").innerHTML =
    "$" + localStorage.getItem("shippingCost");
  document.querySelector(".totalPricePlusShipping").innerHTML =
    "$" +
    (Number(localStorage.getItem("shippingCost")) +
      Number(localStorage.getItem("totalPrice")));
}

document.querySelector(".paymentBtn").addEventListener("click", () => {
  window.location.href = "../final-page/index.html";
  const userName = localStorage.getItem("userName");
  localStorage.clear();
  localStorage.setItem("userName", userName);
});
