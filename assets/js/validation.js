$(function () {
    $("form[name='loginForm']").validate({
        rules: {
            UserID: "required",
            pass: "required"
        }
        // Specify validation error messages
        messages: {
            UserID: "Please enter a User ID",
            pass: "Please enter a password"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            console.log('here it is: ', form);
            form.submit();
        }
    });
});