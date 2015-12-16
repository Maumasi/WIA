




(function(window, google){
	
	var Mapster = (function(){
		function Mapster(element, options){
            this.gMap = new google.maps.Map(element, options);
            this.markers = [];
        }
        
       // prototype for all maps
        Mapster.prototype = {
            
            // custom listener function
            _on: function(opts){
                
                var self = this;
                google.maps.event.addListener(opts.obj, opts.event, function(e){
                    opts.callback.call(self, e);
                });
            },
                        
            // Add a marker and make it draggable
            addMarker: function(opts){
                var marker;
                opts.position = {
                    lat: opts.lat,
                    lng: opts.lng
                }
                marker = this._createMarker(opts);
                this._addMarker(marker);
                
                if(opts.event){
                    this._on({
                        obj: marker,
                        event: opts.event.name,
                        callback: opts.event.callback
                    });
                }
                if(opts.content){
                    this._on({
                        obj: marker,
                        event: 'click',
                        callback: function(){
                            
                            var infoWindow = new google.maps.InfoWindow({
                                content: opts.content
                            });
                            infoWindow.open(this.gMap, marker);
                        }
                    })
                }
                return marker;
            },
            _addMarker: function(marker){
	            this.markers.push(marker);
            },
            _removeMarker: function(marker){
	            var indexOf = this.markers.indexOf(marker);
	            if(indexOf !== -1){
		            this.markers.splice(indexOf, 1);
		            marker.setMap(null);				// updates map
	            }
            },
            
            findMarkerByLat: function(lat){
	            for(var i = 0; i < this.markers.length; i++){
		            var marker = this.markers[i];
		            if(marker.position.lat() === lat){
			            return marker;
		            }
	            }
            },
            
            // Map marker options
            _createMarker: function(opts){
                
                opts.map = this.gMap;
                return new google.maps.Marker(opts);
            }
        };
		
		return Mapster;
	}());
	
	Mapster.create = function(element, opts){
		return new Mapster(element, opts);
	};
	
	window.Mapster = Mapster;
	
}(window, google));


















