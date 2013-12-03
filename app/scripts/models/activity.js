var app = app || {};

app.Activity = Backbone.Model.extend({
    defaults: {
        name: 'Ride',
        distance: 0,
        moving_time: 0,
        total_elevation_gain: 0,
        start_date: 0,
        map: null
    }
});