var validForm = $("#register-form").validate({
    rules: {
        firstName: {
            required: true,
            minLength: 5,
            maxLength: 10
        },
        lastName: {
            required: true,
            minLength: 5,
            maxLength: 10
        },
        password: {
            required: true,
            minLength: 5,
            maxLength: 10
        },
        'confirm-password': {
            equalTo: '[name="password"]',
        },
        address: {
            required: true
        },
        phone: {
            required: true
        },
        avatar: {
            required: true
        },
        mail: {
            required: true,
            email: true
        },
        date: {
            required: true,
            date: true
        },
        geder: {
            required: true
        }

    }
});

var txt_firstName = $('[name="firstName"]').val();
var txt_lastName = $('[name="lastName"]').val();
var txt_password = $('[name="password"]').val();
var txt_address = $('[name="address"]').val();
var txt_phone = $('[name="phone"]').val();
var txt_avatar = $('[name="avatar"]').val();
var txt_gender = $('[name="gender"]').val();
var txt_email = $('[name="email"]').val();


var jsonMember = {
    firstName: txt_firstName,
    lastName: txt_lastName,
    password: txt_password,
    address: txt_avatar,
    gender: txt_gender,
    email: txt_email
};
$("[name='submit']").click(function () {
    $.ajax({
        url: "https://2-dot-backup-server-002.appspot.com/_api/v2/members",
        type: "POST",
        data: JSON.stringify(jsonMember),
        contentType: "application/json; charset=UTF-8",
        success: function () {
            alert("Success");
        },
        error: function (xhr, status, error) {
            if (xhr.responseText != null) {
                var errorResponse = JSON.parse(xhr.responseText);
                $("#error-message").text(errorResponse.message);
                validForm.showErrors(xhr.responseJSON.error);
            }
        }
    })
});



