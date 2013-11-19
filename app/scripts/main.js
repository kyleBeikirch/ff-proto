/*global ffProto, $*/
var app = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var myCredentials = new app.CredentialsModel();   
    }
};


$(document).ready(function () {
    app.init();
});