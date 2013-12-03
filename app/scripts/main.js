/*global ffProto, $*/
var app = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        app.credentials = new app.CredentialsModel();
        app.athletes = new app.Riders(); 
        app.athletes.fetch(); 
        app.activities = new app.Rides();
        app.activities.show();
        app.activities.fetch();

    }
};


$(document).ready(function () {
    app.init();
});