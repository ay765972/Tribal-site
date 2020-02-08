var VillageData = ''
var VillageName = ''
var VillageId = ''

var SubDistrictData = ''
var SubDistrictName = ''
var SubDistrictId = ''

var DistrictData = ''
var DistrictName =''
var DistrictId =''

var StateData = ''
var StateName = ''
var StateId = ''

var PDistrictData = ''
var PDistrictName =''
var PDistrictId =''

var PVillageData = ''
var PVillageName = ''
var PVillageId = ''

var PSubDistrictData = ''
var PSubDistrictName = ''
var PSubDistrictId = ''

var PStateData = ''
var PStateName = ''
var PStateId = ''

var UserID = ''
var NewUserID = ''

var chooseTechData = ''
var chooseTechName = ''
var chooseTechId = ''

var EduQualificationData = ''
var EduQualificationName = ''
var EduQualificationId = ''

var AreaInterestData = ''
var AreaInterestName = ''
var AreaInterestId = ''

var IntSubCatData = ''
var IntSubCatName = ''
var IntSubCatId = ''

var chooseLanguage1Data = ''
var chooseLanguage1Name = ''
var chooseLanguage1Id = ''

var chooseLanguage2Data = ''
var chooseLanguage2Name = ''
var chooseLanguage2Id = ''

var chooseLanguage3Data = ''
var chooseLanguage3Name = ''
var chooseLanguage3Id = ''

var question1 = "What are your expectations from the program?";
var question2 = "How would you as a mentor be able to bring a difference in the youth who you would be mentoring?";
var question3 = "What is that one issue that you are really passionate about and would want to change?";


