var app = app || {};
app.HopeView = Backbone.View.extend({

    el: $("#hope"),

    milesThreshold: 8000000,

    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
    },
    initialize: function() {

        this.totalMiles = 0;
        this.listenTo(app.activities, 'add', this.addRide);
    },

    // Re-render the title of the todo item.
    addRide: function( ride) {
        this.totalMiles += Math.round(ride.get('distance'));
        $(this.el).css('opacity', this.totalMiles/ this.milesThreshold);
    }
});