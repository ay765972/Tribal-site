function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function setFormData(usrData) {
  if (usrData && Object.keys(usrData).length > 0) {
    Object.keys(usrData).forEach(u => {
      if (u === "Name") {
        $("#name").prop("disabled", true);
        $("#name").val(usrData[u]);
      }
      if (u === "FatherName") {
        $("#fatherName").prop("disabled", true);
        $("#fatherName").val(usrData[u]);
      }
      if (u === "FatherOccupation") {
        $("#fatherOccupation").prop("disabled", true);
        $("#fatherOccupation").val(usrData[u]);
      }
      if (u === "MotherName") {
        $("#motherName").prop("disabled", true);
        $("#motherName").val(usrData[u]);
      }
      if (u === "MotherOccupation") {
        $("#motherOccupation").prop("disabled", true);
        $("#motherOccupation").val(usrData[u]);
      }
      if (u === "Gender") {
        $("#chooseGender").prop("disabled", true);
        $("#chooseGender").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseGender").val(usrData[u]);
      }
      if (u === "IsPVTG") {
        $("#ispvtgY").prop("disabled", true);
        $("#ispvtgN").prop("disabled", true);
        if (usrData[u]) {
          $("#ispvtgY").prop("checked", true);
        } else {
          $("#ispvtgN").prop("checked", true);
        }
      }
      if (u === "PerVillageName") {
        $("#PchooseVillage").prop("disabled", true);
        $("#PchooseVillage").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#PchooseVillage").val(usrData[u]);
      }
      if (u === "PerDisttName") {
        $("#PchooseDistrict").prop("disabled", true);
        $("#PchooseDistrict").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#PchooseDistrict").val(usrData[u]);
      }
      if (u === "PerSubDisttName") {
        $("#PchooseSubDistrict").prop("disabled", true);
        $("#PchooseSubDistrict").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#PchooseSubDistrict").val(usrData[u]);
      }
      if (u === "PerStateName") {
        $("#PchooseState").prop("disabled", true);
        $("#PchooseState").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#PchooseState").val(usrData[u]);
      }
      if (u === "PermanentAddress") {
        $("#Paddress").prop("disabled", true);
        $("#Paddress").val(usrData[u]);
      }
      if (u === "ResVillageName") {
        $("#chooseVillage").prop("disabled", true);
        $("#chooseVillage").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseVillage").val(usrData[u]);
      }
      if (u === "ResDisttName") {
        $("#chooseDistrict").prop("disabled", true);
        $("#chooseDistrict").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseDistrict").val(usrData[u]);
      }
      if (u === "ResSubDisttName") {
        $("#chooseSubDistrict").prop("disabled", true);
        $("#chooseSubDistrict").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseSubDistrict").val(usrData[u]);
      }
      if (u === "ResStateName") {
        $("#chooseState").prop("disabled", true);
        $("#chooseState").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseState").val(usrData[u]);
      }
      if (u === "ResidentialAddress") {
        $("#address").prop("disabled", true);
        $("#address").val(usrData[u]);
      }
      if (u === "Question1") {
        if (usrData[u]) {
          $("#que1").append(usrData[u]);
        } else {
          $("#que1").hide();
        }
      }
      if (u === "Answer1") {
        if (usrData[u]) {
          $("#ans1").prop("disabled", true);
          $("#ans1").val(usrData[u]);
        } else {
          $("#ans1").hide();
        }
      }
      if (u === "Question2") {
        if (usrData[u]) {
          $("#que2").append(usrData[u]);
        } else {
          $("#que2").hide();
        }
      }
      if (u === "Answer2") {
        if (usrData[u]) {
          $("#ans2").prop("disabled", true);
          $("#ans2").val(usrData[u]);
        } else {
          $("#ans2").hide();
        }
      }
      if (u === "Question3") {
        if (usrData[u]) {
          $("#que3").append(usrData[u]);
        } else {
          $("#que3").hide();
        }
      }
      if (u === "Answer3") {
        if (usrData[u]) {
          $("#ans3").prop("disabled", true);
          $("#ans3").val(usrData[u]);
        } else {
          $("#ans3").hide();
        }
      }
      if (u === "DOB") {
        const now = new Date(usrData[u]);

        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);

        const today = now.getFullYear() + "-" + month + "-" + day;

        $("#dob").prop("disabled", true);
        $("#dob").val(today);
      }
      if (u === "EmailId") {
        $("#email").prop("disabled", true);
        $("#email").val(usrData[u].replace("@", "[at]").replace(".", "[dot]"));
      }
      if (u === "PhoneNumber") {
        $("#phoneNumber").prop("disabled", true);
        $("#phoneNumber").val(usrData[u]);
      }
      if (u === "IsNominate") {
        $("#nominationY").prop("disabled", true);
        $("#nominationN").prop("disabled", true);
        if (usrData[u]) {
          $("#nominationY").prop("checked", true);
        } else {
          $("#nominationN").prop("checked", true);
          $("#nominationDrop1Head").hide();
        }
      }
      if (u === "NominateBy") {
        $("#nominationDrop1").prop("disabled", true);
        $("#nominationDrop1").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#nominationDrop1").val(usrData[u]);
      }
      if (u === "TribeName") {
        $("#TribeName").prop("disabled", true);
        $("#TribeName").val(usrData[u]);
      }
      if (u === "EduQualification") {
        $("#EduQualification").prop("disabled", true);
        $("#EduQualification").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#EduQualification").val(usrData[u]);
      }
      if (u === "AccessToTech") {
        $("#chooseTech").prop("disabled", true);
        $("#chooseTech").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseTech").val(usrData[u]);
      }
      if (u === "IsHaveWorkExp") {
        $("#workExpY").prop("disabled", true);
        $("#workExpN").prop("disabled", true);
        if (usrData[u]) {
          $("#workExpY").prop("checked", true);
        } else {
          $("#workExpN").prop("checked", true);
          $("#workExpDD").hide();
        }
      }
      if (u === "WorkExperience") {
        $("#workExpDD").prop("disabled", true);
        $("#workExpDD").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#workExpDD").val(usrData[u]);
      }
      if (u === "IsDifferentlyAbled") {
        $("#isDiffY").prop("disabled", true);
        $("#isDiffN").prop("disabled", true);
        if (usrData[u]) {
          $("#isDiffY").prop("checked", true);
        } else {
          $("#isDiffN").prop("checked", true);
        }
      }
      if (u === "IsAwardRec") {
        $("#isAwardY").prop("disabled", true);
        $("#isAwardN").prop("disabled", true);
        if (usrData[u]) {
          $("#isAwardY").prop("checked", true);
        } else {
          $("#isAwardN").prop("checked", true);
          $("#awardTypeDD").hide();
        }
      }
      if (u === "Award") {
        $("#awardTypeDD").prop("disabled", true);
        $("#awardTypeDD").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#awardTypeDD").val(usrData[u]);
      }
      if (u === "MemberOfSHG") {
        $("#shgY").prop("disabled", true);
        $("#shgN").prop("disabled", true);
        if (usrData[u]) {
          $("#shgY").prop("checked", true);
        } else {
          $("#shgN").prop("checked", true);
        }
      }
      if (u === "LoanAvailed") {
        $("#loanY").prop("disabled", true);
        $("#loanN").prop("disabled", true);
        if (usrData[u]) {
          $("#loanY").prop("checked", true);
        } else {
          $("#loanN").prop("checked", true);
        }
      }
      if (u === "BankAccount") {
        $("#bankY").prop("disabled", true);
        $("#bankN").prop("disabled", true);
        if (usrData[u]) {
          $("#bankY").prop("checked", true);
        } else {
          $("#bankN").prop("checked", true);
        }
      }
      // if (u === "DomicileLocation") {
      //   $("#fatherName").prop('disabled', true);
      //   $("#firstName").val(usrData[u]);
      // }
      if (u === "AnnualIncome") {
        $("#familyIncome").prop("disabled", true);
        $("#familyIncome").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#familyIncome").val(usrData[u]);
      }
      if (u === "AreaOfInterest") {
        $("#AreaOfInterest").prop("disabled", true);
        $("#AreaOfInterest").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#AreaOfInterest").val(usrData[u]);
      }
      if (u === "AccessToInternetInArea") {
        $("#mobileY").prop("disabled", true);
        $("#mobileN").prop("disabled", true);
        if (usrData[u]) {
          $("#mobileY").prop("checked", true);
        } else {
          $("#mobileN").prop("checked", true);
        }
      }
      if (u === "LookingForJob") {
        $("#jobY").prop("disabled", true);
        $("#jobN").prop("disabled", true);
        if (usrData[u]) {
          $("#jobN").prop("checked", true);
          $("#jobBuisnessInterest").hide();
        } else {
          $("#jobY").prop("checked", true);
        }
      }
      if (u === "StartBussiness") {
        $("#businessY").prop("disabled", true);
        $("#businessN").prop("disabled", true);
        if (usrData[u]) {
          $("#businessY").prop("checked", true);
        } else {
          $("#businessN").prop("checked", true);
        }
      }
      if (u === "Status") {
        $("#status").val(usrData[u]);
      }
      // if (u === "IsProfessional") {
      //   $("#bankY").prop('disabled', true);
      //   $("#bankN").prop('disabled', true);
      //   if (usrData[u]) {
      //     $("#bankY").prop('checked', true);
      //   } else {
      //     $("#bankN").prop('checked', true);
      //   }
      // }
      if (u === "LanguagePreference1") {
        $("#chooseLanguage1").prop("disabled", true);
        $("#chooseLanguage1").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseLanguage1").val(usrData[u]);
      }
      if (u === "LanguagePreference2") {
        $("#chooseLanguage2").prop("disabled", true);
        $("#chooseLanguage2").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseLanguage2").val(usrData[u]);
      }
      if (u === "LanguagePreference3") {
        $("#chooseLanguage3").prop("disabled", true);
        $("#chooseLanguage3").append(
          "<option value='" + usrData[u] + "'>" + usrData[u] + "</option>"
        );
        $("#chooseLanguage3").val(usrData[u]);
      }
      // if (u === "ProfessionalSummary") {
      //   $("#chooseLanguage3").prop('disabled', true);
      //   $("#chooseLanguage3").val(usrData[u]);
      // }
      if (u === "PvtgUrl") {
        if (usrData[u]) {
          $("#casteDoc").prop("href", usrData[u]);
        } else {
          $("#casteDocuments").hide();
        }
      }
      if (u === "NomUrl") {
        if (usrData[u]) {
          $("#nomDoc").prop("href", usrData[u]);
        } else {
          $("#nominatedDocuments").hide();
        }
      }
      // if (u === "AgeUrl") {
      //   if (usrData[u]) {
      //     $("#dobDoc").prop('href', usrData[u]);
      //   } else {
      //     $('#dobDocuments').hide();
      //   }
      // }
      if (u === "EduUrl") {
        if (usrData[u]) {
          $("#eduDoc").prop("href", usrData[u]);
        } else {
          $("#educationDocuments").hide();
        }
      }
      if (u === "MsmeUrl") {
        if (usrData[u]) {
          $("#MSMERegistrationDetailsInput").prop("href", usrData[u]);
        } else {
          $("#MSMERegistrationDetails").hide();
        }
      }
      if (u === "DisabilityUrl") {
        if (usrData[u]) {
          $("#disabilityDoc").prop("href", usrData[u]);
        } else {
          $("#disabilityDocuments").hide();
        }
      }
      if (u === "AwardUrl") {
        if (usrData[u]) {
          $("#awardDoc").prop("href", usrData[u]);
        } else {
          $("#awardDocuments").hide();
        }
      }
      if (u === "LoanUrl") {
        if (usrData[u]) {
          $("#loanDoc").prop("href", usrData[u]);
        } else {
          $("#loanDocuments").hide();
        }
      }
      if (u === "DobUrl") {
        if (usrData[u]) {
          $("#dobDoc").prop("href", usrData[u]);
        } else {
          $("#dobDocuments").hide();
        }
      }
      if (u === "WorkUrl") {
        if (usrData[u]) {
          $("#workDoc").prop("href", usrData[u]);
        } else {
          $("#workexpDocuments").hide();
        }
      }
      // if (u === "ResumeUrl") {
      //   if (usrData[u]) {
      //     $("#chooseLanguage2").prop('href', usrData[u]);
      //   } else {
      //     $('#ResumeUrl').hide();
      //   }
      // }
    });
  }
}

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
  var paramId = GetURLParameter("id");
  if (paramId) {
    const menteeUser = {
      ApiKey: "46283ef8ca3c65c78841630081949527c87179f9",
      UserId: currentUserId,
      SelectedUserId: paramId,
      AuthToken: authToken[1]
    };
    //let idList=[];
    $.ajax({
      method: "POST",
      url: "https://goal.joshtalks.org/api/app/user/GetUserDetails",
      data: menteeUser
    }).then(data => {
      //Populate the state drop down

      if (data && data.returncode === 200) {
        setFormData(data.response);
      } else {
        alert("User Not Found!");
        window.location.replace("/dashboard");
      }
    });
  }

  $("#update").click(function(e) {
    if (paramId) {
      const validateVal = $("#validate").val();
      const statusVal = $("#status").val();
      const updateUser = {
        ApiKey: "990f3391ad9e79a2caeb338028eb84b48d36de94",
        UserId: currentUserId,
        SelectedUserId: paramId,
        IsValidate: validateVal ? true : false,
        Status: Number(statusVal),
        AuthToken: authToken[1]
      };
      //let idList=[];
      $.ajax({
        method: "POST",
        url: "https://goal.joshtalks.org/api/app/user/UpdateUserStatus",
        data: updateUser
      }).then(data => {
        //Populate the state drop down
        if (data && data.returncode === 200) {
          alert("Application Successfully Updated!");
          window.location.replace("/dashboard");
        } else {
          alert("Application Failed to Update!");
        }
      });
    }
  });
});