$(document).ready(()=>{
  $("#que1").append(question1);
  $("#que2").append(question2);
  $("#que3").append(question3);
    const stateData={
      ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
      SelectedType:"State",
      TargetedType:"",
      SelectedId:""
    }

    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:stateData}).then(data=>{
        //Populate the state drop down
        console.log(data.response[0])
        var option = '';
  
        var stateLen = data.response.length
        console.log(stateLen)
        for (var i=0;i<stateLen;i++){
          console.log(data.response[i].Name)
          option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
          // option = `<option value="${data.response[i].Name}#${data.response[i].Id}">${data.response[i].Name}</option>`
          $('#chooseState').append(option);
          $('#PchooseState').append(option);
        }
      })
      
    $("#chooseState").on("change",(e)=>{
      StateData=e.target.value.split("#");
      StateName=StateData[0];
      StateId=StateData[1];
      const districtData={
        ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
        SelectedType:"State",
        TargetedType:"Distt",
        SelectedId:StateId
      }
      
      //District call
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:districtData}).then(data=>{
        console.log(data.response)
          //Populate the district drop down
          console.log(data.response[0])
          var option = '';
          var stateLen = data.response.length
          console.log(stateLen)
          for (var i=0;i<stateLen;i++){
            console.log(data.response[i].Name)
            option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
            $('#chooseDistrict').append(option);
    
          }
      })
    })
      
    $("#PchooseState").on("change",(e)=>{
      PStateData=e.target.value.split("#");
      PStateName=PStateData[0];
      PStateId=PStateData[1];
      const districtData={
        ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
        SelectedType:"State",
        TargetedType:"Distt",
        SelectedId:PStateId
      }
      
      //District call
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:districtData}).then(data=>{
        console.log(data.response)
          //Populate the district drop down
          console.log(data.response[0])
          //const stateList = data.response.length
          var option = '';
          var stateLen = data.response.length
          console.log(stateLen)
          for (var i=0;i<stateLen;i++){
            console.log(data.response[i].Name)
            option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
            $('#PchooseDistrict').append(option);
    
          }
      })
    })
  
    $("#chooseDistrict").on("change",(e)=>{
      DistrictData=e.target.value.split("#");
      DistrictName=DistrictData[0];
      DistrictId=DistrictData[1];
      const subDistrictData={
        ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
        SelectedType:"Distt",
        TargetedType:"Sub_Distt",
        SelectedId:DistrictId
      }
      
      //SubDistrict call
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:subDistrictData}).then(data=>{
        console.log(data.response)
          //Populate the sub district drop down
          console.log(data.response[0])
          //const stateList = data.response.length
          var option = '';
    
          var districtLen = data.response.length
          console.log(districtLen)
          for (var i=0;i<districtLen;i++){
            console.log(data.response[i].Name)
            option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
            $('#chooseSubDistrict').append(option);
    
          }
      })
    })
  
    $("#PchooseDistrict").on("change",(e)=>{
      PDistrictData=e.target.value.split("#");
      PDistrictName=PDistrictData[0];
      PDistrictId=PDistrictData[1];
      const subDistrictData={
        ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
        SelectedType:"Distt",
        TargetedType:"Sub_Distt",
        SelectedId:PDistrictId
      }
      
      //SubDistrict call
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:subDistrictData}).then(data=>{
        console.log(data.response)
          //Populate the sub district drop down
          console.log(data.response[0])
          //const stateList = data.response.length
          var option = '';
    
          var districtLen = data.response.length
          console.log(districtLen)
          for (var i=0;i<districtLen;i++){
            console.log(data.response[i].Name)
            option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
            $('#PchooseSubDistrict').append(option);
    
          }
      })
    })

    $("#chooseSubDistrict").on("change",(e)=>{
        SubDistrictData=e.target.value.split("#");
        SubDistrictName=SubDistrictData[0];
        SubDistrictId=SubDistrictData[1];
        VillageData={
          ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
          SelectedType:"Sub_Distt",
          TargetedType:"Village",
          SelectedId:SubDistrictId
        }
        
        //Village call
        $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:VillageData}).then(data=>{
          console.log(data.response)
            //Populate the village drop down
            console.log(data.response[0])
            //const stateList = data.response.length
            var option = '';
          
            var subDistrictLen = data.response.length
            console.log(subDistrictLen)
            for (var i=0;i<subDistrictLen;i++){
              console.log(data.response[i].Name)
              option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
              $('#chooseVillage').append(option);
              
            }
        })
      })

      $("#PchooseSubDistrict").on("change",(e)=>{
          PSubDistrictData=e.target.value.split("#");
          PSubDistrictName=PSubDistrictData[0];
          PSubDistrictId=PSubDistrictData[1];
          VillageData={
            ApiKey:"4970d6c45cf71d337b5588be68e5c72131ea526d",
            SelectedType:"Sub_Distt",
            TargetedType:"Village",
            SelectedId:PSubDistrictId
          }
          
          //Village call
          $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:VillageData}).then(data=>{
            console.log(data.response)
              //Populate the village drop down
              console.log(data.response[0])
              //const stateList = data.response.length
              var option = '';
            
              var subDistrictLen = data.response.length
              console.log(subDistrictLen)
              for (var i=0;i<subDistrictLen;i++){
                console.log(data.response[i].Name)
                option = '<option value="'+ data.response[i].Name +"#"+data.response[i].Id +'">' + data.response[i].Name + '</option>';
                $('#PchooseVillage').append(option);
                
              }
          })
        })
      $("#chooseVillage").on("change",(e)=>{
        VillageData = e.target.value.split("#");
        VillageName = VillageData[0];
        VillageId = VillageData[1];
    })
    $("#PchooseVillage").on("change",(e)=>{
      PVillageData = e.target.value.split("#");
      PVillageName = PVillageData[0];
      PVillageId = PVillageData[1];
  })

    const AccessToTechData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }

    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AccessToTechData}).then(data=>{
        console.log(data.response)

        var option = '';

        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the access to tech drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Access to technology"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#chooseTech').append(option);
            }
          }
        }
      })

    $("#chooseTech").on("click",(e)=>{
      chooseTechData = e.target.value.split("#");
      chooseTechName = chooseTechData[0];
      chooseTechId = chooseTechData[1];
    })  

    const EducationalQualificationData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:EducationalQualificationData}).then(data=>{
        console.log(data.response)
        var option = '';
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the educational qualification drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Qualification"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#EduQualification').append(option);
            }
          }
        }
      })

    $("#EduQualification").on("click",(e)=>{
      EduQualificationData = e.target.value.split("#");
      EduQualificationName = EduQualificationData[0];
      EduQualificationId = EduQualificationData[1];
    })

    const AreaOfInterestData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AreaOfInterestData}).then(data=>{
        console.log(data.response)
        var option = '';
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the area of interest drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Area of Interest"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#AreaOfInterest').append(option);
            }
          }
        }
      })

    $("#AreaOfInterest").on("click",(e)=>{
      AreaInterestData = e.target.value.split("#");
      AreaInterestName = AreaInterestData[0];
      AreaInterestId = AreaInterestData[1];
    })

    const Languages1Data={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:Languages1Data}).then(data=>{
        console.log(data.response)
        var option = '';
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the languages1 drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Languages"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#chooseLanguage1').append(option);
            }
          }
        }
      })

    $("#chooseLanguage1").on("click",(e)=>{
      chooseLanguage1Data = e.target.value.split("#");
      chooseLanguage1Name = chooseLanguage1Data[0];
      chooseLanguage1Id = chooseLanguage1Data[1];
    })

    const Languages2Data={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:Languages2Data}).then(data=>{
        console.log(data.response)
        var option = '';
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the languages2 drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Languages"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#chooseLanguage2').append(option);
            }
          }
        }
      })
    
    $("#chooseLanguage2").on("click",(e)=>{
      chooseLanguage2Data = e.target.value.split("#");
      chooseLanguage2Name = chooseLanguage2Data[0];
      chooseLanguage2Id = chooseLanguage2Data[1];
    })


    const Languages3Data={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }

    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:Languages3Data}).then(data=>{
      console.log(data.response)
      var option = '';
      var resLen = data.response.length
      console.log(resLen)
      
      //Populate the languages3 drop down
      for (var i=0; i<resLen;i++){
        if(data.response[i].Type=="Languages"){
          var CriteriaLen=data.response[i].Criteria.length
          for(var k=0;k<CriteriaLen;k++){
            option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
            console.log(option)
            $('#chooseLanguage3').append(option);
          }
        }
      }
    })
  
    $("#chooseLanguage3").on("click",(e)=>{
      chooseLanguage3Data = e.target.value.split("#");
      chooseLanguage3Name = chooseLanguage3Data[0];
      chooseLanguage3Id = chooseLanguage3Data[1];
    })

})

