/*global ffProto, Backbone*/

ffProto.Models = ffProto.Models || {};

(function () {
    'use strict';

    ffProto.Models.CredentialsModel = Backbone.Model.extend({

    	defaults: {
    		'client_id' : '48',
            'client_secret' : '2776c1edb8022ecef401bb0cb92a3c882dc393b7',
            'code' : '47faa4feffbff3f32e1256bc34e5773f5f152abc',
            'access_token' : '1970b06b4f575a7efc452037ad71c3d0ac795f95'
  		},
  		initialize: function(){
    		console.log('This model has been initialized.');
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

})();
