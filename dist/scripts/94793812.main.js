window.ffProto={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";console.log("Hello from Backbone!"),$.ajax({type:"POST",contentType:"application/json; charset=utf-8",jsonp:!1,cache:!0,data:{client_id:"48",client_secret:"2776c1edb8022ecef401bb0cb92a3c882dc393b7",code:"811733fcb8a5d8d3a6f5a78597e92043329790f0"},dataType:"jsonp",jsonpCallback:"myFunction",url:"https://www.strava.com/oauth/token",success:function(a){console.log(a)},error:function(a){console.log(a)}})}},$(document).ready(function(){"use strict";ffProto.init()}),this.JST=this.JST||{};