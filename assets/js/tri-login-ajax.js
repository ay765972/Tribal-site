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
      $.post(apiUrl, loginData, function(data, status) {
        if (data.returncode == 200) {
          console.log(data.response.AuthToken);
          if (data && data.response && data.response.UserId) {
            window.sessionStorage.setItem("loginUserId", data.response.UserId);
            window.sessionStorage.setItem("AuthToken", data.response.AuthToken);
            window.location.replace("/check");
          }
        } else {
          captchaText();
          alert(data.msg);
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
  function captchaText() {
    var no = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var x = no[Math.floor(Math.random() * no.length)];
    for (var i = 0; i < 6; i++) {
      x = x + no[Math.floor(Math.random() * no.length)];
    }
    document.getElementById("txtCaptcha").value = x;
    document.getElementById("CaptchaDiv").innerHTML = x;
  }
  window.onload = captchaText();

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
