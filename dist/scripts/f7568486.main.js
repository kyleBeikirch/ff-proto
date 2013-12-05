var app={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";app.credentials=new app.CredentialsModel,app.athletes=new app.Riders,app.athletes.fetch(),app.activities=new app.Rides,app.activities.fetch(),app.mapper=new app.MapView,app.riderList=new app.RidersView}};$(document).ready(function(){app.init()});var app=app||{};app.CredentialsModel=Backbone.Model.extend({defaults:{client_id:"48",client_secret:"2776c1edb8022ecef401bb0cb92a3c882dc393b7",code:"47faa4feffbff3f32e1256bc34e5773f5f152abc",access_token:"1c0671b1a32718d52803d52ada111b617d461c5a",club_id:"3641"},authorize:function(){$.ajax({type:"POST",jsonp:!1,cache:!0,data:{client_id:this.get("client_id"),client_secret:this.get("client_secret"),code:this.get("code")},dataType:"jsonp",url:"https://www.strava.com/oauth/token",success:function(a){console.log(a)},error:function(a){console.log(a)}}),this.on("change",function(){console.log("- Values for this model have changed.")})}});var app=app||{};app.Athlete=Backbone.Model.extend({defaults:{profile:"img/placeholder.png",firstname:"Johnny",lastname:"Applestrava",city:"San Francisco",state:"California"}});var app=app||{};app.Riders=Backbone.Collection.extend({model:app.Athlete,sync:function(a,b,c){var d=_.extend({type:"GET",dataType:"jsonp",url:b.url(),processData:!1},c);return $.ajax(d)},url:function(){return"https://www.strava.com/api/v3/clubs/"+app.credentials.get("club_id")+"/members?access_token="+app.credentials.get("access_token")+"&per_page=200"},parse:function(a){var b=this;return _(a).each(function(a){b.add(a)}),a.results}});var app=app||{};app.Activity=Backbone.Model.extend({defaults:{name:"Ride",distance:0,moving_time:0,total_elevation_gain:0,start_date:0,map:null}});var app=app||{};app.Rides=Backbone.Collection.extend({model:app.Activity,sync:function(a,b,c){var d=_.extend({type:"GET",dataType:"jsonp",url:b.url(),processData:!1},c);return $.ajax(d)},url:function(){return"https://www.strava.com/api/v3/clubs/"+app.credentials.get("club_id")+"/activities?access_token="+app.credentials.get("access_token")+"&per_page=200"},parse:function(a){var b=this;return _(a).each(function(a){b.add(a)}),a.results}});var app=app||{};app.MapView=Backbone.View.extend({el:$("#map"),events:{"dblclick label":"edit","keypress .edit":"updateOnEnter"},initialize:function(){var a=new google.maps.LatLng(37.760407,-122.463904),b={zoom:12,center:a,mapTypeid:google.maps.MapTypeId.ROADMAP};app.map=new google.maps.Map(document.getElementById("map"),b),this.listenTo(app.activities,"add",this.addRide)},addRide:function(a){null!==a.get("map").summary_polyline&&this.addRouteToMap(a.get("map").summary_polyline)},edit:function(){},updateOnEnter:function(){},show:function(){},addRouteToMap:function(a){{var b=google.maps.geometry.encoding.decodePath(a);new google.maps.Polyline({path:b,strokeColor:"#FF0000",strokeOpacity:.4,strokeWeight:2,map:app.map})}}});var app=app||{};app.RidersView=Backbone.View.extend({el:$(".list"),initialize:function(){var a={valueNames:["firstname","lastname","city"],item:'<li><h3><p class="firstname"></p><p class="lastname"></p></h3><p class="city"></p></li>'};this.userList=new List("users",a),this.listenTo(app.athletes,"add",this.addRider)},addRider:function(a){this.userList.add(a.attributes)}});