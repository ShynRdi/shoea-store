let sObj;
function handelingPageData() {
  const id = new URLSearchParams(window.location.search).get("id");
  // console.log(id);
  fetch(`http://localhost:3000/products/${id}`)
    .then(async (response) => {
      a = response.json();
      sObj = await a;
      return a;
    })
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      let productProp = response;
      // console.log(response)
      const shoeBox = document.querySelector(".sampleShoeImg");
      if (id < 11) {
        shoeBox.src = "../../assets/sampleShoe.svg";
      } else if (10 < id && id < 21) {
        shoeBox.src = "../../assets/adidas.svg";
      } else if (20 < id && id < 31) {
        shoeBox.src = "../../assets/puma.svg";
      } else if (30 < id && id < 41) {
        shoeBox.src = "../../assets/asics.svg";
      } else if (40 < id && id < 51) {
        shoeBox.src = "../../assets/reebok.png";
      } else if (50 < id && id < 61) {
        shoeBox.src = "../../assets/newbalance.svg";
      } else if (60 < id && id < 71) {
        shoeBox.src = "../../assets/converce.svg";
      }

      document.querySelector("h1").innerHTML = JSON.stringify(
        productProp["name"]
      );

      // console.log(productProp["name"]);

      document.querySelector(".description").innerHTML = JSON.stringify(
        productProp["description"]
      );
      if (localStorage.getItem('"' + productProp["name"] + '"')) {
        document.querySelector(".orderCounter").innerHTML =
          localStorage.getItem('"' + productProp["name"] + '"');
      }
    });
}
if (document.querySelector(".orderCounter").innerHTML === "") {
  document.querySelector(".orderCounter").innerHTML = 0;
}
let counterSetter = document.querySelector;
function increasingNumber() {
  const numberCounter = document.querySelector(".orderCounter");
  const counter = numberCounter.innerHTML++;
  const shoeName = document.querySelector("h1").innerHTML;
  localStorage.setItem(shoeName, counter + 1);
  counterSetter = counter + 1;
}
function decreasingNumber() {
  const numberCounter = document.querySelector(".orderCounter");
  if (numberCounter.innerHTML > 0) {
    const numberCounter = document.querySelector(".orderCounter");
    const counter = numberCounter.innerHTML--;
    const shoeName = document.querySelector("h1").innerHTML;
    localStorage.setItem(shoeName, counter - 1);
    counterSetter = counter - 1;
  }
}
function handelingAddToCart() {
  const shoeName = document.querySelector("h1").innerHTML;
  localStorage.setItem(shoeName, counterSetter);
}
document.querySelector("img").addEventListener("click", () => {
  let orders = JSON.parse(localStorage.getItem("Orders") || "[]");
  orders.push(sObj);
  localStorage.setItem("Orders", JSON.stringify(orders));
});
