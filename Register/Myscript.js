var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
var btn_submit = document.forms["Register"]["Submit"];
btn_submit.onclick = function () {
    var txt_firstName = document.forms["Register"]["firstName"];
    var txt_lastName = document.forms["Register"]["lastName"];
    var pwd_password = document.forms["Register"]["password"];
    var txt_Address = document.forms['Register']['address'];
    var txt_Phone = document.forms['Register']['phone'];
    var txt_Avatar = document.forms['Register']['avatar'];
    var txt_gender = document.forms['Register']['gender'];
    var txt_Email = document.forms['Register']['email'];
    var txt_Birthday = document.forms['Register']['birthday'];

    var firstName = txt_firstName.value;
    var lastName = txt_lastName.value;
    var password = pwd_password.value;
    var address = txt_Address.value;
    var phone = txt_Phone.value;
    var avatar = txt_Avatar.value;
    var gender = txt_gender.value;
    var email = txt_Email.value;
    var birth = txt_Birthday.value;
    var d = new Date(birth.value);
    var mydate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());

    var jsMember = {
        firstName: firstName,
        lastName: lastName,
        password: password,
        address: address,
        phone: phone,
        avatar: avatar,
        gender: gender,
        email: email,
        birthday: birth
    }
    var data = JSON.stringify(jsMember);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 201) {
                var member = JSON.parse(xhttp.responseText);
                alert(hello);
            }
        }
        xhttp.open('POST', REGISTER_API, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(data);
}

