const userName = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const pass = document.querySelector("#UserPass");
const reTypedPass = document.querySelector("#reTypedPass");

function signUpBtn(userName, email, pass) {
  if (pass.value === reTypedPass.value) {
    fetch("http://localhost:3000/users/", {
      method: "post",
      body: JSON.stringify({
        userName: userName.value,
        email: email.value,
        password: pass.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then(() => {
        window.location.href = "./loginPage.html";
        localStorage.removeItem("userName");
      });
  }
}
