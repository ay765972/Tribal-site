var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  // if (n == 0) {
  //   document.getElementById("prevBtn").style.display = "none";
  // } else {
  //   document.getElementById("prevBtn").style.display = "inline";
  // }
  // if (n == (x.length - 1)) {
  //   document.getElementById("nextBtn").innerHTML = "Submit";
  // } else {
  //   document.getElementById("nextBtn").innerHTML = "Next";
  // }
  switch (n) {
    case 0:
      document.getElementById("prevBtn").style.display = "none";
      document.getElementById("subBtn").style.display = "none";
      document.getElementById("nextBtn").style.display = "inline";
      break;
    case 1:
      document.getElementById("nextBtn").style.display = "none";
      document.getElementById("subBtn").style.display = "inline";
      document.getElementById("prevBtn").style.display = "inline";
      break;
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    document.getElementsByClassName("step2")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  var i1, x1 = document.getElementsByClassName("step2");
  for (i1 = 0; i1 < x1.length; i1++) {
    x1[i1].className = x1[i1].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
  x1[n].className += " active";
}
//Validations
$('document').ready(function(){
  $('#firstName').on('keypress', function(e){
    return e.metaKey || 
        e.which <= 0 || 
        e.which == 8 || 
        /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); 
    });
    $('#middleName').on('keypress', function(e){
      return e.metaKey || 
          e.which <= 0 || 
          e.which == 8 || 
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); 
    });
     $('#lastName').on('keypress', function(e){
      return e.metaKey || 
          e.which <= 0 || 
          e.which == 8 || 
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); 
    });
    $('#fatherName').on('keypress', function(e){
      return e.metaKey || 
          e.which <= 0 || 
          e.which == 8 || 
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); 
    });
    $('#motherName').on('keypress', function(e){
      return e.metaKey || 
          e.which <= 0 || 
          e.which == 8 || 
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); 
    });
    $('#phoneNumber').on('keypress', function(e){
      return e.metaKey || 
          e.which <= 0 || 
          e.which == 8 || 
          /[0-9]/.test(String.fromCharCode(e.which)); 
    });
    $('#TribeName').on('keypress', function(e){
      return e.metaKey || 
          e.which <= 0 || 
          e.which == 8 || 
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); 
    });
  
});