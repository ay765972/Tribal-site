
$(document).ready(() => {
  var currentUserId = window.sessionStorage.getItem('loginUserId');
  if (currentUserId) {
    $("#login").remove();
  } else {
    $("#logout").remove();
  }
  $("#logout").click(function (e) {
    e.preventDefault();
    window.sessionStorage.removeItem('loginUserId');
    window.location.replace('/');
  })
  $("#login").click(function (e) {
    e.preventDefault();
    window.location.replace('/login');
  })
})