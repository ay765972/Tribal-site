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
      document.getElementById("prevBtn1").style.display = "none";
      document.getElementById("prevBtn2").style.display = "none";
      document.getElementById("nextBtn2").style.display = "none";
      document.getElementById("subBtn").style.display = "none";
      document.getElementById("nextBtn1").style.display = "inline";
      break;
    case 1:
      document.getElementById("nextBtn1").style.display = "none";
      document.getElementById("prevBtn2").style.display = "none";
      document.getElementById("subBtn").style.display = "none";
      document.getElementById("prevBtn1").style.display = "inline";
      document.getElementById("nextBtn2").style.display = "inline";
      break;
    case 2:
      document.getElementById("nextBtn1").style.display = "none";
      document.getElementById("prevBtn1").style.display = "none";
      document.getElementById("nextBtn2").style.display = "none";
      document.getElementById("prevBtn2").style.display = "inline";
      document.getElementById("subBtn").style.display = "inline";
      break;
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  if (n === 1 && !$("form[name='regForm']").valid()) {
    return;
  }
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


$('document').ready(function(){
  $('#firstName').on('keypress', function(e){
    return e.metaKey || // cmd/ctrl
        e.which <= 0 || // arrow keys
        e.which == 8 || // delete key
        /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); // numbers
    });
    $('#middleName').on('keypress', function(e){
      return e.metaKey || // cmd/ctrl
          e.which <= 0 || // arrow keys
          e.which == 8 || // delete key
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); // numbers
    });
     $('#lastName').on('keypress', function(e){
      return e.metaKey || // cmd/ctrl
          e.which <= 0 || // arrow keys
          e.which == 8 || // delete key
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); // numbers
    });
    $('#fatherName').on('keypress', function(e){
      return e.metaKey || // cmd/ctrl
          e.which <= 0 || // arrow keys
          e.which == 8 || // delete key
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); // numbers
    });
    $('#motherName').on('keypress', function(e){
      return e.metaKey || // cmd/ctrl
          e.which <= 0 || // arrow keys
          e.which == 8 || // delete key
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); // numbers
    });
    $('#phoneNumber').on('keypress', function(e){
      return e.metaKey || // cmd/ctrl
          e.which <= 0 || // arrow keys
          e.which == 8 || // delete key
          /[0-9]/.test(String.fromCharCode(e.which)); // numbers
    });
    $('#TribeName').on('keypress', function(e){
      return e.metaKey || // cmd/ctrl
          e.which <= 0 || // arrow keys
          e.which == 8 || // delete key
          /^[a-zA-Z ]/.test(String.fromCharCode(e.which)); // numbers
    });
});