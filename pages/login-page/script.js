const userEmail = document.querySelector("#userEmail");
const userPass = document.querySelector("#UserPass");
function signinBtn(userEmail, userPass) {
  fetch("http://localhost:3000/users/")
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      let userProp;
      console.log(response);
      // response.find(usr=>lowerCasedUserEmail === userProp["email"] && userPassTextCounter === userProp["password"])
      for (let i = 0; i < response.length; i++) {
        userProp = response[i];
        let userEmailTextCounter = userEmail.value;
        let lowerCasedUserEmail = userEmailTextCounter.toLowerCase();

        let userPassTextCounter = userPass.value;
        console.log(
          lowerCasedUserEmail,
          userProp["email"],
          userPassTextCounter,
          userProp["password"]
        );

        if (
          lowerCasedUserEmail === userProp["email"] &&
          userPassTextCounter === userProp["password"]
        ) {
          console.log(userProp["email"]);
          console.log(userProp["password"]);
          window.location.href = "../home-page/index.html";
          localStorage.setItem("userName", userProp["userName"]);
        }
        if (userPassTextCounter !== userProp["password"]) {
          userPass.classList.remove("border-0");
          userPass.classList.add("border-2");
          userPass.classList.add("border-danger");
        }
        if (lowerCasedUserEmail !== userProp["email"]) {
          userEmail.classList.remove("border-0");
          userEmail.classList.add("border-2");
          userEmail.classList.add("border-danger");
        }
      }
    });
}
let clickedTimeCounter = 0;

function shorOrHideBtn() {
  // document.querySelector("svg.eye").style = "padding:0.5rem"

  clickedTimeCounter = clickedTimeCounter + 1;
  if (clickedTimeCounter % 2 === 1) {
    userPass.type = "text";
  } else {
    userPass.type = "password";
  }
}
function onlyCalledOnce() {
  localStorage.setItem("Orders", "");
}
onlyCalledOnce();
function clearingLocalHost() {
  localStorage.clear();
}
