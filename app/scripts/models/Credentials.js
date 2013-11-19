var app = app || {};

app.CredentialsModel = Backbone.Model.extend({
   	defaults: {
    	'client_id' : '48',
        'client_secret' : '2776c1edb8022ecef401bb0cb92a3c882dc393b7',
        'code' : '47faa4feffbff3f32e1256bc34e5773f5f152abc',
      	'access_token' : '1c0671b1a32718d52803d52ada111b617d461c5a',
        'club_id' : '3641'
  	},
  	authorize: function(){
    		$.ajax({
	            type: "POST",
	            jsonp : false,
	            cache: true,
	            data: {
	                'client_id' : this.get('client_id'),
	                'client_secret' : this.get('client_secret'),
	                'code' : this.get('code'),
	            },
	            dataType: "jsonp",
	            url: "https://www.strava.com/oauth/token",
	            success: function(data)
	            {
	                console.log(data);
	            },
	            error: function(e)
	            {
	                console.log(e);
	            }
	        });
    		this.on('change', function(){
        		console.log('- Values for this model have changed.');
    		});
  		}
});
