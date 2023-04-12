function handelingShoeBox() {
  fetch(`http://localhost:3000/products?theBest=true`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      let productProp;
      console.log(response);
      const shoeBox = document.querySelector(".shoesBox");
      shoeBox.innerHTML = "";
      for (let i = 0; i < response.length; i++) {
        productProp = response[i];
        console.log(productProp);
        const gridItem = document.createElement("a");
        gridItem.href = "../item-page/index.html" + "?id=" + productProp.id;
        gridItem.classList.add("gridItem");
        gridItem.classList.add("shoe");

        const shoeImg = document.createElement("img");
        shoeImg.src = productProp["img"];

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
        gridItem.classList.add("gridItem");
        gridItem.classList.add("shoe");

        const shoeImg = document.createElement("img");
        shoeImg.src = productProp["img"];
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
