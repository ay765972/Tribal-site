var secret = "Goal(lasfk!@#$%^&*()FHKBKahksaf+_)(*&^%$#fdaskfa)Goal";
var secret2 = "Josh(fafgY/xx$<y3nXJnA,$IYgzf$H@<x_YUxL4yz89r5uxOR%+)Talks";

$(document).ready(() => {
  $("#loginForm").submit(function(event) {
    // alert("Handler for .submit() called.");
    // event.preventDefault();
    if (!checkform()) {
      return false;
    }

    var loginId = $("#UserID").val();

    var loginPass = $("#pass").val();

    if (loginId && loginPass) {
      var apiUrl = "https://goal.joshtalks.org/api/app/user/TriSignIn";
      loginData = {
        ApiKey: SHA1(secret2 + apiUrl.split("/")[apiUrl.split("/").length - 1]),
        LoginId: loginId,
        LoginPwd: SHA1(secret + loginPass)
      };
      $.ajax({
        type: "POST",
        data: loginData,
        url: apiUrl,
        success: function(data) {
          console.log(data.response);
          if (data && data.response && data.response.UserId) {
            window.sessionStorage.setItem("loginUserId", data.response.UserId);
            window.location.replace("/check");
          }
        }
      });
    }

    return false;
  });
  // Captcha Script

  function checkform() {
    var why = "";

    if ($("#CaptchaInput").val() == "") {
      why += "- Please Enter CAPTCHA Code.\n";
    }
    if ($("#CaptchaInput").val() != "") {
      if (ValidCaptcha($("#CaptchaInput").val()) == false) {
        why += "- The CAPTCHA Code Does Not Match.\n";
      }
    }
    if (why != "") {
      alert(why);
      return false;
    }
    return true;
  }

  var a = Math.ceil(Math.random() * 9) + "";
  var b = Math.ceil(Math.random() * 9) + "";
  var c = Math.ceil(Math.random() * 9) + "";
  var d = Math.ceil(Math.random() * 9) + "";
  var e = Math.ceil(Math.random() * 9) + "";

  var code = a + b + c + d + e;
  document.getElementById("txtCaptcha").value = code;
  document.getElementById("CaptchaDiv").innerHTML = code;

  // Validate input against the generated number
  function ValidCaptcha() {
    var str1 = removeSpaces(document.getElementById("txtCaptcha").value);
    var str2 = removeSpaces(document.getElementById("CaptchaInput").value);
    if (str1 == str2) {
      return true;
    } else {
      return false;
    }
  }

  // Remove the spaces from the entered and generated code
  function removeSpaces(string) {
    return string.split(" ").join("");
  }
});
