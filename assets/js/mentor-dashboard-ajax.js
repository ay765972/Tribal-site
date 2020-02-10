$(document).ready(() => {
  let userID =
    document.cookie.match &&
    document.cookie.match(new RegExp("loginUserId" + `=([^;]+)`));
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
  function logOut() {
    deleteAllCookies();
    window.location.replace("/");
  }

  var totalItems = 0;
  var currentTotalItems = 0;
  var currentCount = 0;
  var ptr = 0;
  var idArr = [0];

  function setTableData(userList) {
    currentCount = userList.length;
    $("#mentorDashTBody tr").each((i, e) => {
      $(e).remove();
    });

    var tBody = "";

    userList.forEach(e => {
      let eStatus = "Awaiting";
      if (e.Status === 2) {
        eStatus = "Shortlisted";
      } else if (e.Status === 1) {
        eStatus = "Rejected";
      }
      tBody += `<tr>
            <td>${e.ApplicationDate ? e.ApplicationDate : "-"}</th>
            <td><a href="mentor-form-with-id.html?id=${
              e.UserId
            }" style="color: black">${e.Name ? e.Name : "-"}</a></td>
            <td>${e.LanguagePreference1 ? e.LanguagePreference1 : "-"}</td>
            <td>${eStatus}</td>
        </tr>`;
    });

    $("#mentorDashTBody").append(tBody);
  }

  function getMentorList(k) {
    if (k === 1) {
      ptr = ptr + 1;
    } else if (k === -1 && ptr === 0) {
      ptr = 0;
    } else if (k === -1 && ptr > 0) {
      ptr = ptr - 1;
    }
    var menteeDashData = {
      ApiKey: "387701ce17103bdd13cbc7acfcf840be9049a85f",
      UserId: currentUserId,
      UpdatedId: idArr[ptr],
      UserType: "M_101"
    };
    $.ajax({
      type: "POST",
      data: menteeDashData,
      url: "https://goal.joshtalks.org/api/app/user/GetUserList",
      success: function(data) {
        console.log(data.response);
        if (data && data.response) {
          totalItems = data.response.TotalCount;
          if (k === 0) {
            idArr[1] = data.response.UpdatedId;
          } else if (k === 1 && !idArr[ptr + 1]) {
            idArr[ptr + 1] = data.response.UpdatedId;
          }
          if (k === -1) {
            currentTotalItems = currentTotalItems - currentCount;
          } else {
            currentTotalItems += data.response.Count;
          }
          currentCount = data.response.Count;
          setTableData(data.response.User);
          handlePagingBtns();
        }
      }
    });
  }

  $("#prevM").click(function() {
    getMentorList(-1);
  });

  $("#fwdM").click(function() {
    if (currentTotalItems !== totalItems) {
      getMentorList(1);
    }
  });

  function handlePagingBtns() {
    if (ptr === 0) {
      $("#prevM").prop("disabled", true);
    } else {
      $("#prevM").prop("disabled", false);
    }
    if (currentTotalItems === totalItems) {
      $("#fwdM").prop("disabled", true);
    } else {
      $("#fwdM").prop("disabled", false);
    }
  }

  getMentorList(0);

  $("#logoutBtn").click(function(e) {
    logOut();
  });
});
