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

  const thirdContainer = document.createElement("div");
  thirdContainer.classList.add("d-flex");
  thirdContainer.classList.add("flex-column");
  thirdContainer.classList.add("justify-content-around");
  thirdContainer.classList.add("mx-1");

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "remove";
  removeBtn.classList.add("btn");
  removeBtn.classList.add("btn-dark");
  removeBtn.classList.add("rounded-5");
  removeBtn.classList.add("removeBtn");

  const lastPart = document.createElement("div");
  lastPart.classList.add("addToCartBtn");
  lastPart.classList.add("align-self-end");
  lastPart.classList.add("d-flex");
  lastPart.classList.add("align-items-center");
  lastPart.classList.add("bg-dark");
  lastPart.classList.add("rounded-5");

  const minus = document.createElement("button");
  minus.innerHTML = "-";
  minus.classList.add("btn");
  minus.classList.add("text-light");
  minus.classList.add("minusBtn");
  const localStorageProductName = '"' + element.name + '"';
  let newItem = +localStorage.getItem(localStorageProductName) + 1;

  const counterSpan = document.createElement("span");
  counterSpan.innerHTML = localStorage.getItem(localStorageProductName);

  console.log(localStorageProductName);
  counterSpan.classList.add("orderCounter");
  counterSpan.classList.add("bg-light");
  counterSpan.classList.add("p-2");

  const plus = document.createElement("button");
  plus.innerHTML = "+";
  plus.classList.add("btn");
  plus.classList.add("text-light");
  plus.classList.add("addBtn");

  lastPart.appendChild(minus);
  lastPart.appendChild(counterSpan);
  lastPart.appendChild(plus);

  thirdContainer.appendChild(removeBtn);
  thirdContainer.appendChild(lastPart);

  cartContainer.appendChild(imgHolder);
  cartContainer.appendChild(secondContainer);
  cartContainer.appendChild(thirdContainer);

  if (newItem === 1) {
  } else {
    shoeBox.appendChild(cartContainer);
  }
  totalPrice =
    totalPrice + element.price * localStorage.getItem('"' + element.name + '"');
  console.log(totalPrice);
  newItem = newItem - 1;
});

document.querySelectorAll(".addBtn").forEach((e) => {
  e.addEventListener("click", () => {
    const parentelem = e.parentElement;
    const shoeName =
      parentelem.parentElement.parentElement.querySelector("h1").innerHTML;
    totalPrice =
      totalPrice -
      localStorage.getItem('"' + shoeName + '"') *
        e.parentElement.parentElement.parentElement.querySelector(".itemPrice")
          .innerHTML;
    const counter = parentelem.querySelector("span").innerHTML++;
    localStorage.setItem(`${'"' + shoeName + '"'}`, counter + 1);
    totalPrice =
      totalPrice +
      localStorage.getItem('"' + shoeName + '"') *
        e.parentElement.parentElement.parentElement.querySelector(".itemPrice")
          .innerHTML;
    console.log(totalPrice, localStorage.getItem('"' + shoeName + '"'));
    document.querySelector(".totalPrice").innerHTML = totalPrice;
  });
});
document.querySelectorAll(".minusBtn").forEach((e) => {
  e.addEventListener("click", () => {
    const parentelem = e.parentElement;
    if (parentelem.querySelector("span").innerHTML > 0) {
      const counter = parentelem.querySelector("span").innerHTML--;
      const shoeName =
        parentelem.parentElement.parentElement.querySelector("h1").innerHTML;
      totalPrice =
        totalPrice -
        localStorage.getItem('"' + shoeName + '"') *
          e.parentElement.parentElement.parentElement.querySelector(
            ".itemPrice"
          ).innerHTML;
      localStorage.setItem(`${'"' + shoeName + '"'}`, counter - 1);
      totalPrice =
        totalPrice +
        localStorage.getItem('"' + shoeName + '"') *
          e.parentElement.parentElement.parentElement.querySelector(
            ".itemPrice"
          ).innerHTML;
      console.log(totalPrice);
      document.querySelector(".totalPrice").innerHTML = totalPrice;
    }
  });
});

document.querySelectorAll(".removeBtn").forEach((e) => {
  e.addEventListener("click", () => {
    const parentelem = e.parentElement.parentElement;
    const elem = parentelem.querySelector("h1").innerHTML;
    console.log(elem);
    const lastElem = '"' + elem + '"';
    const shoeName = parentelem.querySelector("h1").innerHTML;
    totalPrice =
      totalPrice -
      localStorage.getItem('"' + shoeName + '"') *
        e.parentElement.parentElement.parentElement.querySelector(".itemPrice")
          .innerHTML;
    localStorage.setItem(lastElem, 0);
    e.parentElement.parentElement.remove();
    console.log(totalPrice);
    document.querySelector(".totalPrice").innerHTML = totalPrice;
  });
});
document.querySelector(".totalPrice").innerHTML = totalPrice;

document.querySelector(".checkOut").addEventListener("click", () => {
  localStorage.setItem("totalPrice", totalPrice);
  window.location.href = "../chech-out-page/index.html";
});
