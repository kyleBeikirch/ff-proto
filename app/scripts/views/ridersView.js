var app = app || {};
app.RidersView = Backbone.View.extend({

    el: $(".list"),

    initialize: function() {
        var options = {
            valueNames: ['firstname', 'lastname', 'city'],
            item: '<li><h3><p class="firstname"></p><p class="lastname"></p></h3><p class="city"></p></li>'
        };

        this.userList = new List('users', options);

        this.listenTo(app.athletes, 'add', this.addRider);
    },

    // Re-render the title of the todo item.
    addRider: function(rider) {
        this.userList.add(rider.attributes);
    }
});