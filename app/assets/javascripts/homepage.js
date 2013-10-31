console.log("Running ...")
$.ajax({
    url: 'https://www.strava.com/oauth/token',
    data: {"client_id": '48' , "client_secret": '2776c1edb8022ecef401bb0cb92a3c882dc393b7'},
    type: "POST",
    success: function (data) {
        console.log(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("Ajax error");
    }
});
