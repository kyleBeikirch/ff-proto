var app = app || {};
app.Rides = Backbone.Collection.extend({
    model: app.Activity,
    sync: function(method, model, options) {
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: model.url(),
            processData: false
        }, options);

        return $.ajax(params);
    },
    url: function() {
    	return 'https://www.strava.com/api/v3/clubs/' + app.credentials.get('club_id') + '/activities?access_token=' + app.credentials.get('access_token') + '&per_page=200'
    },
    parse: function(response) {
        _(response).each(function(item)
        {
            if(item.map.summary_polyline !== null)
            {
                app.activities.addRouteToMap(item.map.summary_polyline);
            }
            
        });
        console.log(response)
        return response.results;
    },
    show: function () {
        var myLatlng = new google.maps.LatLng(37.760407, -122.463904);
        var myOptions = {
            zoom: 12,
            center: myLatlng,
            mapTypeid: google.maps.MapTypeId.ROADMAP
        }
        app.map = new google.maps.Map(document.getElementById("map"), myOptions);

    },
    addRouteToMap: function(path) {
        var decodedPath = google.maps.geometry.encoding.decodePath(path);
        //var decodedLevels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

        var setRegion = new google.maps.Polyline({
            path: decodedPath,
            strokeColor: "#FF0000",
            strokeOpacity: .4,
            strokeWeight: 2,
            map: app.map
        });
    }

});