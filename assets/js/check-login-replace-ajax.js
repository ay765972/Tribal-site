$(document).ready(() => {
  let userID =
    document.cookie.match &&
    document.cookie.match(new RegExp("loginUserId" + `=([^;]+)`));
  var currentUserId = userID && userID[1];
  if (currentUserId) {
    $("#login").remove();
  } else {
    $("#logout").remove();
  }
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  $("#logout").click(function(e) {
    e.preventDefault();
    deleteAllCookies();
    window.location.replace("/");
  });
  $("#login").click(function(e) {
    e.preventDefault();
    window.location.replace("/login");
  });
});
