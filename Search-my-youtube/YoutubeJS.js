


// var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q="+ keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsonObj = JSON.parse(xhttp.responseText);
        console.log(xhttp.responseText);
        var content = '';
        // for (var i = 0; i < jsonObj.items.length; i++) {
        //     var videoItem = '<div class="tube-item">';
        //     videoItem += '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + jsonObj.items[i].id.videoId + '" frameborder="0"  allow="
        //
        // ; encrypted-media" allowfullscreen></iframe>';
        //     videoItem += '<h3>' + jsonObj.items[i].snippet.title+ '</h3>';
        //     videoItem += '</div>';
        //     content += videoItem;
        // }
        document.getElementById("myTubes").innerHTML = xhttp.responseText;
    }


};

function btn_search() {
    var txt_search = document.getElementById("search");
    var keyword = txt_search.value;
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q="+ keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";

    xhttp.open("GET",YOUTUBE_API,true);
    xhttp.send();
}



