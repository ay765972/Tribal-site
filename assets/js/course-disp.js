var currentTab = 0; // Current tab is set to be the first tab (0)
init(); // Display the crurrent tab

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  var y = document.getElementsByClassName("tab-header");
  x[currentTab].style.display = "none";
  y[n].className += " active";
  y[currentTab].className = y[currentTab].className.replace(" active", "");
  x[n].style.display = "block";
  currentTab=n;
}

function init() {
  var x = document.getElementsByClassName("tab");
  var y = document.getElementsByClassName("tab-header");
  y[0].className += " active";
  x[0].style.display = "block";
  currentTab=0;
}
