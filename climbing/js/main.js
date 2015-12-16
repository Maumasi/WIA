// Google Maps

(function(window, mapster, $, google){

//  test for Modernizr
	if (Modernizr.canvas) {
    	console.log("Modernizr was successfully applied as a dependency");
  	}else{
	  	console.log("Modernizr has failed as a dependency");
  	}
  	
// Google Maps API ---------------------------------
//--------------------------------------------------
	var options = mapster.MAP_OPTIONS,
	element = document.getElementById("map"),
	
// map marker
	map = mapster.create(element, options);
	
    var marker = map.addMarker({
        lat: 51.9540386,
        lng: -120.1767826,
        visible: true,
        draggable: false,
        id: 1,
        content: "Helmcken Falls, British Columbia"
    });
    
// Chart -------------------------------------------
//--------------------------------------------------
    var canvas = document.getElementById("chart");
    var ctx = canvas.getContext("2d");    
    var skillChartData = {
            labels: ["Experience", "Special Gear", "Fitness"],
            datasets: [{
				fillColor: "rgba(250, 201, 68, 0.5)",
				strokeColor: "rgba(250, 201, 68, 1)",
				pointColor: "rgba(250, 201, 68, 1)",
				pointStrokeColor: "#fff",
				data: [5.75, 5.1, 5.75]
            }]
    }
    
 //Chart options
    var opts = {
	    animation: true,
	    scaleOverride: true,
	    scaleSteps: 5,
	    scaleStepWidth: 1,
	    scaleStartValue: 1,    
	    scaleLineColor: "rgba(250, 250, 250, .7)",		
		angleLineWidth : 2,
		angleLineColor : "rgba(250, 250, 250, .7)",
		pointLabelFontSize : 25,
	    pointLabelFontColor : "#fff",	    
	    scaleShowLabels : false,	    
	    scaleLabel: '<%=value%>',	    
	    showTooltips: false,
	    responsive: true,
	    datasetFill : false		    
    }
    var skillChart = new Chart(ctx).Radar(skillChartData, opts);
    
// Gallery -------------------------------------------
//----------------------------------------------------
	    var $galleryImg = $("ul#gallery > li").each(function(){
		    var $imgLink = $(this).children("a").attr("data-source");
		    $(this).css({
			    "background": "url(../"+$imgLink+") no-repeat",
			    "background-size": "cover"
			});
	    });
    	
// ----------------------------------- !!!
// ----------------------------------- !!!	custom destination click events
// ----------------------------------- !!!
	$(".showDestination").on("click", function(e){
		e.preventDefault();
		
// style current selected destination
		$(".showDestination").removeClass("currentlySelected");
		$(this).addClass("currentlySelected");

// Map events		
		var newLat = parseFloat($(this).attr("data-lat"));
		var newLng = parseFloat($(this).attr("data-lng"));
		var newContent = $(this).attr("data-content");
		
		options.center.lat = newLat;
		options.center.lng = newLng
		
		map.gMap.panTo(new google.maps.LatLng(newLat, newLng));
		
		var marker = map.addMarker({
	        lat: newLat,
	        lng: newLng,
	        visible: true,
	        draggable: false,
	        id: 1,
	        content: newContent
	    });

// Graph events
		var skillEx = parseFloat($(this).attr("data-skill-Ex"));
		var skillSpecial = parseFloat($(this).attr("data-skill-Special"));
		var skillFit = parseFloat($(this).attr("data-skill-Fit"));
				
		skillChartData.datasets[0].data[0] = skillEx
		skillChartData.datasets[0].data[1] = skillSpecial
		skillChartData.datasets[0].data[2] = skillFit
				
		var currentSkillChart = new Chart(ctx).Radar(skillChartData, opts).update();

// description
		$(".description").slideUp();
		var article = $(this).attr("data-article");
		$(article).slideDown();
	});// custom click events close
	
	
//	Gallery Image Pop-up
	$(".galleryItem").on("click", function(e){
		e.preventDefault();
		
		var $imgLink = $(this).children("a").attr("data-source");
		var $imgAlt = $(this).children("a").attr("data-description");
		var $imgModal = $("#imgPopUp");
		var $img = $("#imgPopUp > img");
		
		$($imgModal).fadeIn(300);
		$($img).attr("src",$imgLink);
		$($img).attr("alt",$imgAlt);
	});
	
// Close Modal
		$(".closeImgModal").on("click", function(e){
			e.preventDefault();
			
			var $imgModal = $("#imgPopUp");
			$($imgModal).fadeOut(300);
		});
	
	
}(window, window.Mapster, jQuery, google));









