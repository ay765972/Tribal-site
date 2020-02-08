
$(document).ready(() => {
  var currentUserId = window.sessionStorage.getItem('loginUserId');
  if (!currentUserId) {
    alert('user not logged in');
    window.location.replace('/login');
  }

  function setFormData(queryData) {
    if (queryData) {
      $("#dept").val(queryData.StateName);
      $("#FirstName").val(queryData.FirstName);
      $("#lastName").val(queryData.LastName);
      $("#email").val(queryData.EmailId);
      $("#phone").val(queryData.Phone);
      $("#Feedback").val(queryData.Feedback);
    }
  }


  function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  }

  var queryDashData = {
    ApiKey: "b0cc3dcf90001ba08ae42e19144bbc9c32e80337",
    UserId: currentUserId,
    QueryId: Number(GetURLParameter('id')),
    AuthToken: sessionStorage.getItem("AuthToken")
  }
  $.ajax({
    type: 'POST',
    data: queryDashData,
    url: 'https://goal.joshtalks.org/api/app/user/GetQueryDetails',
    success: function (data) {
      console.log(data.response)
      if (data && data.response) {
        if
          (data.response.Status === "Escalated") {
          $("#escalate").remove();
        }
        setFormData(data.response);
      }
    }
  });

  function changeStatus(k) {
    var queryUpdateData = {
      ApiKey: "19d7e3731ad4c591674da92177fd1e9bc4aa694e",
      UserId: currentUserId,
      QueryId: Number(GetURLParameter('id')),
      Status: Number(k),
      AuthToken: sessionStorage.getItem("AuthToken")
    };
    $.ajax({
      type: 'POST',
      data: queryUpdateData,
      url: 'https://goal.joshtalks.org/api/app/user/UpdateQueryStatus',
      success: function (data) {
        console.log(data.response)
        if (data && data.returncode === 200) {
          window.location.replace('/check');
        }
      }
    });
  }

  $("#escalate").click(function () {
    changeStatus(1);
  })

  $("#close").click(function () {
    changeStatus(2);
  })

})