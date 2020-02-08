
$(document).ready(() => {
  var currentUserId = window.sessionStorage.getItem('loginUserId');
  if (!currentUserId) {
    alert('user not logged in');
    window.location.replace('/login');
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

  var totalItems = 0;
  var currentTotalItems = 0;
  var currentCount = 0;
  var ptr = 0;
  var idArr = [0];

  function setTableData(queryList) {
    currentCount = queryList.length;

    $("#checkListTHead th").each((i, e) => {
      $(e).remove();
    });
    var tHead = `<th scope="col" class="appW">Serial Number</th>
    <th scope="col" class="namW">Name</th>
    <th scope="col" class="scoW">Date</th>`;

    if (GetURLParameter('type').toLowerCase() === 'solved') {
      tHead += `<th scope="col" class="scoW">Updated Date</th>`;
    }

    $("#checkListTHead").append(tHead);

    $("#checkListTBody tr").each((i, e) => {
      $(e).remove();
    });

    var tBody = "";

    queryList.forEach((e, i) => {
      if (GetURLParameter('type').toLowerCase() === 'solved') {
        tBody += `<tr>
                    <td>${i + 1}</th>
                    <td>${e.FirstName} ${e.LastName}</td>
                    <td>${e.CreatedDate ? e.CreatedDate : '-'}</td>
                    <td>${e.StatusUpdatedDate ? e.StatusUpdatedDate : '-'}</td>
                    </tr>`;
      } else {
        tBody += `<tr>
                                  <td>${i + 1}</th>
                                  <td><a href="checkform.html?id=${e.QueryId}" style="color: black">${e.FirstName} ${e.LastName}</a></td>
                                  <td>${e.CreatedDate ? e.CreatedDate : '-'}</td>
                                  </tr>`;

      }
    });

    $("#checkListTBody").append(tBody);
  }

  function getQueryList(k) {
    if (k === 1) {
      ptr = ptr + 1;
    } else if (k === -1 && ptr === 0) {
      ptr = 0;
    } else if (k === -1 && ptr > 0) {
      ptr = ptr - 1;
    }
    var queryDashData = {
      ApiKey: "e4af946a4be63fd6eb66eea02f2bdc3170107b7e",
      UserId: currentUserId,
      Type: GetURLParameter('type'),
      UpdatedId: idArr[ptr],
      AuthToken: sessionStorage.getItem("AuthToken")
    }
    $.ajax({
      type: 'POST',
      data: queryDashData,
      url: 'https://goal.joshtalks.org/api/app/user/GetAllQuery',
      success: function (data) {
        console.log(data.response)
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
          setTableData(data.response.Query);
          handlePagingBtns();
        }
      }
    });
  }

  $("#prevM").click(function () {
    getQueryList(-1);
  });

  $("#fwdM").click(function () {
    if (currentTotalItems !== totalItems) {
      getQueryList(1);
    }
  });

  function handlePagingBtns() {

    if (ptr === 0) {
      $("#prevM").prop('disabled', true);
    } else {
      $("#prevM").prop('disabled', false);
    }
    if (currentTotalItems === totalItems) {
      $("#fwdM").prop('disabled', true);
    } else {
      $("#fwdM").prop('disabled', false);
    }
  }

  getQueryList(0);

})