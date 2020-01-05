'use strict';

(function($){
	$(document).ready(function() {
	
		$('.slider').slick({
			dots:true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay:4

		});
		
	});

})(jQuery);

let map;
function initMap() {
    let map, coords,styles,marker,info,content;
    
    coords ={
        lat: 49.457633, 
        lng: 35.127859
    };

    content ='<h1 class="info-title">Do u know that you are here?</h1>';

    styles =[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8ec3b9"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1a3646"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#64779e"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#334e87"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6f9ba5"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3C7680"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#304a7d"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c6675"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#255763"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b0d5ce"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3a4762"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#0e1626"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4e6d70"
                }
              ]
            }
          ]
        

  map = new google.maps.Map(document.getElementById('map'), {
    center: coords,
    zoom: 10,
    styles:styles,
    disableDefaultUI: true,
    zoomControl:true,
    streetViewControl: true
  });

  marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: 'images/markers/marker.png',
    draggable: true
  });  

  marker.addListener('click', function() {
      info.open(map, marker);
  })
    
    info = new google.maps.InfoWindow({
        content: content
    });

}


(function($){
    $(document).ready(function() {
        //Code
        let sections ={
            header:$('#header').offset().top,
            about:$('#about').offset().top,
            services:$('#services').offset().top,
            gallery:$('#gallery').offset().top,
            blog:$('#blog').offset().top,
            contact:$('#contact').offset().top
        };
        console.log(sections);

        $(window).scroll(function() {
            let scrTop = $(document).scrollTop() + ($(window).height()/ 3),
            pos;

            if (scrTop < sections.about) {
                pos = 'header';
            } else if (scrTop >= sections.about && scrTop < sections.services){
                pos = 'about';
            } else if (scrTop >= sections.services && scrTop < sections.gallery){
                    pos = 'services';   
            } else if (scrTop >= sections.gallery && scrTop < sections.blog){
                    pos = 'gallery';
            } else if (scrTop >= sections.blog && scrTop < sections.contact){
                        pos = 'blog';             
            } else if (scrTop >= sections.contact) {
                pos = 'contact';
            }

            $('.fixed-nav').find('.active').removeClass('active');
            $('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');
            
        })

        //Fancybox
        $('.photo').fancybox({
            buttons: [
               
                
                "fullScreen",
                "download",
                "thumbs",
                "close"
              ],
              animationEffect:"zoom-in-out",
              animationDuration: 800,
              transitionEffect: "rotate",
              transitionDuration: 700,
              loop:true
        });
    });
})(jQuery);