//Area of interest sub category

$('select[name="AreaOfInterest"]').change(function(){

    if ($(this).val() == "Agriculture and Allied Activities#5001"){
      const AreaOfInterestChild1Data={
        ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
      }
      
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AreaOfInterestChild1Data}).then(data=>{
        console.log(data.response)
  
        var option = '';
  
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the nomination by drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Area of Interest"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              if(data.response[i].Criteria[k].DisplayName=="Agriculture and Allied Activities"){
                var ChildCriteriaLen = data.response[i].Criteria[k].SubCriteria.length
                for (var x=0; x<ChildCriteriaLen; x++){
                  option = '<option value="'+ data.response[i].Criteria[k].SubCriteria[x].DisplayName +"#"+data.response[i].Criteria[k].SubCriteria[x].Id +'">' + data.response[i].Criteria[k].SubCriteria[x].DisplayName + '</option>';
                  console.log(option)
                  $('#chooseSubArea').append(option);
                }
              }
            }
          }
        }
      })
  
      // $("#chooseSubArea").on("click",(e)=>{
      //   IntSubCatData = e.target.value.split("#");
      //   IntSubCatName = IntSubCatData[0];
      //   IntSubCatId = IntSubCatData[1];
      // })
  
    }
    
    else if($(this).val()=="Art and Culture#5002"){
      const AreaOfInterestChild2Data={
        ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
      }
  
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AreaOfInterestChild2Data}).then(data=>{
        console.log(data.response)
  
        var option = '';
  
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the nomination by drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Area of Interest"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              if(data.response[i].Criteria[k].DisplayName=="Art and Culture"){
                var ChildCriteriaLen = data.response[i].Criteria[k].SubCriteria.length
                for (var x=0; x<ChildCriteriaLen; x++){
                  option = '<option value="'+ data.response[i].Criteria[k].SubCriteria[x].DisplayName +"#"+data.response[i].Criteria[k].SubCriteria[x].Id +'">' + data.response[i].Criteria[k].SubCriteria[x].DisplayName + '</option>';
                  console.log(option)
                  $('#chooseSubArea').append(option);
                }
              }
            }
          }
        }
      })
  
      // $("#chooseSubArea").on("click",(e)=>{
      //   IntSubCatData = e.target.value.split("#");
      //   IntSubCatName = IntSubCatData[0];
      //   IntSubCatId = IntSubCatData[1];
      // })
  
    }
  
    else if($(this).val()=="Handicraft and Textile#5003"){
      const AreaOfInterestChild3Data={
        ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
      }
  
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AreaOfInterestChild3Data}).then(data=>{
        console.log(data.response)
  
        var option = '';
  
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the nomination by drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Area of Interest"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              if(data.response[i].Criteria[k].DisplayName=="Handicraft and Textile"){
                var ChildCriteriaLen = data.response[i].Criteria[k].SubCriteria.length
                for (var x=0; x<ChildCriteriaLen; x++){
                  option = '<option value="'+ data.response[i].Criteria[k].SubCriteria[x].DisplayName +"#"+data.response[i].Criteria[k].SubCriteria[x].Id +'">' + data.response[i].Criteria[k].SubCriteria[x].DisplayName + '</option>';
                  console.log(option)
                  $('#chooseSubArea').append(option);
                }
              }
            }
          }
        }
      })
  
      // $("#chooseSubArea").on("click",(e)=>{
      //   IntSubCatData = e.target.value.split("#");
      //   IntSubCatName = IntSubCatData[0];
      //   IntSubCatId = IntSubCatData[1];
      // })
    }
  
  
    else if($(this).val()=="Health and Education#5004"){
      const AreaOfInterestChild4Data={
        ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
      }
  
      $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AreaOfInterestChild4Data}).then(data=>{
        console.log(data.response)
  
        var option = '';
  
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the nomination by drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Area of Interest"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              if(data.response[i].Criteria[k].DisplayName=="Health and Education"){
                var ChildCriteriaLen = data.response[i].Criteria[k].SubCriteria.length
                for (var x=0; x<ChildCriteriaLen; x++){
                  option = '<option value="'+ data.response[i].Criteria[k].SubCriteria[x].DisplayName +"#"+data.response[i].Criteria[k].SubCriteria[x].Id +'">' + data.response[i].Criteria[k].SubCriteria[x].DisplayName + '</option>';
                  console.log(option)
                  $('#chooseSubArea').append(option);
                }
              }
            }
          }
        }
      })
  
      // $("#chooseSubArea").on("click",(e)=>{
      //   IntSubCatData = e.target.value.split("#");
      //   IntSubCatName = IntSubCatData[0];
      //   IntSubCatId = IntSubCatData[1];
      // })
  
    }
  
      $("#chooseSubArea").on("click",(e)=>{
        IntSubCatData = e.target.value.split("#");
        IntSubCatName = IntSubCatData[0];
        IntSubCatId = IntSubCatData[1];
      })

  })

