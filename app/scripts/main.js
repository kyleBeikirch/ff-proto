/*global ffProto, $*/


window.ffProto = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');

        $.ajax({
            type: "POST",
            jsonp : false,
            cache: true,
            data: {
                'client_id' : '48',
                'client_secret' : '2776c1edb8022ecef401bb0cb92a3c882dc393b7',
                'code' : getParameterByName('code'),
            },
            dataType: "jsonp",
            url: "https://www.strava.com/oauth/token",
            success: function(data)
            {
                console.log(data);
            },
            error: function(e)
            {
                console.log(e);
            }
        });
    }
};

var myfunction = function()
{
    console.log("my function called");
}
$(document).ready(function () {
    'use strict';
    ffProto.init();
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
