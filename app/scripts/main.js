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
                'code' : '351cf0edd483866ae0289e0e041f695ed6188800',
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
