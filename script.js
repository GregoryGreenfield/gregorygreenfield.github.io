// Javascript implements the menu and scroll functionality.
// topnav = no drop down menu, topnav.responsive = drop down menu.
var x = document.getElementById("myTopnav");

// scrollToForm makes a smooth glide to the selected part and then closes the menu by reverting to topnav
function scrollToForm(divName) {
  document.querySelector("#" + divName).scrollIntoView({ behavior: "smooth" });
  // Close the drop down menu
  x.className = "topnav";
}

// When the hamburger is pressed, topnav.responsive = drop down menu occurs.
function myFunction() {
  if (x.className === "topnav") {
    x.className += " responsive";
  }
  // If clicked again, drop down menu disappears.
  else {
    x.className = "topnav";
  }
}

// Closes the drop down menu if it is open and user has clicked elsewhere.
document.addEventListener("click", function (e) {
  var container = document.getElementById("Home");
  if (!container.contains(e.target)) {
    x.className = "topnav";
    // container.style.display = "none";
  }
});
