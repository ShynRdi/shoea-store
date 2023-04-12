//handeling username
const userName = document.querySelector(".userRealName");
userName.innerHTML = localStorage.getItem("userName");

//handeling dailytime
const dailyTime = document.querySelector(".time");
const d = new Date();
let hour = d.getHours();

if (hour < 5) {
  dailyTime.innerHTML = "Night";
} else if (4.9 < hour && hour < 11) {
  dailyTime.innerHTML = "Morning";
} else if (10.9 < hour && hour < 14) {
  dailyTime.innerHTML = "Noon";
} else if (13.9 < hour && hour < 17) {
  dailyTime.innerHTML = "Afternoon";
} else if (16.9 < hour && hour < 19) {
  dailyTime.innerHTML = "Evening";
} else if (18.9 < hour && hour < 25) {
  dailyTime.innerHTML = "Night";
}

//handeling not completed parts
document.querySelector(".notCompletedYet").addEventListener("click", () => {
  alert("It's Not Completed Yet");
});

//handeling searchBox
const searchBox = document.querySelector("#searchBox");
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    localStorage.setItem("searchingAbout", `${searchBox.value}`);
    window.location.href = "../searching-page/index.html";
  }
});

//handeling shoe box
function handelingShoeBox() {
  const shoeBox = document.querySelector(".shoesBox");
  shoeBox.innerHTML = "";
  fetch(`http://localhost:3000/products?q=first`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      let productProp;
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        productProp = response[i];
        console.log(productProp);
        const gridItem = document.createElement("a");
        gridItem.href = "../item-page/index.html" + "?id=" + productProp.id;
        gridItem.classList.add("gridItem");
        gridItem.classList.add("shoe");

        const shoeImg = document.createElement("img");
        shoeImg.src = productProp["img"];
        // shoeImg.style.width = "192.5px";
        // shoeImg.style.height = "192.5px";
        const shoeName = document.createElement("h4");
        shoeName.innerHTML = `${productProp["name"]}`;
        const shoeCost = document.createElement("span");
        shoeCost.innerHTML = `$ ${productProp["price"]}`;
        gridItem.appendChild(shoeImg);
        gridItem.appendChild(shoeName);
        gridItem.appendChild(shoeCost);
        shoeBox.append(gridItem);
        console.log(productProp["price"], productProp["name"]);
      }
    });
}
const nikeIcon = document.querySelector(".nike");
nikeIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `nike`);
  window.location.href = "../brand-page/index.html";
});
const adidasIcon = document.querySelector(".adidas");
adidasIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `adidas`);
  window.location.href = "../brand-page/index.html";
});
const pumaIcon = document.querySelector(".puma");
pumaIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `puma`);
  window.location.href = "../brand-page/index.html";
});
const asicsIcon = document.querySelector(".asics");
asicsIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `asics`);
  window.location.href = "../brand-page/index.html";
});
const reebokIcon = document.querySelector(".reebok");
reebokIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `reebok`);
  window.location.href = "../brand-page/index.html";
});
const newbalanceIcon = document.querySelector(".newbalance");
newbalanceIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `newbalance`);
  window.location.href = "../brand-page/index.html";
});
const converceIcon = document.querySelector(".converce");
converceIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `converce`);
  window.location.href = "../brand-page/index.html";
});
const moreIcon = document.querySelector(".moreIconForBrandItem");
moreIcon.addEventListener("click", () => {
  localStorage.setItem("searchingAbout", `more`);
  window.location.href = "../brand-page/index.html";
});

//handeling Buttons
document.querySelector(".allBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
document.querySelector(".nikeBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
document.querySelector(".adidasBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
document.querySelector(".pumaBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
document.querySelector(".asicsBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
document.querySelector(".reebokBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
document.querySelector(".ConverceBtn").addEventListener("click", (e) => {
  mostPopular(e.target.value);
});
function mostPopular(btnvalue) {
  const shoe2Box = document.querySelector(".shoesBox");
  shoe2Box.innerHTML = "";
  fetch(`http://localhost:3000/products?q=${btnvalue}&theBest=true`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      let productProp;
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        productProp = response[i];
        console.log(productProp);
        const gridItem = document.createElement("a");
        gridItem.href = "../item-page/index.html" + "?id=" + productProp.id;
        gridItem.classList.add("shoe");

        const shoeImg = document.createElement("img");
        shoeImg.src = productProp["img"];
        shoeImg.style.backgroundColor = "#f3f3f3";
        shoeImg.style.borderRadius = "1rem";
        const shoeName = document.createElement("h4");
        shoeName.innerHTML = `${productProp["name"]}`;
        const shoeCost = document.createElement("span");
        shoeCost.innerHTML = `$ ${productProp["price"]}`;
        gridItem.appendChild(shoeImg);
        gridItem.appendChild(shoeName);
        gridItem.appendChild(shoeCost);
        shoe2Box.append(gridItem);
        console.log(productProp["price"], productProp["name"]);
      }
    });
}
