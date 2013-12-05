var app = app || {};

app.Riders = Backbone.Collection.extend({
    model: app.Athlete,
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
    	return 'https://www.strava.com/api/v3/clubs/' + app.credentials.get('club_id') + '/members?access_token=' + app.credentials.get('access_token') + '&per_page=200'
    },
    parse: function(response) {
        var that = this;
        _(response).each(function(item) {
            that.add( item );
        });
        
        return response.results;
    }

});