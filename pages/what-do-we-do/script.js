const intro_carousel = $("#intro-carousel");
let counter = 0;
$("#intro-carousel").on("slide.bs.carousel", function (e) {
  counter++;
  if (counter === 2) {
    $("#intro-carousel-next-button").text("Get Started");
  }
  if (e.to === 0) {
    e.preventDefault();
    // alert("aaa");
    window.location.href = "../login-page/index.html";
  }
});
