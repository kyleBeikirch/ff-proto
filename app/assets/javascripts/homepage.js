console.log("Running ...")
var map;

function loadData() {
    $.ajax({
        url: '/assets/fireflies.json',
        type: "GET",
        success: function (data) {
            parseData(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Ajax error");
        }
    });
}


function initializeMap() {
    var myLatlng = new google.maps.LatLng(34.0219, -118.4814);
    var myOptions = {
        zoom: 11,
        center: myLatlng,
        mapTypeid: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);


}

function parseData(data) {
    _(data).each(function(item)
    {
       addRouteToMap(item.map.summary_polyline);
    });
}


function addRouteToMap(path)
{
    var decodedPath = google.maps.geometry.encoding.decodePath(path);
    var decodedLevels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

    var setRegion = new google.maps.Polyline({
        path: decodedPath,
        levels: decodedLevels,
        strokeColor: "#FF0000",
        strokeOpacity: .4,
        strokeWeight: 2,
        map: map
    });
}

function decodeLevels(encodedLevelsString) {
    var decodedLevels = [];

    for (var i = 0; i < encodedLevelsString.length; ++i) {
        var level = encodedLevelsString.charCodeAt(i) - 63;
        decodedLevels.push(level);
    }
    return decodedLevels;
}

$('document').ready(function()
{
    initializeMap();
    loadData();
});

