console.log("Running ...")
// $.ajax({
//     url: 'https://www.strava.com/oauth/token',
//     data: {"client_id": '48' , "client_secret": '2776c1edb8022ecef401bb0cb92a3c882dc393b7'},
//     type: "POST",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function(XMLHttpRequest, textStatus, errorThrown) {
//         console.log("Ajax error");
//     }
// });

function initialize() {
    var myLatlng = new google.maps.LatLng(51.65905179951626, 7.3835928124999555);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var decodedPath = google.maps.geometry.encoding.decodePath('}~kvHmzrr@ba\\hnc@jiu@r{Zqx~@hjp@pwEhnc@zhu@zflAbxn@fhjBvqHroaAgcnAp}gAeahAtqGkngAinc@_h|@r{Zad\\y|_D}_y@swg@ysg@}llBpoZqa{@xrw@~eBaaX}{uAero@uqGadY}nr@`dYs_NquNgbjAf{l@|yh@bfc@}nr@z}q@i|i@zgz@r{ZhjFr}gApob@ff}@laIsen@dgYhdPvbIren@');
    var decodedLevels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

    var setRegion = new google.maps.Polyline({
        path: decodedPath,
        levels: decodedLevels,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
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

initialize();
