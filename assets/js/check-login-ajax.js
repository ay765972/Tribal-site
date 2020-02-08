$(document).ready(() => {
  var currentUserId = window.sessionStorage.getItem("loginUserId");
  if (!currentUserId) {
    alert("user not logged in");
    window.location.replace("/login");
  }
  $("#logout").click(function(e) {
    e.preventDefault();
    window.sessionStorage.removeItem("loginUserId");
    window.location.replace("/");
  });
});
