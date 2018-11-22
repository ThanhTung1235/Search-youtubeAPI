var btn_submit =  document.forms["Login"]["btn-submit"];
btn_submit.onclick = function () {
    var txt_email =  document.forms["Login"]["email"];
    var txt_password =  document.forms["Login"]["password"];

    var email = txt_email.value;
    var password = txt_password.value;

    var jsonMember = {
        email : email,
        password : password
    }
    var data = JSON.stringify(jsonMember);
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