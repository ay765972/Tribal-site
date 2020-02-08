var DistrictData = ''
var DistrictName =''
var DistrictId =''

var VillageData = ''
var VillageName = ''
var VillageId = ''

var SubDistrictData = ''
var SubDistrictName = ''
var SubDistrictId = ''

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

var NomTypeData = 'false'
var NomTypeName = 'false'
var NomTypeId = 'false'

var NomByData = 'false'
var NomByName = 'false'
var NomById = 'false'

var WorkExpData = ''
var WorkExpName = ''
var WorkExpId = ''

var chooseTechData = ''
var chooseTechName = ''
var chooseTechId = ''

var awardTypeData = ''
var awardTypeName = ''
var awardTypeId = ''

var familyIncomeData = ''
var familyIncomeName = ''
var familyIncomeId = ''

var EduQualificationData = ''
var EduQualificationName = ''
var EduQualificationId = ''

var chooseDomicileData = ''
var chooseDomicileName = '' 
var chooseDomicileId = ''

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
var question2 = "By the end of the program, what are the few takeaways that you would want from this program?";
var question3 = "What is that one thing that you would like to change in the world?";


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
    //let idList=[];
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/GetLocations",data:stateData}).then(data=>{
        //Populate the state drop down
        console.log(data.response[0])
        //const stateList = data.response.length
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
          //const stateList = data.response.length
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

    const NominationTypeData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }

    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:NominationTypeData}).then(data=>{
      console.log(data.response)

      var option = '';

      var resLen = data.response.length
      console.log(resLen)
      
      //Populate the nomination drop down
      for (var i=0; i<resLen;i++){
        if(data.response[i].Type=="Nomination"){
          var CriteriaLen=data.response[i].Criteria.length
          for(var k=0;k<CriteriaLen;k++){
            option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
            console.log(option)
            $('#nominationDrop1').append(option);
          }
        }
      }
    })

    $("#nominationDrop1").on("click",(e)=>{
      NomTypeData = e.target.value.split("#");
      NomTypeName = NomTypeData[0];
      NomTypeId = NomTypeData[1];
    })

    const WorkExperienceData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }

    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:WorkExperienceData}).then(data=>{
      console.log(data.response)

      var option = '';

      var resLen = data.response.length
      console.log(resLen)
      
      //Populate the work exp drop down
      for (var i=0; i<resLen;i++){
        if(data.response[i].Type=="Relevant experience of work"){
          var CriteriaLen=data.response[i].Criteria.length
          for(var k=0;k<CriteriaLen;k++){
            option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
            console.log(option)
            $('#WorkExp').append(option);
          }
        }
      }
    })

    $("#WorkExp").on("click",(e)=>{
      WorkExpData = e.target.value.split("#");
      WorkExpName = WorkExpData[0];
      WorkExpId = WorkExpData[1];
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

    const WhichAwardData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:WhichAwardData}).then(data=>{
        console.log(data.response)
  
        var option = '';
  
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the award type drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Award"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#awardType').append(option);
            }
          }
        }
      })

    $("#awardType").on("click",(e)=>{
      awardTypeData = e.target.value.split("#");
      awardTypeName = awardTypeData[0];
      awardTypeId = awardTypeData[1];
    })
  

    const AnnualIncomeData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:AnnualIncomeData}).then(data=>{
        console.log(data.response)
        var option = '';
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the annual family income drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Annual Family Income"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#familyIncome').append(option);
            }
          }
        }
      })

    $("#familyIncome").on("click",(e)=>{
      familyIncomeData = e.target.value.split("#");
      familyIncomeName = familyIncomeData[0];
      familyIncomeId = familyIncomeData[1];
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

    const DomicileData={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
  
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:DomicileData}).then(data=>{
        console.log(data.response)
        var option = '';
        var resLen = data.response.length
        console.log(resLen)
        
        //Populate the domicile data drop down
        for (var i=0; i<resLen;i++){
          if(data.response[i].Type=="Domicile Location"){
            var CriteriaLen=data.response[i].Criteria.length
            for(var k=0;k<CriteriaLen;k++){
              option = '<option value="'+ data.response[i].Criteria[k].DisplayName +"#"+data.response[i].Criteria[k].Id +'">' + data.response[i].Criteria[k].DisplayName + '</option>';
              console.log(option)
              $('#chooseDomicile').append(option);
            }
          }
        }
      })

    $("#chooseDomicile").on("click",(e)=>{
      chooseDomicileData = e.target.value.split("#");
      chooseDomicileName = chooseDomicileData[0];
      chooseDomicileId = chooseDomicileData[1];
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

//nomination drop down


$('select[name="nominationDrop1"]').change(function(){

  if ($(this).val() == "Reputed NGO funded by MoTA#1004"){
    const NominationTypeChild1Data={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }
    
    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:NominationTypeChild1Data}).then(data=>{
      console.log(data.response)

      var option = '';

      var resLen = data.response.length
      console.log(resLen)
      
      //Populate the nomination by drop down
      for (var i=0; i<resLen;i++){
        if(data.response[i].Type=="Nomination"){
          var CriteriaLen=data.response[i].Criteria.length
          for(var k=0;k<CriteriaLen;k++){
            if(data.response[i].Criteria[k].DisplayName=="Reputed NGO funded by MoTA"){
              var ChildCriteriaLen = data.response[i].Criteria[k].SubCriteria.length
              for (var x=0; x<ChildCriteriaLen; x++){
                option = '<option value="'+ data.response[i].Criteria[k].SubCriteria[x].DisplayName +"#"+data.response[i].Criteria[k].SubCriteria[x].Id +'">' + data.response[i].Criteria[k].SubCriteria[x].DisplayName + '</option>';
                console.log(option)
                // $('#nominationDrop2').append(option);
              }
            }
          }
        }
      }
    })

    // $("#nominationDrop2").on("click",(e)=>{
    //   NomByData = e.target.value.split("#");
    //   NomByName = NomByData[0];
    //   NomById = NomByData[1];
    // })

  }
  
  else if($(this).val()=="CoEs#1005"){
    const NominationTypeChild2Data={
      ApiKey:"8fc89ddf9bb458ff8c7a0029c94915dfd49c3171",
    }

    $.ajax({method:"POST",url:"https://goal.joshtalks.org/api/app/user/GetAllCriteria",data:NominationTypeChild2Data}).then(data=>{
      console.log(data.response)

      var option = '';

      var resLen = data.response.length
      console.log(resLen)
      
      //Populate the nomination by drop down
      for (var i=0; i<resLen;i++){
        if(data.response[i].Type=="Nomination"){
          var CriteriaLen=data.response[i].Criteria.length
          for(var k=0;k<CriteriaLen;k++){
            if(data.response[i].Criteria[k].DisplayName=="CoEs"){
              var ChildCriteriaLen = data.response[i].Criteria[k].SubCriteria.length
              for (var x=0; x<ChildCriteriaLen; x++){
                option = '<option value="'+ data.response[i].Criteria[k].SubCriteria[x].DisplayName +"#"+data.response[i].Criteria[k].SubCriteria[x].Id +'">' + data.response[i].Criteria[k].SubCriteria[x].DisplayName + '</option>';
                console.log(option)
                // $('#nominationDrop2').append(option);
              }
            }
          }
        }
      }
    })

    // $("#nominationDrop2").on("click",(e)=>{
    //   NomByData = e.target.value.split("#");
    //   NomByName = NomByData[0];
    //   NomById = NomByData[1];
    // })

  }

  // $("#nominationDrop2").on("click",(e)=>{
  //   NomByData = e.target.value.split("#");
  //   NomByName = NomByData[0];
  //   NomById = NomByData[1];
  // })

  
})







//area of interest subcategory




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






  $("#nextBtn1").click(function(e) {
    e.preventDefault();
    if (currentTab === 0 && !$("form[name='regForm']").valid()) {
      return;
    }
    var FirstName = $("#firstName").val(); 
    var MiddleName = $("#middleName").val(); 
    var LastName = $("#lastName").val();
    var FatherName = $("#fatherName").val(); 
    var FatherOccupation = $("#fatherOccupation").val(); 
    var MotherName = $("#motherName").val(); 
    var MotherOccupation = $("#motherOccupation").val(); 
    var Gender = $("#chooseGender :selected").text(); 
    if($('#ispvtgY').is(':checked')){
      { var IsPVTG = "true" }
    }
    else{
      { var IsPVTG = "false" }
    }
    var Address = $("#address").val(); 
    var PAddress = $("#Paddress").val(); 
    var DOB = $("#dob").val(); 
    var EmailId = $("#email").val(); 
    var PhoneNumber = $("#phoneNumber").val(); 

    UserData = {
      ApiKey:"411a7c9dc2f2f8feef213c3b966888b5cb12b67c",
      UserType : "M_100",
      FirstName : FirstName,
      MiddleName : MiddleName,
      LastName : LastName,
      FatherName : FatherName,
      FatherOccupation : FatherOccupation,
      MotherName : MotherName,
      MotherOccupation : MotherOccupation,
      Gender : Gender,
      IsPVTG : IsPVTG,
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

  function uploadDocument(doc, userId, DocumentType){
    var uploadData = new FormData();
    $.each(doc, function(i, file) {
      uploadData.append('UploadedFile', file);
    });
    uploadData.append('ApiKey', '30985dbcbd136200a59f301d95631611bf797628');
    uploadData.append('UserID', userId);
    uploadData.append('DocumentType', DocumentType);

    return $.ajax({
      type:'POST',
      enctype: 'multipart/form-data',
      data: uploadData,
      cache: false,
      contentType: false,
      processData: false,
      url:'https://goal.joshtalks.org/api/upload/UserDocument',
      success:function(data) {
        console.log(data.response)
      }
    });
  }

  $("#subBtn").click(async function(e) {
    e.preventDefault();
    if (currentTab === 2 && !$("form[name='regForm']").valid()) {
      return;
    }
    var casteDoc = $("#casteDoc")[0].files; 
    if(casteDoc && casteDoc.length > 0){
      await uploadDocument(casteDoc, UserID, 'PVTG');
    }
    var dobDoc = $("#dobDoc")[0].files;
    if(dobDoc && dobDoc.length > 0){
      await uploadDocument(dobDoc, UserID, 'DOB');
    }
    var eduDoc = $("#eduDoc")[0].files; 
    if(eduDoc && eduDoc.length > 0){
      await uploadDocument(eduDoc, UserID, 'EDU');
    }
    var workDoc = $("#workDoc")[0].files; 
    if(workDoc && workDoc.length > 0){
      await uploadDocument(workDoc, UserID, 'WORK');
    }
    var awardDoc = $("#awardDoc")[0].files; 
    if(awardDoc && awardDoc.length > 0){
      await uploadDocument(awardDoc, UserID, 'AWARD');
    }
    var loanDoc = $("#loanDoc")[0].files; 
    if(loanDoc && loanDoc.length > 0){
      await uploadDocument(loanDoc, UserID, 'LOAN');
    }
    var disabilityDoc = $("#disabilityDoc")[0].files; 
    if(disabilityDoc && disabilityDoc.length > 0){
      await uploadDocument(disabilityDoc, UserID, 'DISABILITY'); 
    }
    var nomDoc = $("#nomDoc")[0].files; 
    if(nomDoc && nomDoc.length > 0){
      await uploadDocument(nomDoc, UserID, 'NOM');
    }
    var MSMERegistrationDetailsInput = $("#MSMERegistrationDetailsInput")[0].files;
    if(MSMERegistrationDetailsInput && MSMERegistrationDetailsInput.length > 0){
      await uploadDocument(MSMERegistrationDetailsInput, UserID, 'MSME');
    }

    alert("Documents Submitted Successfully!");
    window.location.replace('/');

  })


 
 
 
 
 
 
 function getIdFromSelect(id){
    var selectIdValue1 = $("#"+id).val();
    var selectIdValue2 = selectIdValue1 ? selectIdValue1.split('#') : null;
    return selectIdValue2 && selectIdValue2.length > 0 && selectIdValue2[1] ? Number(selectIdValue2[1]) : null;
 }


function cleanObj(obj) {
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}
 
 
 
  // second part

  $("#nextBtn2").click(function(e) {
    e.preventDefault();
    if (currentTab === 1 && !$("form[name='regForm']").valid()) {
      return;
    }
    if($('#nominationY').is(':checked')){
      { var nomination = true }
    }
    else{
      { var nomination = false }
    }
   
    if($('#isAwardY').is(':checked')){
      { var award = 1 }
    }
    else{
      { var award = 0 }
    }

    if($('#isDiffY').is(':checked')){
      { var challenged = true }
    }
    else{
      { var challenged = false }
    }

    if($('#shgY').is(':checked')){
      { var shg = true }
    }
    else{
      { var shg = false }
    }

    if($('#loanY').is(':checked')){
      { var loan = true }
    }
    else{
      { var loan = false }
    }

    if($('#bankY').is(':checked')){
      { var bank = true }
    }
    else{
      { var bank = false }
    }

    if($('#mobileY').is(':checked')){
      { var mobile = true }
    }
    else{
      { var mobile = false }
    }

    if($('#FamilyEnrY').is(':checked')){
      { var FamEnr = true }
    }
    else{
      { var FamEnr = false }
    }

    if($('#jobY').is(':checked')){
      { var job = true }
    }
    else{
      { var job = false }
    }

    if($('#businessY').is(':checked')){
      { var business = true }
    }
    else{
      { var business = false }
    }

    if($('#workExpY').is(':checked')){
      { var hasWorkExp = true }
    }
    else{
      { var hasWorkExp = false }
    }


    var tribeName = $("#TribeName").val(); 
    
  

    SecondUserData = {
      ApiKey:"e0cab54e799dc92facd1c676b248a1f2539cde67",
      AuthToken: sessionStorage.getItem("AuthToken"),
      UserID : UserID,
      IsNominate : nomination,
      // NominateType : NomTypeId,
      NominateBy : getIdFromSelect('nominationDrop1'),
      TribeName : $("#TribeName").val(),
      EduQualification : getIdFromSelect('EduQualification'),
      AccessToTech : getIdFromSelect('chooseTech'),
      IsHaveWorkExp : hasWorkExp,
      RelevantExpOfWork : getIdFromSelect('WorkExp'),
      IsDifferentlyAbled : challenged,
      IsAwardRec : award,
      AwardType : getIdFromSelect('awardType'),
      MemberOfSHG : shg,
      LoanAvailed : loan,
      BankAccount : bank,
      // DomicileLocation : chooseDomicileId,
      AnnualIncome : getIdFromSelect('familyIncome'),
      AreaOfInterest: getIdFromSelect('AreaOfInterest'),
      AccessToInternetInArea: mobile,
      LookingForJob: job,
      StartBussiness: business,
      IsProfeesional: false,
      LanguagePerference1: getIdFromSelect('chooseLanguage1'),
      LanguagePerference2: getIdFromSelect('chooseLanguage2'),
      LanguagePerference3: getIdFromSelect('chooseLanguage3'),
      ProfessionalSummary: "Test"
    }

    console.log(UserID)
    console.log(nomination)
    console.log(NomTypeId)
    console.log(NomById)
    console.log(tribeName)
    console.log(EduQualificationId)
    console.log(chooseTechId)
    console.log(hasWorkExp)
    console.log(WorkExpId)
    console.log(challenged)
    console.log(award)
    console.log(awardTypeId)
    console.log(shg)
    console.log(loan)
    console.log(bank)
    console.log(chooseDomicileId)
    console.log(familyIncomeId)
    console.log(IntSubCatId)
    console.log(mobile)
    console.log(job)
    console.log(business)
    console.log(chooseLanguage1Id)
    console.log(chooseLanguage2Id)
    console.log(chooseLanguage3Id)
    cleanObj(SecondUserData);
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