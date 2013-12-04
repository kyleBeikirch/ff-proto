var app = app || {};
app.MapView = Backbone.View.extend({

    el: $("#map"),

    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
    },
    initialize: function() {

        var myLatlng = new google.maps.LatLng(37.760407, -122.463904);
        var myOptions = {
            zoom: 12,
            center: myLatlng,
            mapTypeid: google.maps.MapTypeId.ROADMAP
        }
        app.map = new google.maps.Map(document.getElementById("map"), myOptions);
        this.listenTo(app.activities, 'add', this.addRide);
    },

    // Re-render the title of the todo item.
    addRide: function( ride) {
        if (ride.get('map').summary_polyline !== null) {
            this.addRouteToMap(ride.get('map').summary_polyline);
        }
    },

    edit: function() {
        // executed when todo label is double clicked
    },

    updateOnEnter: function(e) {
        // executed on each keypress when in todo edit mode,
        // but we'll wait for enter to get in action
    },

    show: function() {


    },
    addRouteToMap: function(path) {
        var decodedPath = google.maps.geometry.encoding.decodePath(path);

        var setRegion = new google.maps.Polyline({
            path: decodedPath,
            strokeColor: "#FF0000",
            strokeOpacity: .4,
            strokeWeight: 2,
            map: app.map
        });
    }
});