var secret = "Goal(lasfk!@#$%^&*()FHKBKahksaf+_)(*&^%$#fdaskfa)Goal";
var secret2 = "Josh(fafgY/xx$<y3nXJnA,$IYgzf$H@<x_YUxL4yz89r5uxOR%+)Talks";

$(document).ready(() => {
  let userID =
    document.cookie.match &&
    document.cookie.match(new RegExp("loginUserId" + `=([^;]+)`));
  let authToken =
    document.cookie.match &&
    document.cookie.match(new RegExp("AuthToken" + `=([^;]+)`));
  let userType =
    document.cookie.match &&
    document.cookie.match(new RegExp("UserType" + `=([^;]+)`));
  var currentUserId = userID && userID[1];
  if (!currentUserId) {
    alert("user not logged in");
    window.location.replace("/login");
  }

  var apiUrl =
    userType[1] == 0
      ? "https://goal.joshtalks.org/api/app/user/GetQueryDashboardData"
      : "https://goal.joshtalks.org/api/app/user/GetAdminDashboardData";
  var checkData = {
    ApiKey: SHA1(secret2 + apiUrl.split("/")[apiUrl.split("/").length - 1]),
    UserId: currentUserId,
    AuthToken: authToken[1]
  };
  var triDashData = [];

  $.post(apiUrl, checkData, function(data, status) {
    if (data.returncode == 200) {
      if (data && data.response && data.response.length > 0) {
        triDashData = data.response;
        setTriDashData();
      }
    } else {
      alert(data.msg);
    }
  });

  function setTriDashData() {
    if (triDashData && triDashData.length > 0) {
      var triContent = "";

      triDashData.forEach(e => {
        triContent += `<div class="col-12 col-md-3">`;
        if (e.QueryCount !== 0) {
          triContent += `<a href="checklist.html?type=${e.QueryType}">`;
        }
        triContent += `<div class="card img-fluid mx-2 my-2"
                style="width: 350px;min-width: 150px;height:200px;min-height:150px;border-radius: 30px;text-decoration: none;">
                <div class="card-body" style="vertical-align:center">
                    <h4 class="card-subtitle mt-5 text-center" style="color: black">${
                      e.Title ? e.Title : "-"
                    }</h4>
                    <h5 class="card-text text-center mb-3 mt-2 colored">${
                      e.QueryCount || e.QueryCount === 0 ? e.QueryCount : "-"
                    }</h5>
                </div>
            </div>`;
        if (e.QueryCount !== 0) {
          triContent += `
              </a>`;
        }
        triContent += `</div>`;
      });
      $("#triContainer").append(triContent);
    }
  }
});
