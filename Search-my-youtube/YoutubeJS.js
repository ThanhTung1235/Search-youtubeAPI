var modal = document.getElementById("myModal");
var modalImg = document.getElementById("frameSrc");
Search_youtube();


function btn_search() {
    Search_youtube();
}

function Search_youtube() {
    var txt_search = document.getElementById("search");
    var keyword = txt_search.value;
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function GetInfo() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(xhttp.responseText);
            // console.log(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsonObj.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                // videoItem += '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + jsonObj.items[i].id.videoId + '" frameborder="0"  allow=" encrypted-media" allowfullscreen></iframe>';
                videoItem += '<img id="myImg" style="width: 100%;max-width: 300px" onclick="DoAction( /' + jsonObj.items[i].id.videoId + '/)" alt="" src="' + jsonObj.items[i].snippet.thumbnails.high.url + '">';
                videoItem += '<h3>' + jsonObj.items[i].snippet.title + '</h3>';
                videoItem += '</div>';
                content += videoItem;
            }
            document.getElementById("myTubes").innerHTML = content;
        }


    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}
function DoAction(videoId) {
    modal.style.display = "block";
    modalImg.src = 'https://www.youtube.com/embed/'+videoId;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
    modalImg.src = "";
}








