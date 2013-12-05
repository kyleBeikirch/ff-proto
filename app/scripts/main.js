/*global ffProto, $*/
var app = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        app.credentials = new app.CredentialsModel();
        app.athletes = new app.Riders(); 
        app.athletes.fetch(); 
        app.activities = new app.Rides();
        app.activities.fetch();
        app.mapper = new app.MapView();
        app.riderList = new app.RidersView();
        

    }
};


$(document).ready(function () {
    app.init();
});