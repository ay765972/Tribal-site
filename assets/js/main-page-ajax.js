$(document).ready(() => {
  var currentUserId = window.sessionStorage.getItem('loginUserId');
  if (!currentUserId) {
    alert('user not logged in');
    window.location.replace('/login');
  }


  var adminDashboardData = {
    TotalMentee: {
      title: 'Mentees Registered',
      value: 0
    },
    TotalMentor: {
      title: 'Mentors Registered',
      value: 0
    },
    SelectedMentee: {
      title: 'Number of Selected Mentees',
      value: 0
    },
    SelectedMentor: {
      title: 'Number of Selected Mentors',
      value: 0
    },
    TotalTribes: {
      title: 'Number of Tribes Applied',
      value: 0
    },
    SelectedTribes: {
      title: 'Number of Selected Tribes',
      value: 0
    },
    TotalState: {
      title: 'Number of State Application Filled',
      value: 0
    },
    SelectedState: {
      title: 'Selected State',
      value: 0
    },
    TotalMaleApplied: {
      title: 'Male Applied',
      value: 0
    },
    SelectedMale: {
      title: 'Selected Male',
      value: 0
    },
    TotalFemaleApplied: {
      title: 'Female Applied',
      value: 0
    },
    SelectedFemale: {
      title: 'Selected Female',
      value: 0
    }
  }

  var adminMenteeData = "";

  var adminMentorData = "";

  var cardsColours = ["#068684", "#CE7E0D", "#A8A521", "#D9A824"];

  function logOut() {
    window.sessionStorage.removeItem('loginUserId');
    currentUserId = null;
    window.location.replace('/');
  }

  function setDashboardsData() {

    var resultsPerTable = 4;
    var cards = "";
    Object.keys(adminDashboardData).forEach(function (d, i) {
      if (i % 4 === 0) {
        cards += '<div class="row justify-content-center text-center">'
      }
      cards += `
      <div class="col-12 col-md-3 my-1 img-center">
        <div class="card img-fluid mx-2 my-2"
            style="width: 350px;min-width: 150px;min-height:150px;height:auto;border-radius: 3px;background-color:${cardsColours[i % 4]};">
            <div class="card-body" style="vertical-align:center">
                <p class="card-text text-center mt-3" style="color: white;">${adminDashboardData[d].value}</p>
                <h6 class="card-subtitle mb-3 text-center" style="color: white;">${adminDashboardData[d].title}</h6>
            </div>
        </div>
      </div>`;
      if (i % 4 === 3 || i === adminDashboardData.length - 1) {
        cards += '</div>';
      }
    });

    $("#cards-container").append(cards);

    var menteeeTBody = "";
    adminMenteeData.every(function (m, i) {
      menteeeTBody += `<tr>
        <td>${m.Name}</td>
        <td>${m.AreaOfInterest ? m.AreaOfInterest : '-'}</td>
        <td>${m.Score ? m.Score : '-'}</td>
        </tr>`;
      if (i === resultsPerTable - 1) return false
      else return true
    });

    $("#menteeTBody").append(menteeeTBody);

    var mentorTBody = "";
    adminMentorData.every(function (m, i) {
      mentorTBody += `<tr>
        <td>${m.Name}</td>
        <td>${m.AreaOfInterest ? m.AreaOfInterest : '-'}</td>
        <td>${m.LanguagePreference1 ? m.LanguagePreference1 : '-'}</td>
        </tr>`;
      if (i === resultsPerTable - 1) return false
      else return true
    });

    $("#mentorTBody").append(mentorTBody);

  }

  var adminDashData = {
    ApiKey: "46c3a6cb4d20d9d6434812ccb4cc362a32e054af",
    UserId: currentUserId,
    AuthToken: sessionStorage.getItem("AuthToken")
  }
  $.ajax({
    type: 'POST',
    data: adminDashData,
    url: 'https://goal.joshtalks.org/api/app/user/GetAdminDashboardData',
    success: function (data) {
      console.log(data.response)
      if (data && data.response) {
        if(data.response.Dashboard){
          Object.keys(data.response.Dashboard).forEach(function (d) {
            if (adminDashboardData[d]) {
              adminDashboardData[d].value = data.response.Dashboard[d];
            }
          });
        }
        if(data.response.Mentee){
          adminMenteeData = data.response.Mentee;
        }
        if(data.response.Mentor){
          adminMentorData = data.response.Mentor;
        }

        setDashboardsData();
      }
    }
  });

  $("#logoutBtn").click(function (e) {
    logOut();
  })

})