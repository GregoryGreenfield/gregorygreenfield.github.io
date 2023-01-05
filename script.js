function scrollToForm(divName) {
  document.querySelector("#" + divName).scrollIntoView({ behavior: "smooth" });
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
