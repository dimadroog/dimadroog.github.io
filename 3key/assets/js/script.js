/*navbar*/
jQuery('.b-navbar-hamburger').click(function() {

    jQuery(this).toggleClass('b-navbar-hamburger_active');

    jQuery('.navbar').addClass('navbar-magic-dark');
});

jQuery(window).scroll(function() {
    var scrollTop = jQuery(this).scrollTop();
    if (scrollTop <= 0) {
        //transparent
        jQuery('.navbar').removeClass('navbar-magic-dark');
    } else {
        //black
        jQuery('.navbar').addClass('navbar-magic-dark');

    }
});


/*slick slider*/
jQuery('.b-reports-slick').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,

    responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: true,
                prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/img/site/slider-left.png'>",
                nextArrow: "<img class='a-right control-c next slick-next' src='./assets/img/site/slider-right.png'>"
            }
        },


        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/img/site/slider-left.png'>",
                nextArrow: "<img class='a-right control-c next slick-next' src='./assets/img/site/slider-right.png'>"
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


/*google map*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 55.347173,
            lng: 86.080063
        },
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#E6E6E6"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "color": "#656565"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#E6E6E6"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#C3C3C3"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    var myMarker = {
        lat: 55.347173,
        lng: 86.080063
    };
    var marker = new google.maps.Marker({
        position: myMarker,
        map: map,
        title: '3Key',
        icon: './assets/img/site/map-marker.png'
    });

}