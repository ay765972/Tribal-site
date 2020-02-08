$(document).ready(() => {

  function getIdFromSelect(id) {
    var selectIdValue1 = $("#" + id).val();
    var selectIdValue2 = selectIdValue1 ? selectIdValue1.split('#') : null;
    return selectIdValue2 && selectIdValue2.length > 0 && selectIdValue2[1] ? Number(selectIdValue2[1]) : null;
  }

  const stateData = {
    ApiKey: "4970d6c45cf71d337b5588be68e5c72131ea526d",
    SelectedType: "State",
    TargetedType: "",
    SelectedId: ""
  }
  //let idList=[];
  $.ajax({ method: "POST", url: "https://goal.joshtalks.org/api/app/GetLocations", data: stateData }).then(data => {
    //Populate the state drop down
    console.log(data.response[0])
    //const stateList = data.response.length
    var option = '';

    var stateLen = data.response.length
    console.log(stateLen)
    for (var i = 0; i < stateLen; i++) {
      console.log(data.response[i].Name)
      option = '<option value="' + data.response[i].Name + "#" + data.response[i].Id + '">' + data.response[i].Name + '</option>';
      // option = `<option value="${data.response[i].Name}#${data.response[i].Id}">${data.response[i].Name}</option>`
      $('#chooseDept').append(option);
    }
  })

  $("#submit").click(function (e) {
    e.preventDefault();
    if (!$("form[name='queryForm']").valid()) {
      return;
    }
    var apiObj = {
      ApiKey: "5e8bd59aa448f007cd571f67e63ce75be2a2d0c5",
      StateId: getIdFromSelect('chooseDept'),
      FirstName: $("#FirstName").val(),
      LastName: $("#lastName").val(),
      EmailId: $("#email").val(),
      PhoneNumber: $("#phone").val(),
      Feedback: $("#Feedback").val()
    }
    $.ajax({ method: "POST", url: "https://goal.joshtalks.org/api/app/user/SubmitNewQuery", data: apiObj }).then(data => {
      //Populate the state drop down
      console.log(data);
      if (data && data.returncode === 200) {
        window.location.replace('/');
      }
    })
    return false;
  })
})