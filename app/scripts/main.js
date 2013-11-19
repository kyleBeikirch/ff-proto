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
        var athletes = new app.Riders(); 
        athletes.fetch();  
    }
};


$(document).ready(function () {
    app.init();
});