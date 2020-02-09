var secret = "Goal(lasfk!@#$%^&*()FHKBKahksaf+_)(*&^%$#fdaskfa)Goal";
var secret2 = "Josh(fafgY/xx$<y3nXJnA,$IYgzf$H@<x_YUxL4yz89r5uxOR%+)Talks";

$(document).ready(() => {
  let userID =
    document.cookie.match &&
    document.cookie.match(new RegExp("loginUserId" + `=([^;]+)`));
  let authToken =
    document.cookie.match &&
    document.cookie.match(new RegExp("AuthToken" + `=([^;]+)`));
  var currentUserId = userID && userID[1];
  if (!currentUserId) {
    alert("user not logged in");
    window.location.replace("/login");
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
    if (currentUserId) {
      var apiUrl = "https://goal.joshtalks.org/api/app/user/GetUserLogout";
      logoutData = {
        ApiKey: SHA1(secret2 + apiUrl.split("/")[apiUrl.split("/").length - 1]),
        UserId: currentUserId,
        UserType: 0,
        AuthToken: authToken[1]
      };

      $.post(apiUrl, logoutData, function(data, status) {
        if (data.returncode == 200) {
          deleteAllCookies();
          window.location.replace("/");
        } else {
          alert(data.msg);
        }
      });
    }
  });
});
