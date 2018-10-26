var student1 =
{
    rollNumber :"A123",
    name : "Hello wolrd1",
    phone :"098765432",
    image : "https://www.w3schools.com/w3css/img_lights.jpg",
    address : "Hanoi"
}
var student2 =
{
    rollNumber :"A124",
    name : "Hello wolrd2",
    phone :"098765432",
    image : "https://www.w3schools.com/w3css/img_lights.jpg",
    address : "Hanoi"
}
var student3 =
{
    rollNumber :"A125",
    name : "Hello wolrd3",
    phone :"098765432",
    image : "https://www.w3schools.com/w3css/img_lights.jpg",
    address : "Hanoi"
}
var student4 =
{
    rollNumber :"A126",
    name : "Hello wolrd4",
    phone :"098765432",
    image : "https://www.w3schools.com/w3css/img_lights.jpg",
    address : "Hanoi"
}

var list_student = new Array();
list_student.push(student1);
list_student.push(student2);
list_student.push(student3);
list_student.push(student4);

 var classMainContent = document.getElementsByClassName('main-content');
if (classMainContent != null && classMainContent.length >0){
    var main_content = classMainContent[0];
    for (var i = 0; i < list_student.length; i++) {
        var mainItem = '<div class="personal-infor">';
            mainItem += '<div class="avatar" style="background-image: url(' +list_student[i].image +'); background-size: cover">';
            mainItem += '</div>';
        mainItem += '<div class="line-infor">';
        mainItem += '<label>Rollnumber</label>';
        mainItem += '<div >' + list_student[i].rollNumber +'</div>';
        mainItem += '</div>';
        mainItem += '<div class="line-infor">';
        mainItem += '<label>Name</label>';
        mainItem += '<div >' + list_student[i].name +'</div>';
        mainItem += '</div>';
        mainItem += '<div class="line-infor">';
        mainItem += '<label>phone</label>';
        mainItem += '<div >' + list_student[i].phone +'</div>';
        mainItem += '</div>';
        mainItem += '<div class="line-infor">';
        mainItem += '<label>Address</label>';
        mainItem += '<div >' + list_student[i].address +'</div>';
        mainItem += '</div>';
        main_content.innerHTML +=mainItem;



    }
}


