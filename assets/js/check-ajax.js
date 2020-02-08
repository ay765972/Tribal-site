
$(document).ready(() => {
  var currentUserId = window.sessionStorage.getItem('loginUserId');
  if (!currentUserId) {
    alert('user not logged in');
    window.location.replace('/login');
  }

  var checkData = {
    ApiKey: "6bd20993d2c49615278863a45bce348416aa870a",
    UserId: currentUserId,
    AuthToken: sessionStorage.getItem("AuthToken")
  }

  var triDashData = [];

  $.ajax({ method: "POST", url: "https://goal.joshtalks.org/api/app/user/GetQueryDashboardData", data: checkData }).then(data => {
    console.log(data);
    if (data && data.response && data.response.length > 0) {
      triDashData = data.response;
      setTriDashData();
    }
  })

  function setTriDashData() {
    if (triDashData && triDashData.length > 0) {
      var triContent = "";


      triDashData.forEach((e) => {
        triContent += `<div class="col-12 col-md-3">`;
        if (e.QueryCount !== 0) {
          triContent += `<a href="checklist.html?type=${e.QueryType}">`;
        }
        triContent += `<div class="card img-fluid mx-2 my-2"
                style="width: 350px;min-width: 150px;height:200px;min-height:150px;border-radius: 30px;text-decoration: none;">
                <div class="card-body" style="vertical-align:center">
                    <h4 class="card-subtitle mt-5 text-center" style="color: black">${e.Title ? e.Title : '-'}</h4>
                    <h5 class="card-text text-center mb-3 mt-2 colored">${e.QueryCount || e.QueryCount === 0 ? e.QueryCount : '-'}</h5>
                </div>
            </div>`;
        if (e.QueryCount !== 0) {
          triContent += `
              </a>`;
        }
        triContent += `</div>`;
      });
      $("#triContainer").append(triContent)
    }
  }

})