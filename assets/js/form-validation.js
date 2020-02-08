$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='regForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      FirstName: "required",
      lastName: "required",
      FathertName: "required",
      FatherOccupation: "required",
      MothertName: "required",
      MotherOccupation: "required",
      Gender: "required",
      DOB: "required",
      IsPVTG: "required",
      StateId: "required",
      DisttId: "required",
      SubDisttId: "required",
      VillageId: "required",
      address: "required",
      PStateId: "required",
      PDisttId: "required",
      PSubDisttId: "required",
      PVillageId: "required",
      Paddress: "required",
      EmailId: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phoneNumber: "required",
      IsNominate: "required",
      // nominationDrop2: "required",
      IsExp: "required",
      WorkExp: "required",
      AccessToTech: "required",
      IsAwardRec: "required",
      awardType: "required",
      IsDifferentlyAbled: "required",
      MemberOfSHG: "required",
      TribeName: "required",
      AnnInc: "required",
      chooseLanguage1: "required",
      chooseLanguage2: "required",
      chooseLanguage3: "required",
      EduQualification: "required",
      AreaOfInterest: "required",
      chooseSubArea: "required",
      LoanAvailed: "required",
      BankAccount: "required",
      AccessToInternetInArea: "required",
      FamEnr: "required",
      LookingForJob: "required",
      StartBussiness: "required",
      certify: "required",
      casteDocuments: "required",
      dobDocuments: "required",
      educationDocuments: "required",
      workexpDocuments: "required",
      awardDocuments: "required",
      loanDocuments: "required",
      disabilityDocuments: "required",
      nominatedDocuments: "required",
      MSMERegistrationDetails: "required"
    },
    // Specify validation error messages
    messages: {
      FirstName: "Please enter your firstname",
      lastName: "Please enter your lastname",
      EmailId: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      console.log("here it is: ", form);
      form.submit();
    }
  });
});
