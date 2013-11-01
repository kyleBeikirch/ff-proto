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
    var myLatlng = new google.maps.LatLng(37.760407, -122.463904);
    var myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var decodedPath = google.maps.geometry.encoding.decodePath('maneFjvmjVab@z@g@_XoKo_@sNf@cG{OkH{fArNbaBkMkC?nPotB?cBbLoUb[vGrSaBnFjHv`@{JvLiJ_DsInFrXzOvj@rNnAnd@jHnKcBrI~CbQmAzTtBfE~HoF~MoZfEj}A~C?fEjWbQoKja@wBnFgOfOcLsXc|A~C_{@_I_g@fEgTsIsSbB_g@wG_SyEkC_~AzEyBsDgJf@gE~M_InAcLcLoFSjCoK{EgEf@gEcG_SrI_S_D_IrD{@wGgaArDoF_IobAvVgEdBgJ|gB{Ty@_S`Vs]SgE');
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

$('document').ready(function()
{
    initialize();
});

