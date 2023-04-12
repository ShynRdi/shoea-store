function handelingShoeBox() {
  const pageTitle = localStorage.getItem("searchingAbout");
  if (pageTitle === "more") {
    document.querySelector(".searchingPage").innerHTML = `AllOfOurShoes`;
    document.querySelector(".imageHolder").remove();

    const shoeBox = document.querySelector(".shoesBox");
    fetch(`http://localhost:3000/products`)
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
          shoeBox.append(gridItem);
          console.log(productProp["price"], productProp["name"]);
        }
      });
  } else {
    if (pageTitle === "converce") {
      document.querySelector(".searchingPage").innerHTML = `CONVERSE`;
    } else {
      document.querySelector(
        ".searchingPage"
      ).innerHTML = `${pageTitle.toUpperCase()}`;
    }

    document.querySelector(
      ".brandImg"
    ).src = `../../assets/${pageTitle}_Page.png`;
    document.querySelector(".brandImg").style.width = "393px%";

    const shoeBox = document.querySelector(".shoesBox");
    fetch(`http://localhost:3000/products?brand=${pageTitle}`)
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
          shoeBox.append(gridItem);
          console.log(productProp["price"], productProp["name"]);
        }
      });
  }
}
