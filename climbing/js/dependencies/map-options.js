(function(window, google, mapster){
    
    
    
    mapster.MAP_OPTIONS = {
        center: {
            
            lat: 51.9540386,
			lng: -120.1767826,
        },
        
        zoom: 13,
        disabledDefaultUI: false,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        maxZoom: 18,
        minZoom: 11,
        
        zoomControlOptions: {
            position: google.maps.ControlPosition.BOTTOMLEFT,
            style: google.maps.ZoomControlStyle.SMALL
        }
        
    };

    
    
    
}(window, google, window.Mapster || (window.Mapster = {})))