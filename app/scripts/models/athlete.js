var app = app || {};

app.Athlete = Backbone.Model.extend({
    defaults: {
        profile: 'img/placeholder.png',
        firstname: 'Johnny',
        lastname: 'Applestrava',
        city: 'San Francisco',
        state: 'California'
    }
});