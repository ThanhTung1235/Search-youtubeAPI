var celebrationNames = [
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];


var show = document.getElementById('show-more');
show.onclick = function () {
    this.style.display = "none";
    var listName = document.getElementById('list-name');
    for (var i = 0; i <celebrationNames.length ; i++) {
        listName.innerHTML += '<li>'+ celebrationNames[i] + '</li>'
    }
}