$("#sameAddress").change(function(){
  if(this.checked){
    $("#PAdd-1").hide();
    $("#PAdd-2").hide();
  } else {
    $("#PAdd-1").show();
    $("#PAdd-2").show();
  }
})


$("#nextBtn").click(function(e) {
e.preventDefault();
var FirstName = $("#firstName").val(); 
var MiddleName = $("#middleName").val(); 
var LastName = $("#lastName").val();
var Gender = $("#chooseGender :selected").text(); 
var Address = $("#address").val(); 
var PAddress = $("#Paddress").val(); 
var DOB = $("#dob").val(); 
var EmailId = $("#email").val(); 
var PhoneNumber = $("#phoneNumber").val(); 

UserData = {
    ApiKey:"411a7c9dc2f2f8feef213c3b966888b5cb12b67c",
    UserType : "M_101",
    FirstName : FirstName,
    MiddleName : MiddleName,
    LastName : LastName,
    FatherName : "false",
    FatherOccupation : "false",
    MotherName : "false",
    MotherOccupation : "false",
    Gender : Gender,
    IsPVTG : "false",
    ResidentialVillageId : VillageId,
    ResidentialSubDisttId : SubDistrictId,
    ResidentialDisttId : DistrictId,
    ResidentialStateId : StateId,
    ResidentialAddress : Address,
    PermanentVillageId : $("#sameAddress").is(":checked") ? VillageId : PVillageId,
    PermanentSubDisttId : $("#sameAddress").is(":checked") ? SubDistrictId : PSubDistrictId,
    PermanentDisttId : $("#sameAddress").is(":checked") ? DistrictId : PDistrictId,
    PermanentStateId : $("#sameAddress").is(":checked") ? StateId : PStateId,
    PermanentAddress : $("#sameAddress").is(":checked") ? Address : PAddress,
    DOB : DOB,
    EmailId : EmailId,
    PhoneNumber : PhoneNumber,
    Question1: question1,
    Answer1: $("#ans1").val() ? $("#ans1").val() : null,
    Question2: question2,
    Answer2: $("#ans2").val() ? $("#ans2").val() : null,
    Question3: question3,
    Answer3: $("#ans3").val() ? $("#ans3").val() : null
}

$.ajax({
    type:'POST',
    data: UserData,
    url:'https://goal.joshtalks.org/api/app/user/CreateUser',
    success:function(data) {
    console.log(data.response)
    UserID = data.response.UserId
    console.log(UserID) 
    }
});
})


  // second part

  $("#subBtn").click(function(e) {
    e.preventDefault();
   
    if($('#entY').is(':checked')){
        { var entrepreneur = "true" }
    }
    else{
        { var entrepreneur = "false" }
    }
    var resumeURL = $("#resumeUrl").val(); 
    var profSummery = $("#profSummary").val();

    SecondUserData = {
      ApiKey:"e0cab54e799dc92facd1c676b248a1f2539cde67",
      AuthToken: sessionStorage.getItem("AuthToken"),
      UserID : UserID,
      IsNominate : "false",
      NominateType : "false",
      NominateBy : "false",
      TribeName : "false",
      EduQualification : EduQualificationId,
      AccessToTech : chooseTechId,
      IsHaveWorkExp : "false",
      RelevantExpOfWork : "false",
      IsDifferentlyAbled : "false",
      IsAwardRec : "false",
      AwardType : "false",
      MemberOfSHG : "false",
      LoanAvailed : "false",
      BankAccount : "false",
      DomicileLocation : "false",
      AnnualIncome : "false",
      AreaOfInterest:AreaInterestId,
      AccessToInternetInArea: "false",
      LookingForJob: "false",
      StartBussiness: "false",
      LanguagePerference1: chooseLanguage1Id,
      LanguagePerference2: chooseLanguage2Id,
      LanguagePerference3: chooseLanguage3Id
    }

    console.log(UserID)
    console.log(EduQualificationId)
    console.log(chooseTechId)
    console.log(IntSubCatId)
    console.log(chooseLanguage1Id)
    console.log(chooseLanguage2Id)
    console.log(chooseLanguage3Id)

    console.log(SecondUserData)

    $.ajax({
      type:'POST',
      data: SecondUserData,
      url:'https://goal.joshtalks.org/api/app/user/UpdateUserInfo',
      success:function(data) {
        console.log(data.response)
        NewUserID = data.response.UserId
        console.log(NewUserID)

      }
    });
  })