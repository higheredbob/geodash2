
config = {
    hoverProperty: "pickuptime",
    hoverPropertyTwo: 'dist4',
    hprop: 'dropofftime',
    hproptwo: 'dropoffx',
    hpropthree: 'dropoffy',
    base: [33.2852648,  -111.7012255],
    opts: {units: 'miles'},
    geoType: 'multiLineString'

};
//$('#geolink').hide();
//$('#tablelink').hide();
//$('#functionlink').hide();
//$('#menuWrangle').hide();
//$('#animlink').hide();
$('#geoOutput').hide();
$('#geoInput').hide();
$('#btnInputClear').hide();
$('#btnInput').hide();

$(document).ready(function(){
var mapboxOSM = L.tileLayer("https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={access_token}", {
  maxZoom: 19,
  access_token: 'pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ',
  subdomains: ["a", "b", "c", "d"],
  attribution: 'Basemap <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
});

var  mapboxDark = L.tileLayer("https://{s}.tiles.mapbox.com/v3/mapbox.world-dark/{z}/{x}/{y}.png", {
  attribution: 'Basemap <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
});

var mapboxSat = L.tileLayer("https://{s}.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token={access_token}", {
  maxZoom: 19,
  access_token: 'pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ',
  subdomains: ["a", "b", "c", "d"],
  attribution: 'Basemap <a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
});
var mapboxStyled = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp0uuubn0lks2smif2xgf4cy/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqcDFqb3owcjAxdHUzd2xieW1mcnFxZzQifQ.SglahG2gZ66A7orjOxzWKg', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var mapboxBluebox = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp1ep6bn14452smi9uk1nvon/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqcDFqb3owcjAxdHUzd2xieW1mcnFxZzQifQ.SglahG2gZ66A7orjOxzWKg', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var mapboxGreybox = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp2q1xgr11822rnsd5oael0q/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var mapboxDecimal = L.tileLayer('https://api.mapbox.com/styles/v1/higherbob/cjp1ep6bn14452smi9uk1nvon/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGlnaGVyYm9iIiwiYSI6ImNqbzZsZXR5cDA1cDUza29qYnV1NjA0OTAifQ.pvTwwdIdX0vK0P7e18U9CQ', {
  tileSize: 512,
  zoomOffset: -1,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OSM = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });

var OSM_hot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
});

var OSM_topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var open_grey = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
  maxZoom: 19,
  attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var hyda_street = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var stamen_terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png'
});

var esri_street = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var esri_delohme = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
  minZoom: 1,
  maxZoom: 18
});

var esri_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var carto_dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

var hike_bike = L.tileLayer('http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});



function getColor(n) {
    return n > 3.4 ? '#94f0ff' :
           n > 2.5 ? '#7fd5f0' :
           n > 1.75 ? '#71c3e6' :
           n > 1.2 ? '#63b1dc' :
           n > 0.60 ? '#559fd2' :
           n > 0.25 ? '#478dc8' :
           n > 0.12 ? '#397bbe' :
           n > 0.08 ? '#2b69b4' :
           n > 0.04 ? '#164ea5' :
           n > 0.02 ? '#013396' :
                    '#002588';
}


function getColorR(n) {
    return n > 3.4 ? '#ff7272' :
           n > 2.5 ? '#f06363' :
           n > 1.75 ? '#e65959' :
           n > 1.2 ? '#dc4f4f' :
           n > 0.60 ? '#d24545' :
           n > 0.25 ? '#c83b3b' :
           n > 0.12 ? '#be3131' :
           n > 0.08 ? '#af2222' :
           n > 0.04 ? '#a51818' :
           n > 0.02 ? '#960909' :
                    '#8c0303';
}


function getColorO(n) {
    return n > 3.4 ? '#ffd487' :
           n > 2.5 ? '#fdca7b' :
           n > 1.75 ? '#fbc06f' :
           n > 1.2 ? '#f9b663' :
           n > 0.60 ? '#f7ac57' :
           n > 0.25 ? '#f5a24b' :
           n > 0.12 ? '#f3983f' :
           n > 0.08 ? '#f0892d' :
           n > 0.04 ? '#ed7a1b' :
           n > 0.02 ? '#ea6b09' :
                    '#ee6700';
}


highlightLayer = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            color: '#536dfe',
            weight: 2,
            opacity: 1,
            fillColor: '#536dfe',
            fillOpacity: 1,
            clickable: false
        });
    },
    style: function (feature) {
        return {
            color: '#536dfe',
            weight: 2,
            opacity: 1,
            fillColor: '#536dfe',
            fillOpacity: 0.5,
            clickable: false
        };
    }
});


featureLayer = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColor(feature.properties.dist4),
            color: getColor(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        //console.log(layer);
        layer.on({
            mouseover: function (e) {

                $(".info-control").html(feature.properties[config.hoverProperty]);
                $('.info-control').html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control').show();
            },
            mouseout: function (e) {

                $('.info-control').hide();
            },
            click: function(e) {
                identifyFeature(L.stamp(layer));
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});


featureLayerAlt = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColorR(feature.properties.dist4),
            color: getColorR(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        //console.log(layer);
        layer.on({
            mouseover: function (e) {

                $(".info-control").html(feature.properties[config.hoverProperty]);
                $('.info-control').html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control').show();
            },
            mouseout: function (e) {

                $('.info-control').hide();
            },
            click: function(e) {
                identifyFeature(L.stamp(layer));
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});


featureLayerAlt2 = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 3,
            weight: 2,
            fillColor: getColorO(feature.properties.dist4),
            color: getColorO(feature.properties.dist4),
            opacity: 1,
            fillOpacity: 1
        });
    },
    onEachFeature: function(feature, layer) {
        //console.log(layer);
        layer.on({
            mouseover: function (e) {

                $(".info-control").html(feature.properties[config.hoverProperty]);
                $('.info-control').html(["Pickup: "+feature.properties[config.hoverProperty]+"<br />","distance: "+ feature.properties[config.hoverPropertyTwo]]);
                $('.info-control').show();
            },
            mouseout: function (e) {

                $('.info-control').hide();
            },
            click: function(e) {
                identifyFeature(L.stamp(layer));
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            }
        });
    }

});



var baseLayers = {
  "Street Map": mapboxOSM,
  "Dark Map": mapboxDark,
  "Aerial Imagery": mapboxSat,
  "bluebox": mapboxBluebox,
  "decimal": mapboxDecimal,
  "greybox": mapboxGreybox,
  "styled": mapboxStyled,
  "osm street": OSM,
  "osm hot": OSM_hot,
  "osm topo": OSM_topo,
  "openmaps": open_grey,
  "hyda": hyda_street,
  "stamen terrain": stamen_terrain,
  "esri street": esri_street,
  "esri delohme": esri_delohme,
  "esri satellite": esri_satellite,
  "carto dark": carto_dark,
  "hike bike": hike_bike
};

var TlIcon = L.Icon.Default.extend({
  options: {
        iconUrl: 'maker.svg'
  }
});
var tlicon = new TlIcon();
L.Map.include({
  'clearLayers': function (){
    this.eachLayer(function (layer) {
      this.removeLayer(layer);
    }, this);
  }
});

var overlayLayers = {
  "<span id='layer-name'>GeoJSON Layer</span>": featureLayer
};
var overlayLayersR = {
   "<span id='layer-name'>GeoJSON Red</span>": featureLayerAlt
};
var overlayLayersO = {
   "<span id='layer-name'>GeoJSON Orange</span>": featureLayerAlt2
};


map = L.map('map', {
    layers: [mapboxGreybox, featureLayer, highlightLayer],
    center: [33.44332, -111.6743],
    zoom: 12,
    maxZoom: 19,
    fullscreenControl: true,
    zoomControl: false
});

//L.svg().addTo(maptwo);
layerControl = L.control.layers(baseLayers, overlayLayers);
//layerControlR = L.control.layers( overlayLayersR);
//layerControlO = L.control.layers( overlayLayersO);
L.control.zoom({zoomInText: '', zoomOutText: '',position: 'topleft'}).addTo(map);
layerControl.addTo(map);
//layerControlR.addTo(map);
//layerControlO.addTo(map);
setHeights();

 $(window).resize(function(){
        setTextareaWidth();
        setHeights();
    });


map.on("enterFullscreen", function() {

    var onepart = Math.ceil($(window).height())
    var twopart = Math.ceil($(window).width())
    $('#maptwo').hide();
    $("#geoInput").hide();
    $('#geoOutput').hide();

    $("#map").css('height',onepart);
    $('#map').css('width', twopart);
    $('#poptime').show();
    $('#poptime').popover('show');
    L.Util.requestAnimFrame(map.invalidateSize,map,!1,map._container);
    //L.Util.requestAnimFrame(maptwo.invalidateSize,maptwo,!1,maptwo._container);
    map.invalidateSize();
   });
map.on('exitFullscreen', function(){
    var textHeight = $('#geoInput').height();
    var onepart = Math.floor($(window).height());
    var twopart = Math.floor($(window).width());
    $('#maptwo').hide();
    $('#geoInput').show();
    //$('#geoOutput').show();

    //$('#maptwo').css('width', twopart - 145);
    $('#map').css('width', twopart - 145);
    //$('#maptwo').css('height', onepart + 160);
    $('#map').css('height', onepart - textHeight);
    $('#poptime').hide();
    $('#poptime').popover('hide');
    L.Util.requestAnimFrame(map.invalidateSize,map,!1,map._container);
    //L.Util.requestAnimFrame(maptwo.invalidateSize,maptwo,!1,maptwo._container);
    //maptwo.invalidateSize();
    map.invalidateSize();

});
function setTextareaWidth() {
        var widthMaps = $('#map').width() - 15;
        $('#geoInput').width(widthMaps);
        //$('#geoOutput').width(widthMaps);
    }


function setHeights() {

        var w = $(window).width();

        if (w > 770) {
          var textHeight = $('#geoInput').height();
            var viewportHeight = $(window).height();
            var viewportWidth = $(window).width();
            var navbarHeight = $('.navbar').height();
            var availableHeight = viewportHeight - textHeight;//- navbarHeight - 8 - 17 - 21 - 34;
            var equalParts = Math.floor(viewportHeight);
            var equalwidth = Math.floor(viewportWidth);
            $('#map').css('height',equalParts - 50);
            $('#map').css('width', equalwidth - 300);
            $('#geoInput').css('height',equalParts);
            //$('#maptwo').css('width', equalwidth - 145);
            //$('#maptwo').css('height',equalParts + 160);
            //$('#geoOutput').css('height',equalParts);
            //$('#chloromap').css('height', equalParts);
            // add margin, in case navbar is higher
            if (navbarHeight > 50) {
                $('body').css('margin-top','100px');
            } else {
                $('body').css('margin-top','8px');
            }
        } else {
            $('.buttonsAlign').css('margin-bottom','15px');
        }
        map.invalidateSize();
        //maptwo.invalidateSize();
    }
 setTextareaWidth();




function identifyFeature(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
      value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
    }
    content += "<tr><th>" + key + "</th><td>" + value + "</td></tr>";
  });
  content += "<table>";
  $("#feature-info").html(content);
  $("#featureModal").modal("show");
}
map.on("click", function(e) {
    highlightLayer.clearLayers();
});

featuresOut = L.geoJson();
featuresIn = L.geoJson();


function identifyData(ray, config){
  if(config.addProperties != ""){
    f = config.addProperties;
    props = ray.f;
  } else {
    f = {};
    props = ray.f;
  }
 var  redef = {
              "type": "FeatureCollection",
              "features": [
              {
                "type": "Feature",
                "properties" : props,
                "type": config.geoType,
                "coordinates": [
                  [
                    ray.geometry.coordinates,
                  ]
                ]
              }
            ]
          };
var newray = [];
for(var i = 0; i < redef.features.length; i++){
    f = redef.features[i];
  }
if(config.geoType == "Polygon") {

  newray.push(turf.featureCollection(turf.polygon(f.geometry.coordinates, f.properties)));
} else if(config.geoType == "multiPolygon") {
  newray.push(turf.featureCollection(turf.multiPolygon(f.geometry.coordinates, f.properties)));
} else if(config.geoType == "lineString") {
  newray.push(turf.featureCollection(turf.lineString(f.geometry.coordinates, f.properties)));
} else if(config.geoType == "multiLineString") {
  newray.push(turf.featureCollection(turf.multiLineString(f.geometry.coordinates, f.properties)));
}
return newray;
}


var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info-control'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = "";
};


info.addTo(map);
//info.addTo(maptwo);
$(".info-control").hide();

custBar = L.control.custom({
            position: 'bottomleft',
            content : '<div class="btn-toolbar" role="toolbar">'+
                        '<div id="totalV" class="btn-group mr-2" role="group" aria-label="first group">'+
                      '    <button id="lyrbtn" class="btn btn-sm btn-danger type="button">'+
                      '       <i class="material-icons" >layers</i>'+
                      '    </button>'+
                      '    <button id="drawbtn" class="btn btn-sm btn-info" type="button" id="styleditorbtn">'+
                      '       <i class="mdi mdi-marker" ></i>'+
                      '    </button>'+
                      '    <button id="clickNext" class="btn btn-sm btn-primary" type="button">'+
                      '       <i class="material-icons">local_offer</i>'+
                      '    </button>'+
                      //'    <button class="btn btn-sm btn-rose" type="button">'+
                      //'       <i class="material-icons">location_history</i>'+
                      //'    </button>'+
                      //'    <button class="btn btn-sm btn-success" type="button">'+
                      //'       <i class="material-icons">my_location</i>'+
                      //'    </button>'+
                      //'    <button class="btn btn-sm btn-warning" type="button">'+
                      //'       <i class="material-icons">map</i>'+
                      //'    </button>'+
                      '  </div>'+
                      '</div>',
            classes : 'btn-group-vertical btn-group-sm',
            style   :
            {
                margin: '8px 10px 8px',
                width: '15px',
                padding: '0',
                cursor: 'pointer'
            },
            datas   :
            {
                'foo': 'bar',
            },
            events:
            {
                click: function(data)
                {
                    console.log('wrapper div element clicked');
                    console.log(data);
                },
                dblclick: function(data)
                {
                    console.log('wrapper div element dblclicked');
                    console.log(data);
                },
                contextmenu: function(data)
                {
                    console.log('wrapper div element contextmenu');
                    console.log(data);
                },
            }
        });
        custBar.addTo(map);

custSearch = L.control.custom({
            position: 'topleft',
            content : '<div id="inputdiv" class="input-group">'+
                      '    <input id="inputsearch" type="text" class="form-control input-sm" placeholder="Search">'+
                      '    <span class="input-group-btn">'+
                      '        <button id="inputbtn" class="btn btn-warning btn-sm" type="button">Go!</button>'+
                      '    </span>'+
                      '</div>',
            classes : '',
            style   :
            {
                position: 'absolute',
                left: '60px',
                top: '0px',
                width: '200px',
            },
        });
        custSearch.addTo(map);

        custTime = L.control.custom({
            position: 'topleft',
            content : '<a tabindex="0" id="poptime" class="btn btn-sm btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content=""></a>',
            classes : '',
            style :
            {
              position: 'absolute',
              left: '10px',
              top: '130px',
              width: '50px'
            },

        });
        custTime.addTo(map);
        /*
        L.control.custom({
            position: 'bottomleft',
            content : '<div class="panel-body">'+
                      '    <div class="progress" style="margin-bottom:0px;">'+
                      '        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="41" '+
                      '             aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 41%">'+
                      '            41% Completed'+
                      '        </div>'+
                      '    </div>'+
                      '</div>',
            classes : 'panel panel-default',
            style   :
            {
                width: '200px',
                margin: '20px',
                padding: '0px',
            },
        })
        .addTo(map);

        L.control.custom({
            position: 'bottomright',
            content : '<img src="custom/images/mobile.png" class="img-thumbnail" id="demoImage">',
            classes : '',
            style   :
            {
                margin: '0px 20px 20px 0',
                padding: '0px',
            },
        })
        .addTo(map);
         */
        /*
        L.control.custom({
            position: 'bottomright',
            content : '<button class="btn btn-default btn-sm" id="changeImg">'+
                      '    <i class="fa fa-refresh"></i> Change Image'+
                      '</button>',
            classes : '',
            style   :
            {
                margin: '5px 20px',
                padding: '0px',
            },
        })
        .addTo(map);

        $('#changeImg').click(function(){
            $('#demoImage').attr('src','http://lorempixel.com/105/105/');
        });
        */
//$('#stepper-main').hide();


var directionField = document.getElementById('date-label');
var slider = document.getElementById('date-slider');
var mileslider = document.getElementById('mile-slider');
var mileField = document.getElementById('mile-label');


$('#reload').click(function(){
    location.reload();
});

$('#poptime').hide();


noUiSlider.create(slider, {
  start: 240,
 // tooltips: [slider({decimals: 1 })],
  connect: [true,false],
  step: 1,
  range: {
    min: 0,
    max: 500
  }
});
noUiSlider.create(mileslider, {
  start: 60,
 // tooltips: [slider({decimals: 1 })],
  connect: [true,false],
  step: 1,
  range: {
    min: 0,
    max: 250
  }
});

slider.classList.add('s1-slide');

slider.noUiSlider.on('update', function (values, handle) {
    directionField.innerHTML = values[handle];
    sliderVal = values[handle];
});
mileslider.noUiSlider.on('update', function (values, handle) {
    mileField.innerHTML = values[handle];
    mileVal = values[handle];
});

featuresdata1 = [];
var ltlng = [];
var featuresIn = L.layerGroup();
var featuresOut = L.layerGroup();
var result;
var intersectL = [];
var bufferL = [];
var layerIn = '<ul id="ul">';
var layerOut = '<div id="layerOut">';
var count = 0;
features1 = [];

$('#infolink').click(function(){

$('#functionlink').show();
$('#menuWrangle').show();
$('#animlink').show();
count += 1;
geoFile = 'custom/9-27.geojson'


   newfile = $.getJSON(geoFile, function(geoParse){
    console.log(geoParse);
    features1 = geoParse;
    //return geoParse;
   });
    //getFeatures = $('#geoInput').val();
    //features1 = jQuery.parseJSON(getFeatures);
    //features1 = featur
  //});

  //nowfile = newfile.responseText;

});
$('#playbutton').click(function(){

    featuresdata1.push(features1);
    features = $.map(features1.features, function(feature) {
        return feature.properties;
    });
    bounding = $.map(features1.features, function(feature) {
      return feature;
    });
    if (count == 1) {
    features2 = L.geoJSON(features1);
    featureLayer.addData(features1);
    map.fitBounds(features2.getBounds());
    //maptwo.fitBounds(features2.getBounds());
    //pathing.addTo(map);
    layerIn += '<li id="listInone"><div id="layerColorIn" style="background-color: blue; color: blue;"><p id="listInText" style="color: black;">' + 'Layer ' + count + '</p></div></li>';
    } else if (count == 2) {
     features2 = L.geoJson(features1);
    featureLayer.addData(features1);
    map.fitBounds(features2.getBounds());
    //maptwo.fitBounds(features2.getBounds());
    layerIn += '<li id="listIntwo"><div id="layerColorIntwo" style="background-color: red; color: red;"><p id="listInText" style="color: black;">' + 'Layer ' + count + '</p></div></li>';

    } else if (count == 3) {
    features2 = L.geoJson(features1);
    featureLayer.addData(features1);
    map.fitBounds(features2.getBounds());
    //maptwo.fitBounds(features2.getBounds());
    layerIn += '<li id="listInthree"><div id="layerColorInthree" style="background-color: orange; color: orange;"><p id="listInText" style="color: black;">' + 'Layer ' + count + '</p></div></li>';

    } else {alert('Too many Layers!');}
    layerIn += '</ul>';
    $('#layerIn').html(layerIn);
    $('#layerIn').css('visibility','visible');
    $('#map .leaflet-control-zoom').css('margin-left','5px');


});


function loadpleth(){

function getColor(d){
    return  d > 3200 ? '#fff9c4' :
            d > 2800 ? '#fff4a0' :
            d > 2000 ? '#fff280' :
            d > 1800 ? '#fff060':
            d > 1200 ? '#ffee40' :
            d > 980 ? '#ffec20' :
            d > 860 ? '#ffea00' :
            d > 740 ? '#ffc969' :
            d > 620 ? '#ffb754' :
            d > 500 ? '#ffa53f' :
            d > 380 ? '#ff932a' :
            d > 280 ? '#ff8a65' :
            d > 180 ? '#f67a56' :
            d > 108 ? '#f06f49' :
            d > 84 ? '#ea643c' :
            d > 62 ? '#e4592f' :
            d > 32 ? '#de4e22' :
            d > 24 ? '#d84315' :
            d > 16 ? '#bf360c' :
            d > 10 ? '#b3300a' :
            d > 6 ? '#aa2e0a' :
            d > 4 ? '#a12c0a' :
            d > 2 ? '#982a0a' :
            d > 1 ? '#8f280a' :
                    '#86260a';
}

$.getJSON('custom/data/finished.geojson', function (geojson) {
var geojsonlayer;
// ... our listeners


geojsonlayer = L.geoJson();
function plethstyle(feature) {
    return {
        fillColor: getColor(feature.visits),
        weight: 3,
        opacity: 0.15,
        color: '#c12700',
        dashArray: '1',
        fillOpacity: 0.75
    };
}

function plethhighlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        dashArray: '',
        fillOpacity: 0.5
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    plethinfo.update(layer.feature);
}
function plethresetHighlight(e) {
    geojsonlayer.resetStyle(e.target);
    plethinfo.update();
}
function plethzoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
function plethonEachFeature(feature, layer) {
    layer.on({
        mouseover: plethhighlightFeature,
        mouseout: plethresetHighlight,
        click: plethzoomToFeature
    });
}

geojsonlayer = L.geoJson(geojson, {
    style: plethstyle,
    onEachFeature: plethonEachFeature
}).addTo(map);

var plethinfo = L.control();

plethinfo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
plethinfo.update = function (props) {
    this._div.innerHTML = '<h4>Visits to Locations</h4>' +  (props ?
        '<b>' + props.visits + '</b><br />' + props.visits / 30 + ' hours / loc<sup></sup>'
        : 'Hover over a Tract');
  };

  plethinfo.addTo(map);
  });
}


$('#chorostart').click(function(){
  loadpleth();
});

$('#menuWrangle').click(function(){

});
$('#animateRoute').click(function(){
   var tall = "path";
   animationGenerator(tall);
});

$('#perClickAnimate').click(function(){
  var tom = "click";
  animationGenerator(tom);
});


function evalMile(milesEval){
      return milesEval <= 61 ? 2 :
            milesEval  <= 81 ? 3 :
            milesEval  <= 101 ? 4 :
            milesEval  >= 102 ? 5 :
                          2;
}

function animationGenerator(type){
 var truckpic =  L.control.custom({
                    position: 'bottomright',
                    content : '<img src="custom/images/2.jpg" height="90vh" width="100vw" class="img-thumbnail" id="demoImage">',
                    classes : '',
                    style   :
                    {
                        margin: '0px 20px 20px 0',
                        padding: '0px',
                    },
                });

  $('#geolink').show();
$('#tablelink').show();
  tweenToggle = 0;
  feat = features1.features;
  stringcount = 0;
  lines = 1;
  lineholder = [];
  propsholder = [];
  proplen = {};
  proplen[0] = 0;
  timelen = {};
  timelen[0] = 0;
  pp = 0;
  turfline = {};
  turfline[0] = [];
  miDiv = 12;
  minslen = {};
  minslen[0] = 0;
  modlen = {};
  modlen[0] = 0;
  timeout = {};
  timeout[0] = [];
  timeholderIn = [];
  timeholderOut = [];
  timecount = 0;
  linestring = {};
  stringsout = [];
  propsout = {};
  propsout[0] = [];
  medholder = [];
  osrmline = '';
  len = features1.features.length;
  for(var i = 0; i < len; i++){
    var f = features1.features[i].geometry.coordinates;

    var b = features1.features[i].properties;
    var tda = features1.features[i].properties.pickuptime;
    var fda = features1.features[i].properties.medallion;
    if(features1.features[i+1] !== undefined){
    var to = features1.features[i+1].properties.pickuptime;
    } else {
      var to = features1.features[i].properties.pickuptime
    }
    lineholder.push(f);
    propsholder.push(b);
    timeholderIn.push([tda, to]);
    medholder.push(fda);
    osrmline += "&loc="+f[1]+"%2C"+f[0];
  }
  startOsrm = "map.project-osrm.org/?z=12&center=33.404531%2C-111.963515"+osrmline+"&hl=en&alt=0";
  //$('#geoOutput').val(startOsrm);

  function clickstepper(){


    var len = timeholderIn.length;

    for(var i = 0; i < len; i++){
      dateA = timeholderIn[i][0];
      dateB = timeholderIn[i][1];
      convertA = Date.parse(dateA);
      convertB = Date.parse(dateB);
      duration = convertB - convertA;
      durmin = duration / 60000;
      modified = durmin / 2;
      seper = dateA.split(" ");
      seperA = seper[1].split(":");
      features1.features[i].properties.dur = durmin;
      features1.features[i].properties.mod = modified;
      features1.features[i].properties.rad = parseInt(seperA[0]);
      dar = features1.features[i].properties.medallion;

      timeArray.push({id: dar, pickup: dateA, dropoff: dateB, duration: duration, mins: durmin, modified: modified, hour:seperA[0]});
    }
      dropcoord = {};
      dropcoord[0] = [];
      if(type == "themall") {
      newmile = evalMile(mileVal)*580;
      } else {
      newmile = evalMile(mileVal);
      }
      icounter = 0 + newmile;

    for(var ish = 0; ish < propsholder.length; ish++){
      if(propsholder[ish].dist4 < 0.007) {
        icounter += 1;
      }
      if(ish <= icounter) {
        proplen[pp] += propsholder[ish].dist4;
        timelen[pp] += timeArray[ish].duration;
        minslen[pp] += timeArray[ish].mins;
        modlen[pp] += timeArray[ish].modified;
        timeout[pp].push(timeArray[ish]);
        //dropcoord[pp].push([propsholder[ish].dropoffx, propsholder[ish].dropoffy]);
      if(type == "themall"){
        turfline[pp].push(lineholder[ish])
      } else {
      if(lineholder[ish+1] !== undefined){
        turfline[pp].push(lineholder[ish], lineholder[ish+1]);
      } else {
          turfline[pp].push(lineholder[ish], lineholder[ish]);
        }
      }
        propsout[pp].push(propsholder[ish]);
      } else {
        proplen[pp] += propsholder[ish].dist4;
        timelen[pp] += timeArray[ish].duration;
        minslen[pp] += timeArray[ish].mins;
        modlen[pp] += timeArray[ish].modified;
        timeout[pp].push(timeArray[ish]);
        //dropcoord[pp].push([propsholder[ish].dropoffx, propsholder[ish].dropoffy]);
         if(type == "themall"){
        turfline[pp].push(lineholder[ish])
      } else {
      if(lineholder[ish+1] !== undefined){
        turfline[pp].push(lineholder[ish], lineholder[ish+1]);
      } else {
          turfline[pp].push(lineholder[ish], lineholder[ish]);
        }
      }
        propsout[pp].push(propsholder[ish]);
        icounter += newmile;
      pp += 1;
      if(lineholder[ish] !== undefined){
        proplen[pp] = 0;
        timelen[pp] = 0;
        minslen[pp] = 0;
        modlen[pp] = 0;
        timeout[pp] = [];
        turfline[pp] = [];
        propsout[pp] = [];
        //dropcoord[pp] = [];
      }
    }
  }
}
  function pathstepper(){
  for(var i = 0; i < propsholder.length; i++){
    if(proplen[pp] <= mileVal) {
      proplen[pp] += propsholder[i].dist4;
      turfline[pp].push(lineholder[i]);
      propsout[pp].push(propsholder[i]);
    } else {
      turfline[pp].push(lineholder[i]);
      propsout[pp].push(propsholder[i]);
      proplen[pp] += propsholder[i].dist4;
      pp += 1;
      proplen[pp] = 0;
      turfline[pp] = [];
      propsout[pp] = [];
    }
  }
}


  timeArray = [];
  function timestepper(){

  var len = timeholderIn.length;
    for(var i = 0; i < len; i++){
      dateA = timeholderIn[i][0];
      dateB = timeholderIn[i][1];
      convertA = Date.parse(dateA);
      convertB = Date.parse(dateB);
      duration = convertB - convertA;
      durmin = duration / 60000;
      modified = durmin / 2;
      seper = dateA.split(" ");
      seperA = seper[1].split(":");
      features1.features[i].properties.dur = durmin;
      features1.features[i].properties.mod = modified;
      features1.features[i].properties.rad = parseInt(seperA[0]);
      timeArray.push({id: i, pickup: dateA, dropoff: dateB, duration: duration, mins: durmin, modified: modified, hour:parseInt(seperA[0])});
    }
    distanceholder = [];
    for(var i = 0; i < timeArray.length; ++i) {
      if(timeArray[i].hour > 20 || timeArray[i].hour < 4) {
        var a = turf.point([features1.features[i].geometry.coordinates[1], features1.features[i].geometry.coordinates[0]]);
        var b = turf.point([config.base[0], config.base[1]]);
        distance = turf.distance(a, b, {units: 'miles'});
        if(distance > 1){
          distanceholder.push({dist:distance, ts:timeArray[i].pickup, coord:a,})
        }
      }
    }
    var output = JSON.stringify(distanceholder, null, '\t');
    var outputText = $('#geoOutput').val(output);

    dropcoord = {};
    dropcoord[0] = [];
    for(var it = 0; it < propsholder.length; it++){
      if(proplen[pp] <= mileVal) {
        proplen[pp] += propsholder[it].dist4;
        timelen[pp] += timeArray[it].duration;
        minslen[pp] += timeArray[it].mins;
        modlen[pp] += timeArray[it].modified;
        timeout[pp].push(timeArray[it]);
        //dropcoord[pp].push([propsholder[it].dropoffx, propsholder[it].dropoffy]);
      if(lineholder[it+1] !== undefined){
        turfline[pp].push(lineholder[it], lineholder[it+1]);
      } else {
        turfline[pp].push(lineholder[it], lineholder[it]);
        }
        propsout[pp].push(propsholder[it]);
      } else {
        proplen[pp] += propsholder[it].dist4;
        timelen[pp] += timeArray[it].duration;
        minslen[pp] += timeArray[it].mins;
        modlen[pp] += timeArray[it].modified;
        timeout[pp].push(timeArray[it]);
        //dropcoord[pp].push([propsholder[it].dropoffx, propsholder[it].dropoffy]);
      if(lineholder[it+1] !== undefined){
        turfline[pp].push(lineholder[it], lineholder[it+1]);
      } else {
        turfline[pp].push(lineholder[it], lineholder[it]);
      }
        propsout[pp].push(propsholder[it]);
        pp += 1;
        proplen[pp] = 0;
        timelen[pp] = 0;
        minslen[pp] = 0;
        modlen[pp] = 0;
        timeout[pp] = [];
        turfline[pp] = [];
        propsout[pp] = [];
        //dropcoord[pp] = [];
      }

    }

  }
  if(type == "themall") {
    clickstepper();
    for(var keyc in turfline){
      stringsout.push(turf.multiPoint(turfline[keyc], {id: keyc, dropcoords: dropcoord[keyc], distance: proplen[keyc], areaItems: propsout[keyc], time:timelen[keyc], mins:minslen[keyc], mod:modlen[keyc], timeFeatures:timeout[keyc]}));
  }
  } else if(type == "stepper"){
    timestepper();
    for(var key in turfline){
      stringsout.push(turf.lineString(turfline[key], {id: key, dropcoords: dropcoord[key], distance: proplen[key], areaItems: propsout[key], time:timelen[key], mins:minslen[key], mod:modlen[key], timeFeatures:timeout[key]}));
  }
  } else if( type == "click"){
    clickstepper();
  for(var keyb in turfline){
      stringsout.push(turf.lineString(turfline[keyb], {id: keyb, dropcoords: dropcoord[keyb], distance: proplen[keyb], areaItems: propsout[keyb], time:timelen[keyb], mins:minslen[keyb], mod:modlen[keyb], timeFeatures:timeout[keyb]}));
  }
  } else if( type == "newest"){
    timestepper();
  for(var keyb in turfline){
      stringsout.push(turf.lineString(turfline[keyb], {id: keyb, dropcoords: dropcoord[keyb], distance: proplen[keyb], ddur: (proplen[keyb] * 3000), areaItems: propsout[keyb], time:timelen[keyb], mins:minslen[keyb], mod:modlen[keyb], timeFeatures:timeout[keyb]}));
  }
  } else if( type == "show"){
    clickstepper();
  for(var keyb in turfline){
      stringsout.push(turf.lineString(turfline[keyb], {id: keyb, dropcoords: dropcoord[keyb], distance: proplen[keyb], areaItems: propsout[keyb], time:timelen[keyb], mins:minslen[keyb], mod:modlen[keyb], timeFeatures:timeout[keyb]}));
  }
  } else {
  pathstepper();
  for(var keya in turfline){
    stringsout.push(turf.lineString(turfline[keya], {id: keya, distance: proplen[keya]}));
  }
}
  //maptwo.toggleFullscreen()
  collect = turf.featureCollection(stringsout);
  truckpic.addTo(map);
  if(type == "path") {
    animPolyPath();
  } else if(type == "themall") {
    showthemall();
  } else if(type == "newest") {
    moveMarker();
  } else if(type == "marker") {
    animD3Marker();
  } else if (type == "stepper") {
    animStepper();
  } else if(type == "click") {
    animClicker();
  } else if(type == "show") {
    showAll();
  }
}


$('#showthemalld3').click(function(){
  type = "themall"

  animationGenerator(type);
})
function showthemall(){
var timeeval = 0;
  var markers = new L.MarkerClusterGroup();

  for (var i = 0; i < collect.features.length; i++) {
   var  f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id }
    );
    };
    marker.on("click", function(event){
      console.log(event);
      sortelements(event);
});

  map.addLayer(marker);

  }
//maptwo.addLayer(markers)
}

function sortelements(event){
for(var i = 0; i < collect.features.length; ++i){
  da = collect.features[i];
  if(event.target.options.id == da.properties.id ){
    f = da;
    break;
  }
}

  if(f.geometry){
    reducedata = f;
    var nawr = [];
    for(var i = 0; i < f.geometry.coordinates.length; ++i){
      var xa = f.properties.timeFeatures[i].id
      nawr.push(xa)
    }
    var newfilter = features1.features.filter(function(item) {
      return nawr.indexOf(item.properties.medallion) !== -1;
    })
  animateAll(newfilter);

  }

}
  function animateAll(filter) {
    //var timer;
    d3overlay = L.d3SvgOverlay(function(selection, projection){
      color = d3.scaleOrdinal()
                .range(['#cb6a43','#db5e25','#e17262','#cd3d2c','#dd3825','#8d5b32','#a1662e','#bb7a40','#c27217','#e88500','#ff9700','#ffad55','#00623b','#008049','#387f5c','#539773','#6cb08b','#84c9a3','#63c893','#8c433a','#a34638','#b54437','#cd3d2c','#ee6755']);
      offsetColor = d3.scaleOrdinal()
                .range(['#ffd740','#ff9100','#7c4dff','#e64a19','#00e676','#536dfe','#76ff03']);

      /*
  var svg = d3.select(maptwo.getPanes().overlayPane).append('svg')
                        .attr('class', "leaflet-zoom-hide");
  var transform = d3.geoTransform({
      point: allPoint
    })
// Set the world map path
    path = d3.geoPath()
       .projection(transform);
      g = svg.append("g").attr("class", "running-marker")
              .attr('class', "leaflet-zoom-hide")
    margin = {top: 10, right: 30,  bottom: 10, left: 30};
  */
    //var projection = d3.geoMercator()

//function applyLatLngToLayer(d) {
//    return maptwo.latLngToLayerPoint(
//      new L.LatLng(d.geometry.coordinates[1], d.geometry.coordinates[0]));
//}
// function allPoint(x, y) {
//    var point = maptwo.latLngToLayerPoint(new L.LatLng(y, x));
//    this.stream.point(point.x, point.y);
//}
// Group to hold all of the earthquake elements
gQuakes = selection.append('g')
                 .attr('id', 'all-quakes');


     quake = filter;

    // Create a group with the quake id to hold the quake circle and pulse circle
    var earthquakeGroups = gQuakes.selectAll('g')
       .data(quake)
       .enter().append('g')
       .attr('id', function(d) {
           return d.properties.medallion;
       })
       .attr('class', 'quake-group');

    //Create the pulse-circle circles for the earthquake pulse
    gQuakes.selectAll('.quake-group')
       .append('circle')
       .attr('class', 'circle pulse-circle')
       .attr('cx', function(d)  { return projection.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).x})
       .attr('cy', function(d)  { return projection.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).y})
       .attr('r', function(d) {
           return 0;
       })
       .attr('fill', '#fff');


    // Create the main quake circle with title
    gQuakes.selectAll('.quake-group')
      .append('circle')
      .attr('r', 0 )
      .attr('cx', function(d)  { return projection.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).x})
      .attr('cy', function(d)  { return projection.latLngToLayerPoint([d.geometry.coordinates[1], d.geometry.coordinates[0]]).y})
      .attr('class', 'circle quake-circle')
      .style('fill', 'red')
      .style('opacity', 0.95)
      .append('title')
      .text(function(d) {
        return 'Magnitude ' + d.properties.dist4 + ' ' + d.properties.pickuptime;
      });
   function trans(){
       datecounter = 0
  for(var i = 0; i < filter.length; ++i){
    mins = (10000 * filter[i].properties.dur) / 1900;
    datecounter += mins;
  }
  //datecounter = datecounter * 60000;

  // Setup 24 hours ago object
  var dateObj = Date.parse(new Date());
  future = dateObj + datecounter;
  var newdate = new Date(future);

var x = d3.scaleTime()
            .domain([new Date(), newdate])
            .range([0, 680]);
//width - margin.right - margin.left
  // Append the xAxis on top
  var xAxis = selection.append('g')
                 .attr('id', 'xAxis')
                 .attr('transform', 'translate(20, -190)')
                 .style('stroke', '#fff')
                 .call(d3.axisTop(x));


    timecounter = 0;
    var setQuakeDelay = function() {
      for(var i = 0, max = quake.length; i < max; i++){
        timeDiff =  Date.parse(quake[i].properties.dropofftime) - Date.parse(quake[i].properties.pickuptime);
        timecounter += timeDiff;
        timedodad = Date.parse(timeno);
        timenoob = (timeDiff * 9000) + timedodad
        timeDiffObj = new Date(timenoob);
        quake[i].delay = timecounter / 18200; // Speed up the animation, otherwise it would take 24 hours ><
      }
    }
    setQuakeDelay();

    // Grab the longest delay for the xAxis marker
    var longestDelay = quake[quake.length - 1].delay;

    // Changes the radius of the earthquakes to their magnitue using a transition
    // and the delay created from the setQuakeDelay function
    var quakeCircles = selection.selectAll('.quake-circle')
       .data(quake)
       .transition()
       .ease(d3.easeLinear)
       .delay(function(d) {
         return d.delay / 1.95 ;
       })
       .duration(2100)
       .attr('r', function(d) {

         if(d.properties.rad  <= 1) {
           return 9;
         } else if(d.properties.rad < 12) {
            return d.properties.rad * 1.6 * Math.random(1,6)
         }else {
           return d.properties.rad * 0.55 * Math.random();
         }
       })
       .style('opacity', 0.1)
       .style("fill", function(d) {return color(d.properties.rad)})


       var pulseCircles = selection.selectAll('.pulse-circle')
       .data(quake)
       .transition()
       .ease(d3.easeLinear)
       .delay(function(d) {
         return d.delay / 1.9 ;

       })
       .duration(2100)
       .attr('r', function(d) {
         if(d.properties.rad <= 1) {
           return 2.1 * 8 * Math.random(1,10);
         } else if(d.properties.rad < 12) {
            return d.properties.rad * 1.8 * Math.random(1,7)
         } else {
           return d.properties.rad * 0.65 * Math.random(1,2);
         }
       })
       .style('opacity', 0.1)
       .style("fill", function(d) {return offsetColor(d.properties.rad)})
       .style('stoke', '#fff')
       .style('stroke-width', 0.5)
       .style('stoke-opacity', 0.5)


    // Add the time marker that moves across the xAxis while the animation it playing.
    // It's not perfectly in sync, but it's close enough for this example. The length of
    // the animation is equal to the longest delay that we calculated earlier.
    var timeline = xAxis.append('circle')
         .attr('class', 'transition-circle')
         .attr('cx', 0)
         .attr('cy', 0)
         .attr('r', 4)
         .style('fill', 'red')
         .transition()
         .ease(d3.easeSinInOut)
         .duration(longestDelay + 2000)
         .attr('cx', 675)
         .remove();
}
    timeno = new Date();
    var collection = { type: "FeatureCollection", features: [filter]};
    // Function that calculates the difference between the earthquake and 24 hours ago and
    // creates a delay property.
    function reseting(){
       var bounds = maptwo.getBounds(),
       TLe = map.latLngToLayerPoint(bounds.getNorthWest()),
       BRi = map.latLngToLayerPoint(bounds.getSouthEast());
       selection.select("svg").style('width', map.getSize().x + "px")
              .style('height', map.getSize().y + "px")
              .style('left', TLe.x + "px")
              .style('top', TLe.y + "px");

        //selection.select('g').attr("transform", "translate(" + -TLe.x + "," + -TLe.y + ")" );
       /*
       bounds = path.bounds(features1),

               toptop = bounds[0][1],
               leftleft = bounds[1][0],
               rightright = bounds[1][1],
               botbot = bounds[0][0],
               topLeft = bounds[0]
               bottomRight = bounds[1],
               width = (bottomRight[0] - topLeft[0] + 200),
               height = (bottomRight[1]  - topLeft[1] + 200);

               //earthquakeGroups.attr("transform", function(d){ return "translate(" + applyLatLngToLayer(d).x + "," + applyLatLngToLayer(d).y + ")"});

               //gQuakes.selectAll('.quake-group').attr("transform", function(d){ return "translate(" + applyLatLngToLayer(d).x + "," + applyLatLngToLayer(d).y + ")"});
              svg .attr('width', width)
                  .attr('height', height)
                  .style('left', topLeft[0] - 100 + "px")
                  .style('top', topLeft[1] - 100 + "px");
            g   .attr("transform", "translate(" + (-topLeft[0] + 100) + "," + (-topLeft[1] + 100) + ")");

            */
          gQuakes.selectAll('circle').data(filter).attr("transform", function(d) { return "translate(" + projection.latLngToLayerPoint(d.geometry.coordinates).x + "," +  projection.latLngToLayerPoint(d.geometry.coordinates).y + ")" });

              //gQuakes.selectAll('circle').data(filter).attr("transform", function(d){ return "translate(" + applyLatLngToLayer(d).x + "," + applyLatLngToLayer(d).y + ")"});
              //g.attr('d', path);
              trans();

    }
    //maptwo.on('viewreset', reseting);
    //maptwo.on('zoomend', reseting);
    reseting();

})
d3overlay.addTo(map);
}

$('#newestd3anim').click(function() {
  clickload = "newest";
animationGenerator(clickload);
})

function moveMarker(){
  var markers = new L.MarkerClusterGroup();

  var fealen = collect.features.length;
  for (var i = 0; i < fealen; ++i) {
    var f = collect.features[i];
  if (f.geometry){
  var marker = new L.marker(
        new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id, icon: tlicon }
    );
  marker.on('click', showptPath)
  markers.addLayer(marker);

  }
}
map.addLayer(markers);
}
function showptPath(event) {
  var collectPath;
  var clen = collect.features.length;
  for (var i = 0; i < clen; ++i) {
    var f = collect.features[i]

    if(f.properties.id == event.target.options.id) {
      collectPath = f;
      break
    }
  }
  //maptwo.fitBounds(new L.GeoJSON(collectPath).getBounds());
  duration = []
  for (var i = 0; i < collectPath.properties.areaItems.length; ++i){
      duration.push(collectPath.properties.areaItems[i].dist4 * 2500);
  }
  renderMarker(collectPath, duration);
}
function renderMarker(collection, duration){
     dsel = d3.select(map.getPanes().overlayPane);
    dsel.selectAll("svg.running-path").remove();
     svg = dsel.append('svg').attr("class", "running-path");
     g = svg.append('g').attr("class", "leaflet-zoom-hide");
    /*
    pixelOrigin = maptwo.getPixelOrigin;
    wgsOrigin = L.latLng([0,0]);
    initShift = maptwo.latLngToLayerPoint(wgsOrigin);
    zoomin = maptwo.getZoom();
    shift = L.point(0,0);
    scale = 1;
    function undef(a) {
      return typeof a == "undefined"
    }
    */

/*
    function zoomchange(event) {
      var newzoom = this.undef(event.zoom) ? maptwo.zoomin : event.zoom;
      zoomdiff = newzoom - this.zoomin;
      scaling = Math.pow(2, zoomdiff);
      shift = maptwo.latLngToLayerPoint(wgsOrigin)
        ._subtract(this.initShift.multiplyBy(this.scaling));

        var d3shift = ["translate(", shift.x, ",", shift.y, ")"];
        var d3scale = ["translate(", scaling, ",", scaling, ")"];
        g.attr("transform", d3shift.concat(d3scale).join(""))
    }
    */
     transform = d3.geoTransform({point: projectedPoint});
     d3path = d3.geoPath().projection(transform);
    //d3.json("https://raw.githubusercontent.com/higheredbob/design/master/9.geojson", function(collection) {
     featuresdata = collection //.map(function(d){
     collectFeatures = { type: "FeatureCollection", features: [featuresdata]};
    pulseinData = {
        r: 25,
        pulse: false
      };
      rScale = d3.scaleSqrt()
            .domain(pulseinData.r)
            .range([1,25]);
     //const toLine = d3.line()
     //   .curve(d3.curveLinear)
     //   .x((d) => applyLatLngToLayer(d).x)
     //   .y((d) => applyLatLngToLayer(d).y);


      //return d;
    //});
    /*
     var ptLocations = g.selectAll('circle')
      .data(featuresdata)
      .enter()
      .append('circle')
      .attr('r', 3)
      .attr('class', 'pointlocations')
      .style('opacity', 0.1);
  */
     var ptPath = g.selectAll('.line')
      .data([featuresdata])
      .enter()
      .append('path')
      .attr('class', 'line')


     var ptMark = g.append('circle')
        .attr('r', 5)
        .attr('id', 'ptMark')
        .attr('class', 'travelingPt')
        .style('fill', '#76ff03')
        .style('opacity', 0.3);

        /*
     var ptStart = g.selectAll('g.start_end_pt')
        .data([featuresdata[0]])
        .enter()
        .append('g')
        .attr('class', '.start_end_pt');

    ptStart
      .append('circle',)
      .attr('r', 5)
      .style('fill', 'red')
      .style('opacity', 0.8);

    ptStart
      .append('text')
      .text(function(d) {return d.properties.pickuptime})
      .attr("class", 'ptnames')
      .attr('y', -18);


      var markerPulse = g.selectAll("circle").data(pulseData);
          markerPulse.enter()
          .append('circle')

          .attr("opacity", 0.3)
          .attr("class", "pulseMarker");
      g.selectAll('circle')
          .attr('r', function(d) {
            d.pulse = !d.pulse;
            if (d.pulse) {
              sel = d3.select(this);
              pulsate(sel);
            }
  */
    var pulsein = g.append('circle')
        .attr('class', 'ptPulse')
        .attr('id', 'pulseone')
        .attr('r', 5)
        .style('fill', '#aa00ff')
        .style('opacity', 0.3)
        //d3.select('#pulseone').data(pulseinData)

        .attr('r', function (d){

            var pulsel = d3.select(this)
            fireup(pulsel);

        });
      function fireup(pulsel){
        //repeat();
        console.log(pulsel);

         ( function repeat() {
        pulsel.transition()
          //.delay(function(d){
          //  return d.random * d.category * sliderVal / 5
          //})
          .duration(15)
          //.attr("stroke-width", 2)
          .attr("r", 0.3)
          .style('opacity', 0.75)
          .transition()
          .duration(2500)
          //.attr('stroke-width', 0.5)
          .attr("r", 28)
          .style('opacity', 0)
          .on("end", repeat);
          //.ease('sine')

          //.each("end", repeat);

          })();
          }



      //transitionPt();
      //transitionPt();
    function render(){
      //var bounds = d3path.bounds(features1),
        //topLeft = bounds[0],
        //bottomRight = bounds[1];

      //pathing = projection.pathFromGeojson;
      //ptStart.attr('transform', function(d, i) {return "translate(" + applyLatLngToLayer(d.geometry.coordinates[i][0]).x + "," + applyLatLngToLayer(d.geometry.coordinates[i][0]).y + ")"});
      //ptLocations.attr('transform', function(d, i) { return "translate(" + applyLatLngToLayer(d.geometry.coordinates).x + "," + applyLatLngToLayer(d.geometry.coordinates).y + ")"});
      //ptMark.attr("transform", function() { var coords = featuresdata.geometry.coordinates[0]; console.log(coords); var pp = maptwo.latLngToLayerPoint(new L.LatLng(coords[1], coords[0])); return "translate(" + pp.x + "," + pp.y + ")"});

      var bounds = d3path.bounds(collectFeatures),

              topLeft = bounds[0],
              bottomRight = bounds[1];

          topLeft[0] -= 120;
          topLeft[1] -= 120;
          bottomRight[0] += 120;
          bottomRight[1] += 120;

          svg .attr("width", bottomRight[0] - topLeft[0])
              .attr("height", bottomRight[1] - topLeft[1])
              .style("left", topLeft[0] + "px")
              .style("top", topLeft[1] + "px");

      //svg.attr("width", bottomRight[0] - topLeft[0] + 120)
        //.attr("height", bottomRight[1] - topLeft[1] + 120)
        //.style("left", topLeft[0] - 50 + "px")
        //.style("top", topLeft[1] - 50 + "px");

      g .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
       ptPath.attr("d", d3path).call(transitionPt)
      //ptPath.attr('d', function(d) {console.log(d); return projection.toLine(d.geometry.coordinates)});//d.map(function(e){projection.toLine(e.geometry.coordinates)}) });
      //projection.transition(ptPath, ptMark);
    }

    function transitionPt(path) {
        //duration = duration.map(function(d){return d})
        //console.log(duration);
      path.transition()
        .duration(function (d) {console.log(d); return d.properties.ddur})
        .attrTween('stoke-dasharray', tweenPt)

    }
    function tweenPt() {
        l = this.getTotalLength();
        x = this;
      return function(t) {


        i = d3.interpolateString("0," + l, l + "," + l);
        var p = x.getPointAtLength(t * l);
        marker = d3.select('#ptMark');
        pulsedad = d3.select('#pulseone')
        pulsedad.attr("transform", "translate(" + p.x + "," + p.y + ")");
        marker.attr("transform", "translate(" + p.x + "," + p.y + ")");
         if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = map.layerPointToLatLng(new L.Point(p.x,p.y));
              map.panTo(newCenter, 14);
            } else {
              tweenToggle = 0;
            }
        return i(t);
      }
    }

map.on("viewreset", render);
map.on('zoomend', render);
render(ptPath, d3path);


};
function applyLatLngToLayer(d) {

  return map.latLngtoLayerPoint(
      new L.LatLng(d[1], d[0])
    );
}
function projectedPoint(x, y) {
  var point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}
  //maptwo.addLayer(d3overlay);

/*
    var xi = d3.scaleTime()
          .range([0, 950]);

        //var xAxis  = d3.axisBottom(x);
        //var xAxisG = g.append("g")
        //    .attr("transform", "translate(0, "+height+")");



    //overlay.select("svg:marker-overlay").remove()

    //var svg = overlay.append("svg:svg"),


    transform = d3.geoTransform({
      point: allPoint
    }),
    path = d3.geoPath().projection(transform);
    var r = 1;
    var radius = d3.scaleSqrt();
    var color = d3.scaleOrdinal()
      .range(['#e64a19', '#ff7043', '#ff8f00', '#ffd180', '#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#90caf9', '#64b5f6', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#e57373', '#ff1744', '#c62828', '#ad1457'])
      var dateObj = new Date();

      var qGroup = d3.select('running-marker').append('svg:svg');

      var qua = qGroup.append('svg:g')
            .attr('class', 'quasar-group');

      var pul = qGroup.append('svg:g')
            .attr('class', 'circle pulse-circle');

      var mainPul = qGroup.append('svg:g')
          .attr('class', 'circle quasar-circle');

      var quasar = reducedata
    //var quake = data.features.reverse();

        // Create a group with the quake id to hold the quake circle and pulse circle
         qua.selectAll('path').data(quasar)
           .enter().append('g:path')
           .attr('id', function(d) {
                 return d.properties.id;
           })
           .attr('class', 'quasar-group');

        //Create the pulse-circle circles for the earthquake pulse
        pul.selectAll('.quasar-group').data(quasar)
           .enter().append('g:circle')
           .attr('class', 'circle pulse-circle')
           .attr('cx', function(d, i) {
                 return allPoint([d.geometry.coordinates[i][0], d.geometry.coordinates[i][1]])[0];
           })
           .attr('cy', function(d, i) {
                 return allPoint([d.geometry.coordinates[i][0], d.geometry.coordinates[i][1]])[1];
           })
             .attr('r', function(d) {
                 return 0;
           })
           .attr('fill', function(d, i) {
            return color(parseInt(d.properties.timeFeatures[i].hour));
           });

        // Create the main quake circle with title
        mainPul.selectAll('.quasar-group').data(xy)
          .enter().append('g:circle')
            .attr('cx', function(d, i) {
                 return allPoint([d[i][0], d[i][1]])[0];
           })
          .attr('cy', function(d, i) {
                 return allPoint([d[i][0], d[i][1]])[1];
           })
          .attr('r', 0 )
          .attr('class', 'circle quasar-circle')
          //.style('fill', 'red')
          .style('opacity', 0.75);
          //.append('title')
          //.text(function(d) {
          //  return 'Magnitue ' + d.properties.mag + ' ' + d.properties.place;
          //});


        // Function that calculates the difference between the earthquake and 24 hours ago and
        // creates a delay property.
        var setQuasarDelay = function() {
            for(var i = 0, max = td.length; i < max; i++){
                var timeDiff = td.time + dateObj;
                var timeDiffObj = new Date(timeDiff);
                quasar.delay = Date.parse(timeDiffObj) / 45000; // Speed up the animation, otherwise it would take 24 hours ><
            }
        }
        setQuasarDelay();

        // Grab the longest delay for the xAxis marker
        var longestDelay = quasar.delay;
          qua.selectAll('path')
            .enter()
            .attr('d', path);
        // Changes the radius of the earthquakes to their magnitue using a transition
        // and the delay created from the setQuakeDelay function
        var quasarCircles = svg.selectAll('.quasar-circle')
             .data(quasar)
             .transition()
             .delay(function(d) {
                 return d.delay;
             })
             .duration(1000)
             .attr('r', function(d, i) {
               if(d.properties.timeFeatures[i].hour < 0) {
                     return 0.5;
                 } else {
                     return d.properties.timeFeatures[i].hour
                 }
             });

        // Changes the radius of the pulse circle to eight times the magnitude
        // and fades out as it expands over two seconds
        var pulseCircles = svg.selectAll('.pulse-circle')
             .data(quasar)
             .transition()
             .delay(function(d) {
                 return d.delay;
             })
             .duration(2000)
             .attr('r', function(d, i) {
               if(d.properties.timeFeatures[i].hour < 0) {
                     return 0.3 * 8;
                 } else {
                     return d.properties.timeFeatures[i].hour * 3;
                 }
             })
             .style('opacity', 0)
           .remove()

        // Add the time marker that moves across the xAxis while the animation it playing.
        // It's not perfectly in sync, but it's close enough for this example. The length of
        // the animation is equal to the longest delay that we calculated earlier.
        var timeline = qua.append('g:circle')
             .attr('class', 'transition-circle')
             .attr('cx', 0)
             .attr('cy', 0)
             .attr('r', 3)
             .style('fill', 'red')
             .transition()
               .ease(d3.easeLinear)
             .duration(longestDelay + 1000)
             .attr('cx', 1120)

             function reseter(){
              qua.selectAll('circle').data(xy)
                .enter()
                .attr("transform",
                    function(d, i) {
                        return "translate(" +
                            applyLatLngToLayer(d[1], d[0]).x + "," +
                            applyLatLngToLayer(d[1], d[0]).y + ")"});
                pul.selectAll('circle').data(xy)
                .enter()
                .attr("transform",
                    function(d, i) {
                        return "translate(" +
                            applyLatLngToLayer(d[1], d[0]).x + "," +
                            applyLatLngToLayer(d[1], d[0]).y + ")"});
                pul.selectAll('circle').data(xy)
                .enter()
                .attr("transform",
                    function(d, i) {
                        return "translate(" +
                            applyLatLngToLayer(d[1], d[0]).x + "," +
                            applyLatLngToLayer(d[1], d[0]).y + ")"});


             var bounds = path.bounds(collect),
               topLeft = bounds[0],
               bottomRight = bounds[1];

              svg .attr('width', bottomRight[0] - topLeft[0])
                  .attr('height', bottomRight[1] - topLeft[1])
                  .style('left', topLeft[0] + "px")
                  .style('top', topLeft[1] + "px");

              g   .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
            }
            maptwo.on('viewreset', reseter);
            reseter();
            */

/*}
    var circles_group = g.append('svg:path')
        .attr("r", r)
        .attr("class", "waypoints");
        now = Date.now();
        d3.timer(function() {

            xi.domain([now + timer, now]);
            //xAxisG.call(xAxis);
          })


        nextChunk = 0;
    function updateTimer(number){
        nextChunk += 1;
        data = collect.features[number];
        oldAnimateData = filteredAnimateData;
        geodata = path(data)
        //geodata = transform.stream(data) //.projection(transform);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;

        var time = Date.now();
        var sliceProp = 0;
        filteredAnimateData = collect.features.filter(filterData);
        function filterData(element, index, array){
          element.name = data.properties.timeFeatures[index].duration;
          element.value = data.properties.timeFeatures[index].modified;
          element.distance = data.properties.areaItems[index].dist4;
          //element.x = [data.geometry.coordinates[new Range(data.geometry.coordinates.length)][0]];
          //element.y = [data.geometry.coordinates[new Range(data.geometry.coordinates.length)][1]];
          //element.geom = data.itemByGeom[index];
          sliceProp += element.value;
          return (element.value > 0);
        }
        //var circle = g.append('circle')
        //  .attr("r", 1)
        //timer = reducedata.properties.time;


var circs = circles_group.selectAll('path').data(filteredAnimateData);
      circs.enter().append("svg:circle")
          .attr("stroke", '#8c6195')
          .attr("stroke-width", 1)
          .attr("stroke-opacity", 0)
          .style("fill", function(d, i) {return color(i)})
          .attr('d', path);

//var circle = circs.append('circle')
//        .attr("r", 1)
//        .attr("stroke-opacity", 0)
//        .style("fill", function(d, i) {return color(i)});
        //.attr('cx', function(d) {return d.x})
        //.attr("transform", function(d){
        //    var x = d.x;
        //    var y = d.y;
        //  "translate("+x+","+y+")"});

        circs.transition()
          .duration(function(d) { return d.name})
          //.ease(d3.easeLinear)
          .style("opacity", 1)
          .attr("r", function(d) {scaleby()});

          circs.transition()
            .duration(function(d) {return d.name})
            .ease(d3.easeCubicOut)
            .attr('r', arcTween(parts/5));



            //.on("end", function(d, i) {
            //  if(timer > 0){
            //  setInterval(updateTimer(i), 1000)
            //  } else {
            //    nextChunk += i;
            //    updateTimer(nextChunk);
            //
            //  }
            //});
            //labeled = reducedata[0].data[0].itemLabel
            timed = now - timer ;
            timing = timer / 40000 / parts;

            //if(timed < 0){
           //   nextChunk += 1;
            //  if(collect.features.length > nextChunk){
            //  updateTimer(nextChunk);
            //}else {
            if(collect.features.length < nextChunk){
             circs.exit().remove();
          }
          //}
          }
    setInterval(updateTimer(nextChunk), timing)
     updateTimer(0);
}
*/

//function applyLatLngToLayer(a, b) {
//                x = a
//                y = b
//                return maptwo.latLngToLayerPoint(new L.LatLng(x, y))
//            }
 function arcTween(radius, delay) {
  return function() {
    d3.select(this).transition().delay(delay).attrTween("d", function(d){
      var i = d3.interpolate(d.r, radius);
      return function(t) {d.r = i(t); return radius(d)}
    })
  }
 }
/*

    function cirTween(d, i){
      var ri0;
      var rm0;
      if(oldAnimateData[i]){
        ri0 = oldAnimateData.startRadius;
        rm0 = oldAnimateData.endRadius;
      } else if (!(oldAnimateData[i]) && oldAnimateData[i-1]) {
         ri0 = oldAnimateData[i-1].endRadius;
          rm0 = oldAnimateData[i-1].endRadius;
        } else if(!(oldAnimateData[i-1]) && oldAnimateData.length > 0){
          ri0 = oldAnimateData[oldAnimateData.length-1].endRadius;
          rm0 = oldAnimateData[oldAnimateData.length-1].endRadius;
        } else {
          ri0 = 1;
          rm0 = 1;
        }
        return scaleby(ri0, rm0)
      }

    function scaleby(baseval, hour){
      pointperpixel = baseval * 10000;
      var newhour = hour + 1;
      var rmin = 0;
      var rmax = Math.sqrt(newhour / (pointperpixel * Math.PI));
      rscale.range([rmin, rmax])
    }

  function durationby(baseval) {
    var slideV = sliderVal / 24
    var durmath = (baseval / 60000) * slideV / reducedata.length;
    return durmath;
  }

  $('#playbutton').on("click", function() {
            const button = $(this);
            if(button.text() === "Play"){
                button.text("Pause");
                //interval = setInterval(updateTimer(nextChunk), function(d) {return reducedata[d].duration});
            } else {
                button.text("Play");
                //clearInterval(interval);
            }
        });

*/

//$('#totalV').click(function(){
//  totalVisual();
//});

/*
function totalVisual(){
  /*collect structure
  * f = collect.features[array] =>
  * d = f.geometry.coordinates[array]
  * r = d[0][0] first coordinate d[0][1] first coord, second component d[1][0] d[1][1] repeat at 2nd index
  *  a = f.properties <branch>areaItems, distance, dropcoords, id, timeFeatures
  *  a.distance = features[array.length] total distance for features array
  *  a.id = features[array.length] id value
  *  a.time = features[array.length] total time for features array
  *  a.areaItems[array] = array[index] <branh>dist4, dropofftime, dropoffx, dropoffy, pickuptime </b> per array, matching arrays with coords at 1/2 index value (14 coord array, 7 area array)
  *  a.dropcoords[array] = array[index] <branch>x,y</b> as above 1/2 value 16 coord, 8 dropcoord arrays
  *  a.timeFeatures[array] = array[index] <branch>id, pickup, dropoff, duration<b> id per array, pickup dropoff from point to point, duration p2p
  *
  function getCleanCoords(array) {
    var newish = [];
    var rayray = array.length;
    for(var i = 0; i < rayray; ++i) {
      array[i].properties.id = i;
      var x1 = array[i].geometry.coordinates[0];
      var y1 = array[i].geometry.coordinates[1];
      newish.push(turf.point([x1.toPrecision(8), y1.toPrecision(7)],  array[i].properties));

    }
    var collection = turf.featureCollection(newish);
    var combined = turf.combine(collection);
    return combined;
  }

fult = getCleanCoords(features1.features);

cleaned = turf.cleanCoords(fult.features[0]).geometry.coordinates;
mult = turf.multiPoint(cleaned);

function timeColor(n){
  return n < 58000 ? '#81bda4':
        n < 40000 ? '#f02475' :
        n < 30000 ? '#fdff00' :
        n < 20000 ? '#ff7272' :
        n < 11000 ? '#ff4e50' :
        n < 10000 ? '#f03c02' :
        n < 9000 ? '#d41c01' :
        n < 8000 ? '#ac0006' :
        n < 4000 ? '#890100' :
        n < 2000 ? '#670103' :
        n < 1000 ? '#1c0113' :
                  '#f57c00';
}


function createTimeline(oldray, newarray){

  old = oldray.length;
  oldone = Date.parse(oldray[0].properties.pickuptime);
  oldtwo = Date.parse(oldray[old - 1].properties.dropofftime);
  oldonetime = (oldtwo - oldone) / (sliderVal * 20);
  parsedtime = Date.parse(new Date());
  futuretime = parsedtime + oldonetime;
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  //var _day = _hour *24;
  var timer;
  function showRemaining(){
  cur = new Date();
  future = new Date(futuretime);
  var distance = future - cur;
  if (distance < 0 ) {
       clearInterval( timer ); // stop the timer from continuing ..
      return;
    }
    //var days = Math.floor(distance / _day);
    var hours = Math.floor( distance  / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
    var parentElement = $('h3.popover-header');
        parentElement.html(hours + 'h ' + //days  + 'd ' +
                           minutes + 'm ' +
                           seconds + 's ' +
                           milliseconds + 'ms' +
                           distance + 'dist');
        animateVisual(newarray, distance);
  }
  $('#maptwo').on('click', function(){

      timer = setInterval(showRemaining, 150);
  });
}
createTimeline(features1.features, mult);


gcounter = 0;
function animateVisual(gRay, timing) {
  newdur = Math.floor(timing / gRay.geometry.coordinates.length);
  //{"opacity":0, "r": 0.2, "timeslice": newdur, "explode": false }
  hadji = {};
  explodeMarkers = {
    "objects": []
  };
  for(var i = 0; i < gRay.geometry.coordinates.length; ++i) {
    gcounter += newdur;
    hadji[i] = [];
    starting = gcounter - timing;
    geod = {"type": "circle",
            "coordinates": [gRay.geometry.coordinates[i]],
            'start': starting,
            'duration': gcounter / 25,
            "r": 0.1,
            "opacity": 0,
            'id': i,
            'color': '#556270',
            'exploding': false
        };

        hadji[i].push(geod);
    //return explodeMarkers
    //createTimeline(drd, mult);
  }

      var d3overlay = d3.select(maptwo.getPanes().overlayPane);
      d3overlay.selectAll("svg.timing-marker").remove();
      //var minsvg = d3.select(maptwo.getPanes().overlayPane).append("svg");
      var svg = d3overlay.append("svg").attr("class", "timing-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geo.transform({point: projectTime});
      var path = d3.geo.path().projection(transform);
      var markerCol = { type: "FeatureCollection", features: [hadji]};
      var output = JSON.stringify(gRay, null, '\t');
      var outputText = $('#geoOutput').val(output);

      //var tivg = d3.select('svg')
        margin = {top: 30, right: 30, bottom: 30, left: 30},
        width = +d3.select("svg").attr("width") - margin.left - margin.right,
        height = +d3.select("svg").attr("height") - margin.top - margin.bottom,
        //t = svg.append("g").attr("transform", "translate("+ margin.left + "," + margin.top + ")");
        g.append("g").attr("transform", "translate("+ margin.left + "," + margin.top + ")");
        var x = d3.scale.linear()
                  .range([0, width]);
        var xAxis = d3.axisBottom(x);
        var xAxisG = g.append("g")
              .attr("transform", "translate(0, " + height + ")");

      d3.timer(function(){
        var nn = Date.now();
        x.domain([nn - 150000, nn]);
        xAxisG.call(xAxis);
      });
      var circle = g.append('circle')
            .attr("r", function(d) {
              return d.r * Math.random(1,5)
            })
            .attr('opacity', 0)
            .attr("cy", Math.random() * height)
            .attr("class", "timeMarker")
            var circlepulse = g.selectAll('circle').data(hadji)
            circlepulse.enter()
            .append('circle')
            .attr('opacity', 0)

            g.selectAll('circle')
              .attr( function(d) {
              d.exploding = !d.exploding;
              if (d.exploding) {
                selection = d3.select(this);
                splode(selection);
              }
            })


      function splode(selection) {

        youcompleteme();
        function youcompleteme(){
          var time = Date.now();
          if(selection.data()[0].explode)


            selection.transition("time")
              .duration( function(d) {
                return d.duration / 2;
              })
              .ease(d3.easeCubicOut)
              .attrTween("cx", function(d) {
                return function(t) {return x(time);};
              })
              .attr("opacity", 1)
              .attr("r", 1.5)
              .attr("fill", function(d) {
                return timeColor(d.duration * 20)
              })
              .transition()
                .delay(function(d) {
                  return d.duration / 10;
                })
                .ease(d3.easeCubicIn)
                .attr("r", function(d){
                  return d.r * Math.random(3,9);
                })
                .attr("opacity", 0)
                .each("end", youcompleteme())
            }
        }
        /*
      var timePath = g.selectAll('circle')
                        .data(gRay)
                        //timePath.enter()
                        .enter()
                        .append('circle')
                        .attr('opacity', 0.2)
                        .attr('r', 0.1)
                        .attr('class', 'timeMarker');

      var feat = g.selectAll('circle').data(hadji)
                        //.data(hadji)
                        feat.enter()
                        .append('circle')
                        .duration(function(d){
                            return d.duration;
                        })
                        .delay(function(d){
                            return d.delay;
                        })
                        .attr('class', 'timeMarker')
                        .attr('r', function(d) {
                            return d.r * Math.random(1, 5);
                        })
                        .attr('start', function(d) {
                            return d.start;
                        });
                        g.selectAll('circle')
                           .attr('r', function(d) {
                           d.exploding =!d.exploding;
                           if (d.exploding) {
                              selectthis = d3.select(this)
                              explode(selecthis)
                          }
                        });
                          function explode(select){
                              recursive_transaction();
                              var x = this;
                          function recursive_transaction(){

                            if (select.data()[0].exploding || select.data()[0].start == timing) {
                                select.transition()
                                .duration(function(d){
                                  return d.duration;
                                })
                                .attr('r', function(d) {
                                  return d.r * Math.random(1,5);
                                })

                                .attr('opacity', 1)
                                .attr('fill', function(d) {
                                  return timeColor(d.duration * 20);
                                })
                                .ease('sin-in')
                                .transition()
                                .duration(function(d){
                                  return d.duration / 2;
                                })
                                .attr('opacity', 0)
                                .attr('r', function(d) {
                                  return d.r * 0.1;
                                })
                                .attr('fill', '#000')
                                .ease('ease-out')
                                .each('end', recursive_transaction());
                              *

                              }
                           // }

                         // }
                        //}
      //var data = gRay.forEach(function(d){
      //  console.log(d);
      //  return d.properties.id
      //})


function projectTime(x, y) {
        var point = maptwo.latLngToLayerPoint(new L.LatLng(y, x));
        this.stream.point(point.x, point.y);
        }
}

*/
function take(values, index) {
    return values.constructor.from(index, i => values[i]);
}
function get(i) {
    return values => values[i];
}
function range(start, stop, step) {
    const n = arguments.length;
    start = +start, stop = +stop, step = n < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    return Uint32Array.from({length: Math.ceil((stop - start)/step)}, (_, i) => start + i * step);
}
function filter(values, test) {
    const I = [], n = values.length;
    for (let i = 0; i < n; ++i) {
        if (test(values[i], i, values)) {
            I.push(i);
        }
    }
    return I;
}
function sort(values, order = ascending) {
  return range(values.length).sort((i, j) => order(values[i], values[j]));
}

function sorti(values, index, order = ascending) {
  return index.slice().sort((i, j) => order(values[i], values[j]));
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function sum(values) {
  let sum = 0;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v) sum += v;
  }
  return sum;
}
function count(values) {
  let count = 0;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v === v) ++count;
  }
  return count;
}
function mean(values) {
  return sum(values) / count(values);
}

function max(values) {
  let maxIndex, maxValue = -Infinity;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v > maxValue) maxIndex = i, maxValue = v;
  }
  return maxIndex;
}

function min(values) {
  let minIndex, minValue = Infinity;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v < minValue) minIndex = i, minValue = v;
  }
  return minIndex;
}


function group(keys, value) {
  const mapi = new Map;
  for (let i = 0, n = keys.length; i < n; ++i) {
    let k = keys[i], v = mapi.get(k);
    if (v === undefined) mapi.set(k, [i]);
    else v.push(i);
  }
  if (value !== undefined) {
    for (const [key, index] of mapi) {
      mapi.set(key, value(index));
    }
  }
  return mapi;
}

$('#totalV').click(function(){
  var tun = 'show';
    animationGenerator(tun);
  });
function showAll(){
  operator = [];
  for(var i = 0; i < features1.features.length; ++i){
    var tf = timeArray[i];
    var df = lineholder[i];
    var pf = propsholder[i];
    operator.push({type: 'Feature', geometry: { type: 'Point', coordinates: df}, properties: { distance: pf.dist4, accuracy: pf.Accuracy, duration: tf.duration, category: tf.hour, durmod: tf.modified }});
  }
  addStuff();
}
clickerCounter = 0;
function addStuff(){
  var collen = collect.features.length - 1;
  var endlen = collect.features[collect.features.length - 1].geometry.coordinates.length;
  var startlenX = collect.features[0].geometry.coordinates[0][0];
  var startlenY = collect.features[0].geometry.coordinates[0][1];
  var marker = new L.marker(
        new L.LatLng(startlenY, startlenX), {icon: tlicon}
    );
  //var endMarker = new L.marker(
  //    new L.LatLng(collect.features[collen].geometry.coordinates[endlen - 1][1], collect.features[collen].geometry.coordinates[endlen - 1][0])
  //  );
  marker.addTo(map);
  //endMarker.addTo(maptwo);
  //for(var i = 0; i < collect.features.length; ++i) {
  //  collect.features[i].id = i;
  //  operator[i].push({id: i, len: collect.features[i].geometry.coordinates.length});

//  }
  //$('#clickNext').click(function() {
  //      $('#demoImage').parent().remove();
  //      f = collect.features[clickerCounter];
  //      nextRoute(f);
  //      clickerCounter += 1;
  //});
  marker.on("click", function(event){
    nextRoute(event);
  })
}
function nextRoute(event) {
  hoursstart = [];
  f = operator;
  durmod = [];
  flen = f.length;

  //for(var i = 0; i < flen; ++i) {
  //  hoursstart.push(f.properties.timeFeatures[i].hour);
  //  durmod.push(f.properties.timeFeatures[i].modified/4*sliderVal);
  //}
  animateGeo(f, durmod, hoursstart);
}
function animateGeo(f, durmod, hoursstart) {
  colorRange = ['#d500f9', '#ffdd5b', '#76ff03', '#b9f6ca', '#3e2723', '#4e342e', '#5d4037', '#6d4c41', '#795548', '#8d6e63', '#a1887f', '#a1887f', '#a1887f', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723', '#ee6134', '#885dff', '#ff9100', '#f90a05'];
  //justCoords = [];
  //for(var i = 0; i < f.geometry.coordinates.length; ++i) {
  //  justCoords.push(f.geometry.coordinates[i])
  //}
  //var mmcol = {type: 'multiLineString', coordinates: justCoords}


 nodes = d3.range(f.length).map(function(d, i) {
    return {
      x: f[i].geometry.coordinates[0],
      y: f[i].geometry.coordinates[1],
      //coordinates: [f[i].geometry.coordinates[0], f[i].geometry.coordinates[1]],
      //coords: [applyLatLngToLayer(f[i].geometry.coordinates[0], f[i].geometry.coordinates[1])],
      geometry: {type: 'Point', coordinates: [f[i].geometry.coordinates[0], f[i].geometry.coordinates[1]]},
      //features: {type: 'Feature', geometry: {type: 'Point', coordinates: [f[i].geometry.coordinates]}},
      radius: parseInt(f[i].properties.category) +5 * 6,
      hours: parseInt(f[i].properties.category),
      duration: f[i].properties.durmod * sliderVal,
      category: i % 8,
      random: Math.random() * 15,
      fill: colorRange[parseInt(f[i].properties.category)],
      pulsing: false

    }
  })
      h = 900;
      w = 1200;
  var d3overlay = d3.select(map.getPanes().overlayPane);
      d3overlay.selectAll("svg.running-marker").remove();
      //var minsvg = d3.select(maptwo.getPanes().overlayPane).append("svg");
      //var svg = d3overlay.append("svg").attr("class", "running-marker");
      var svg = d3overlay.append("svg").attr("class", "running-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geoTransform({point: projectNode});
      var path = d3.geoPath().projection(transform);

      var bounds = path.bounds(features1)
                    topLeft = [bounds[0][0] + 80 , bounds[0][1] - 80]
                    bottomRight = [bounds[1][0] - 80 , bounds[1][1] + 80];
                // Setting the size and location of the overall SVG container
                svg
                    .attr("width", bottomRight[0] - topLeft[0] )
                    .attr("height", bottomRight[1] - topLeft[1] )
                    .style("left", topLeft[0] + "px")
                    .style("top", topLeft[1]  + "px");
                g.attr("transform", "translate(" + (-topLeft[0]+40 ) + "," + (-topLeft[1]+40 ) + ")");
function applyLatLngToLayer(a, b) {
                x = a
                y = b
                return map.latLngToLayerPoint(new L.LatLng(x, y))
            }

      var output = JSON.stringify(nodes, null, '\t');
      var outputText = $('#geoOutput').val(output);
      var markerCol = { type: "FeatureCollection", features: [nodes]};


//nodes.forEach(function(d){
//  d.coords = applyLatLngToLayer(d.geometry.coordinates[0],d.geometry.coordinates[1]);
//
//})
    var scaleQuantRad = d3.scaleQuantile()
                              .domain([0, 3, 11, 101, 316000 ])
                              .range([3, 4, 5, 6]);
    var rScale = d3.scaleSqrt()
          .domain(d3.extent(nodes, function(d) {return d.hours;}))
          .range([1,24])

  var cScale = d3.scaleSqrt()
                .domain(rScale.domain())
                .range(['#00897b', '#4caf50']);

var pulsers = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .classed('pulsers', true)
      .attr("stroke-width", 2)
      .attr("r", 2)
      .attr("cx", function(d){
             return  d.x;
      })
      .attr("cy", function(d){
              return d.y;
      })
      .attr('fill', function(d) {return cScale(d.hours)})
      .attr("transform", function(d) {
        return  "translate(" + applyLatLngToLayer(d.geometry.coordinates[1], d.geometry.coordinates[0]).x + "," +
                            applyLatLngToLayer(d.geometry.coordinates[1], d.geometry.coordinates[0]).y + ")";
      })
      .on("mouseover", function(d){
       selection = d3.select(this);
       pulse(selection);

      });
      //.each(pulse);

//nodes.forEach(function(d){
//  selection = d3.select(this);
//  pulse(selection);
//})

    function pulse(selection) {
      var circle = svg.select('circle');
      //selection = d3.select(this)
      ( function repeat() {
        selection.transition()
          //.delay(function(d){
          //  return d.random * d.category * sliderVal / 5
          //})
          .duration(1000)
          .attr("stroke-width", 2)
          .attr("r", function(d){
            return rScale(d.radius) / 6
          })
          .style('opacity', 0.75)
          .transition()
          .duration(function(d) {
            return d.duration
          })
          .attr('stroke-width', 0.5)
          .attr("r", function(d){
            return d.radius * 2
          })
          .style('opacity', 0.1)
          .style('fill', function(d){
            return d.fill
          })
          .on("end", repeat);
          //.ease('sine')

          //.each("end", repeat);

      })();

    }

 map.on("viewreset", reset);
   reset();


      /*
          var d3_features = g.selectAll('path')
            .data([nodes])
            .enter().append('path')
          var markerPulse = g.selectAll('circle').data(nodes);
function applyStepLatLngToLayer(d) {
       var y = d.geometry.coordinates[1];
       var x = d.geometry.coordinates[0];
       return maptwo.latLngToLayerPoint(new L.LatLng(y, x));
}var mapw = d3.select('#maptwo').style("width");
var maph = d3.select('#maptwo').style('height');
//var toolt = d3.select('#tooltip').style("width");
var margin = {top: 20, right: 20, bottom: 110, left: 40},
    margin2 = {top: 250, right: 20, bottom: 30, left: 40},
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom,
    height2 = 600 - margin2.top - margin2.bottom;
          markerPulse.enter()
          .append('circle')
          .style("stroke", "grey")
          .style("fill", "#fff")
          .style("opacity", 0.6)
          .attr('r', 1)
          .attr("cx", function(d){
            return path(d.x)
          })
          .attr("cy", function(d){
            return path(d.y)
          })
          .attr("class", "pulseMarker")
            .attr('transform', function (d) {
              var point = maptwo.latLngToLayerPoint(new L.LatLng(d.x,d.y));

             return "translate(" + point.x + "," + point.y + ")";
           })
          var pulsers = g.append("g")
            .attr("class", "pulsers")

          function getDur(nodedata){
            return nodedata.duration
          }

var xScale = d3.scaleTime()
        .range([0, width]);

var yScale = d3.scaleLinear()
        .range([height, 0]);

var navX = d3.scaleTime()
        .range([0, width]);

var navY = d3.scaleLinear()
        .range([height2, 0])

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    var navXAxis = d3.axisBottom(navX);
          function getRad(nodedata){
            return nodedata.radius
          }width / 2
          */
          width = 1000;


   map.on("viewreset", reset);
       reset();

        function reset() {
                var bounds = path.bounds(features1)
                    topLeft = [bounds[0][0] + 10 , bounds[0][1] - 10]
                    bottomRight = [bounds[1][0] + 10 , bounds[1][1] + 10];
                // Setting the size and location of the overall SVG container
                svg
                    .attr("width", bottomRight[0] - topLeft[0] )
                    .attr("height", bottomRight[1] - topLeft[1] )
                    .style("left", topLeft[0] + "px")
                    .style("top", topLeft[1]  + "px");
                g.attr("transform", "translate(" + (-topLeft[0] ) + "," + (-topLeft[1] ) + ")");
                pulsers.attr("transform",
                    function(d) {
                        return "translate(" +
                            applyLatLngToLayer(d.geometry.coordinates[1], d.geometry.coordinates[0]).x + "," +
                            applyLatLngToLayer(d.geometry.coordinates[1], d.geometry.coordinates[0]).y + ")";
                    }).on("load", function(d) {
                      d.pulsing = !d.pulsing;
                      if(d.pulsing){
                        selection = d3.select(this);
                        pulse(selection);

                      }
                    });
        }





/*
          function pulsate() {
              recursive_transitions();

              var xfc = this;
              function recursive_transitions(){
               //selection.transition()
               pulsar = d3.select(xfc);
               pulsar.transition()
                  //.delay(function(d){
                  //  return d.duration / 4;
                  //})

                  .duration(25)
                  .attr("r", function(d){
                    return d.radius * 1.2;
                  })
                  .attr('opacity', 1)
                  //.ease('ease-out')
                  .transition()

                  .duration(function(d){
                    return d.duration
                  })

                  .attr('opacity', 0)
                  .attr('r', function(d){
                    return d.radius * 17;
                  })
                  .style('fill', function(d){
                    return d.fill
                  })
                  //.ease('bounce-in')
                  .each("end", recursive_transitions);
                }
                //else {
                //  selection.transition()
                //    .duration(200)
                //    .attr('r', 1)
                //    .attr('opacity', 1);
                //}
              }
           // }
        //var marker = g.append("circle")
        //  .attr("r", function(d) {
        //    return d.radius
        //  })
        //  .style("fill", function(d) {
        //    return colorRange[d.hours]
        //  })
        //  .style("opacity", "1");

        //  reset();
        //  transition();
        *//*

          function reset() {
            var bounds = path.bounds(features1),
            topLeft = bounds[0],
            bottomRight = bounds[1];
            */
            /*
            markerPulse.attr("transform",
              function(d) {
                console.log(d);
                var point = maptwo.latLngToLayerPoint(new L.LatLng(d.x,d.y));

                return "translate(" + point.x + "," + point.y + ")";
                //return "translate(" +
                 // applyLatLngToLayer(d).x + "," +
                 // applyLatLngToLayer(d).y + ")";
              });
          */ /*
            svg.attr("width", bottomRight[0] - topLeft[0] + 120)
              .attr("height", bottomRight[1] - topLeft[1] + 120)
              .style("left", topLeft[0] - 50 + "px")
              .style("top", topLeft[1] - 50 + "px");


              g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");
           // d3_features.attr("d", path)

            //tttime();
          }
          function tttime(){

            //setInterval()
          }
*/
            /*
            pulseMarker.attr("transform",
              function() {
                var y = f.geometry.coordinates[0][1]
                var x = f.geometry.coordinates[0][0]
                return "translate(" +
                  maptwo.latLngToLayerPoint(new L.LatLng(y, x)).x + "," +
                  maptwo.latLngToLayerPoint(new L.LatLng(y, x)).y + ")";
              });


          } */
          /*
          function transition() {
            animPath.transition()
              .duration(1400)
              //.duration( function(d) {
              //  console.log(d.duration);
              //  return d.duration;
              //})
              .attrTween("stroke-dasharray", tweenDash)
              //.each("end", function() {
              //  d3.select(this).call(transition);
              //});
          }
          function tweenDash() {
            var x = this;
            return function(t) {
              var l = animPath.node().getTotalLength();
              interpolate = d3.interpolateString("0," + l, l + "," + l);
              var marker = d3.select('#marker');
              var p = animPath.node().getPointAtLength(t * l);
              marker.attr("transform", "translate(" + p.x + "," + p.y + ")");
              if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = maptwo.layerPointToLatLng(new L.Point(p.x,p.y));
              maptwo.panTo(newCenter, 10);
            } else {
              tweenToggle = 0;
            }
              return interpolate(t);
            }
          }
          //newreset(animatePath, path);
          //newreset();
          $.each(nodes, function( index, value) {
            $('#layerOut').append("<li>dot:"+index+", radius:"+getRad(value)+", duration: "+getDur(value)+"</li>")
          })
          */


      function projectNode(x, y) {
            var point = maptwo.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        }
}

function animClicker() {
    var timefeatlen = collect.features[collect.features.length - 1].properties.timeFeatures.length;
   propdur = {
    timedur: 0,
    distdur: 0,
    pickup: collect.features[0].properties.timeFeatures[0].pickup,
    dropoff: collect.features[collect.features.length - 1].properties.timeFeatures[timefeatlen - 1].dropoff
  };
  for(var i = 0; i < collect.features.length; i++) {
    var m = collect.features[i];
    propdur.timedur += m.properties.time;
    propdur.distdur += m.properties.distance;
  }
  addPoints(propdur);
}


function addPoints(propdur){
  var coordlen = collect.features[collect.features.length - 1].geometry.coordinates.length;
  var marker = new L.marker(
      new L.LatLng(collect.features[0].geometry.coordinates[0][1], collect.features[0].geometry.coordinates[0][0]), {id: 0, duration: propdur.distdur, time: propdur.timedur, pickup: propdur.pickup, dropoff: propdur.dropoff, icon: tlicon}
    );
  var endMarker = new L.marker(
      new L.LatLng(collect.features[collect.features.length - 1].geometry.coordinates[coordlen - 1][1], collect.features[collect.features.length - 1].geometry.coordinates[coordlen - 1][0])
    );
  marker.addTo(map);
  endMarker.addTo(map);
  marker.on("click", function(event){
    showClickPath(event);
  });
}


clickCounter = 0;
function showClickPath(event) {
  clicklen = collect.features.length;
  for(var i = 0; i < clicklen; ++i) {
    var m = collect.features[i];
    if (m.properties.id === event.target.options.id) {
      startGeo = m;
      startPath(startGeo);
    }
  }

    $('#clickNext').click(function() {

        nextGeo = collect.features[clickCounter];
        nextPath(nextGeo);
        clickCounter += 1;
    });
 }

function startPath(geo) {
  dur = (geo.properties.time / 60000) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;

    animateClick(geo, dur);
    updateGeoboard(geo.properties, dur);
}

function nextPath(geo) {
  if(geo.properties.time > 80000000) {
    dur = (geo.properties.time / 370000) * sliderVal;
  } else if(geo.properties.time > 36000000) {
    dur = (geo.properties.time / 240000) * sliderVal;
  } else if(geo.properties.time > 18000000) {
    dur = (geo.properties.time / 150000) * sliderVal;
  } else if(geo.properties.time > 9000000) {
  dur = (geo.properties.time / 83000) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
 } else  if(geo.properties.time > 6000000) {
  dur = (geo.properties.time / 59000) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
  } else  if(geo.properties.time > 3000000) {
  dur = (geo.properties.time / 49000) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
 } else if(geo.properties.time > 1000000) {
   dur = (geo.properties.time / 16000) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
 } else if(geo.properties.time > 600000) {
   dur = (geo.properties.time / 12500) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
 }else {
  dur = (geo.properties.time / 9100) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
 }
    animateClick(geo, dur);
    updateGeoboard(geo.properties, dur);
}


function updateGeoboard(props, dur){
  $('#poptime').show();
  $('#poptime').popover('show');
  var dis = Math.round(props.distance);
  var tilen = props.timeFeatures.length;
  var starttime = props.timeFeatures[0].pickup;
  var endtime = props.timeFeatures[tilen - 1].pickup;
  var acttime = props.time / 60000;
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour *24;
  var timer;
  var addate = new Date();
  var paddate = Date.parse(addate);
  var upDate = paddate + dur;


  function showRemaining() {
    var now = new Date();
    var getDate = new Date(upDate);
    var distance = getDate - now;
    if (distance < 1 ) {
       clearInterval( timer ); // stop the timer from continuing ..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( distance  / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
    var parentElement = $('h3.popover-header');
        parentElement.html(hours + 'h ' + //days  + 'd ' +
                           minutes + 'm ' +
                           seconds + 's ' +
                           milliseconds + 'ms');
  }
  $('div.popover-body').html('Total Mi: ' + dis + '<br>' +
                             'start: ' + starttime + '<br>' +
                             'arrival: ' + endtime + '<br>' +
                             'act duration: ' + acttime);
  timer = setInterval(showRemaining, 15);
}


function animateClick(geo, dur){
      console.log(geo);
      var d3overlay = d3.select(map.getPanes().overlayPane);
      d3overlay.selectAll("svg.running-marker").remove();
      //var minsvg = d3.select(maptwo.getPanes().overlayPane).append("svg");
      var svg = d3overlay.append("svg").attr("class", "running-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geo.transform({point: projectClick});
      var path = d3.geo.path().projection(transform);
      var markerCol = { type: "FeatureCollection", features: [geo]};
      //var output = JSON.stringify(geo, null, '\t');
      //var outputText = $('#geoOutput').val(output);


    var linePath = g.selectAll('.line')
              .data([geo])
              .enter()
              .append("path")
              .attr("class", "clickConnect");

      var ptFeatures = g.selectAll('circle')
          .data(geo)
          .enter()
          .append('circle')
          .attr("r", 4)
          .attr("class", "waypoints");

      var marker = g.append("circle")
          .attr("r", 7)
          .attr("id", "marker")
          .attr("class", "clickMarker");


      function newreset() {
          var bounds = path.bounds(markerCol),

          topLeft = bounds[0],
          bottomRight = bounds[1];

          topLeft[0] -= 20;
          topLeft[1] -= 20;
          bottomRight[0] += 20;
          bottomRight[1] += 20;

          svg .attr("width", bottomRight[0] - topLeft[0] + 2)
              .attr("height", bottomRight[1] - topLeft[1] + 2)
              .style("left", topLeft[0] + "px")
              .style("top", topLeft[1]  + "px");


          g .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
          linePath.attr("d", path).call(cktransition);
        }

        function cktransition(path) {

          path.transition()
              .duration(dur)
              .attrTween("stroke-dasharray", cktweenDash);
        }

        function cktweenDash() {
          var x = this;

          return function(t) {

            var l = x.getTotalLength();
            var i = d3.interpolateString("0," + l, l + "," + l);
            var marker = d3.select('#marker');
            var p = x.getPointAtLength(t * l);
            marker.attr('transform', "translate(" + p.x + "," + p.y + ")");

            if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = map.layerPointToLatLng(new L.Point(p.x,p.y));
              map.panTo(newCenter, 10);
            } else {
              tweenToggle = 0;
            }
            return i(t);
          };
        }

          map.on("viewreset", newreset);
          newreset(linePath, path);
          newreset();

        function projectClick(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        }


  }

function animPolyPath(){

 addMarkers();
}


function addMarkers() {
  var markers = new L.MarkerClusterGroup();

   for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id }
    );

      marker.on('click', function(event){
        showRunPath(event);
      });
      markers.addLayer(marker);
    }
  }

  map.addLayer(markers);

}

function durCount(n){
  return n < 13 ? 63 * sliderVal:
         n < 17 ? 115 * sliderVal:
          166 * sliderVal;
}
function showRunPath(event) {

    var geoPath;

  for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.properties.id === event.target.options.id) {
      geoPath = f;
      break;
    }
  }


  if (geoPath) {
    if (!(geoPath.geometry.coordinates[0] instanceof Array) ) {
      minifier = new GeojsonMinifier({ precision: 6 });
      geoPath.geometry.coordinates = minifier.decodeGeometry(geoPath.geometry.coordinates);
  }
    //maptwo.fitBounds(new L.GeoJSON(geoPath).getBounds());
    var duration = durCount(geoPath.properties.distance); //< 13 ? 11300 : < 17 ? 22600 : 32900;
    drawPath(geoPath, duration);
    }

}

function updateDahsboard(data, duration) {
  //data should be at collect.features.properties


i = 0;
  var distanceLabel = document.querySelector('#distance > span');
    meters = 8000;
     timeout = Math.floor((3000 / meters) * 10);
  function printText() {
    distanceLabel.innerText = i;
    i += 202;

    if (i < meters) {
      setTimeout(printText, timeout);
    } else {
      distanceLabel.innerText = meters;
    }
  }

  printText();
}

function drawPath(geoPath, duration) {
  tweenToggle = 0;
  var pane = d3.select(map.getPanes().overlayPane);
  pane.selectAll("svg.running-path").remove();
  var svg = pane.append("svg").attr("class", "running-path"),
      g = svg.append("g").attr("class", "leaflet-zoom-hide");

  var transform = d3.geo.transform({point: projectPoint});
  var path = d3.geo.path().projection(transform);
  var coll =  { type: "FeatureCollection", features: [geoPath] };
  //var output = JSON.stringify(geoPath, null, '\t');
  //var outputText = $('#geoOutput').val(output);

  var line = g.selectAll(".line")
                .data([geoPath])
                .enter()
                .append("path")
                .attr("class", "line");



  function reset() {
    var bounds = path.bounds(coll),

        topLeft = bounds[0],
        bottomRight = bounds[1];

    topLeft[0] -= 1;
    topLeft[1] -= 1;
    bottomRight[0] += 1;
    bottomRight[1] += 1;

    svg .attr("width", bottomRight[0] - topLeft[0] + 2)
        .attr("height", bottomRight[1] - topLeft[1] + 2)
        .style("left", topLeft[0] + "px")
        .style("top", topLeft[1] + "px");

    g .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

    line.attr("d", path).call(transition);
  }

  function transition(path) {
    console.log(path);
    path.transition()
        .duration(duration)
        .attrTween("stroke-dasharray", tweenDash);
  }

  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
    var x = this;

    return function(t) {
      var p = x.getPointAtLength(t * l);
      if(tweenToggle == 0){
        tweenToggle = 1;
        var newCenter = map.layerPointToLatLng(new L.Point(p.x,p.y));
        map.panTo(newCenter, 12);
      } else {
        tweenToggle = 0;
      }
      return i(t); };
  }

  map.on("viewreset", reset);
  //maptwo.on("zoomend", reset);
  reset(line, path);
  reset();
}

function projectPoint(x, y) {
  var point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

function animStepper(){
$('#stepper-main').show();
 addStepMarkers();
}

function addStepMarkers() {
  var markers = new L.MarkerClusterGroup();

   for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id, icon: tlicon }
    );


      marker.on('click', function(event){
        showStepRunPath(event);
      });
      markers.addLayer(marker);
    }

  }

  map.addLayer(markers);
}

function showStepRunPath(event) {

    stepPath = [];


  for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.properties.id === event.target.options.id) {
      stepPath = f;
      break;
    }
  }

    //maptwo.fitBounds(new L.GeoJSON(stepPath).getBounds());
    if(stepPath.properties.mod > 900) {
    dur = (stepPath.properties.mod / 4) * sliderVal; //260durd3Count(stepPath.properties.distance) //< 13 ? 11300 : < 17 ? 22600 : 32900;
  } else if(stepPath.properties.mod > 400) {
    dur = (stepPath.properties.mod / 3) * sliderVal;
  } else if(stepPath.properties.mod > 200) {
    dur = (stepPath.properties.mod / 2) * sliderVal;
  } else {
    dur = stepPath.properties.mod * sliderVal;
  }
    animateStep(stepPath, dur);
    updateDashboard(stepPath.properties, dur);
  }


  function updateDashboard(props, dur){
  $('#poptime').show();
  $('#poptime').popover('show');
  var dis = Math.round(props.distance);
  var tilen = props.timeFeatures.length;
  var starttime = props.timeFeatures[0].pickup;
  var endtime = props.timeFeatures[tilen - 1].pickup;
  var acttime = props.time / 60000;
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour *24;
  var timer;
  var addate = Date();
  var paddate = Date.parse(addate);
  var upDate = paddate + dur;


  function showRemaining() {
    var now = new Date();
    var getDate = new Date(upDate);
    var distance = getDate - now;
    if (distance < 1 ) {
       clearInterval( timer ); // stop the timer from continuing ..
    }
    //var days = Math.floor(distance / _day);
    var hours = Math.floor( distance  / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;
    var parentElement = $('h3.popover-header');
        parentElement.html(hours + 'h ' + //days  + 'd ' +
                           minutes + 'm ' +
                           seconds + 's ' +
                           milliseconds + 'ms');
  }
  $('div.popover-body').html('Total Mi: ' + dis + '<br>' +
                             'start: ' + starttime + '<br>' +
                             'arrival: ' + endtime + '<br>' +
                             'act duration: ' + acttime);
  timer = setInterval(showRemaining, 15);

  }


    function animateStep(stepPath, dur){



      console.log(stepPath);
      var d3overlay = d3.select(map.getPanes().overlayPane);
      d3overlay.selectAll("svg.running-marker").remove();
      var svg = d3overlay.append("svg").attr("class", "running-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geo.transform({point: projectStep});
      var path = d3.geo.path().projection(transform);
      var markerCol = { type: "FeatureCollection", features: [stepPath]};
      var output = JSON.stringify(stepPath, null, '\t');
      var outputText = $('#geoOutput').val(output);



    var linePath = g.selectAll('.line')
              .data([stepPath])
              .enter()
              .append("path")
              .attr("class", "stepConnect");


      var ptFeatures = g.selectAll('circle')
          .data(stepPath)
          .enter()
          .append('circle')
          .attr("r", 4)
          .attr("class", "waypoints");


      var marker = g.append("circle")
          .attr("r", 7)
          .attr("id", "marker")
          .attr("class", "stepMarker");



      function newreset() {
            var bounds = path.bounds(markerCol),

              topLeft = bounds[0],
              bottomRight = bounds[1];

          topLeft[0] -= 20;
          topLeft[1] -= 20;
          bottomRight[0] += 20;
          bottomRight[1] += 20;

          svg .attr("width", bottomRight[0] - topLeft[0])
              .attr("height", bottomRight[1] - topLeft[1])
              .style("left", topLeft[0] + "px")
              .style("top", topLeft[1] + "px");



          g .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
          linePath.attr("d", path).call(sttransition);
          //linePath.attr("d", path).call(transition)
          //line.attr("d", path).call(transition);
        }

        function sttransition(path) {

          path.transition()
              .duration(dur)
              .attrTween("stroke-dasharray", sttweenDash);

        }

        function sttweenDash() {
          var x = this;

          return function(t) {

            var l = x.getTotalLength();
            var i = d3.interpolateString("0," + l, l + "," + l);
            //var markerPulse = d3.select('.pulseMarker')
            var marker = d3.select('#marker');
            var p = x.getPointAtLength(t * l);

            //markerPulse.attr('transform', "translate(" + p.x + "," + p.y + ")");
            marker.attr('transform', "translate(" + p.x + "," + p.y + ")");

            if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = map.layerPointToLatLng(new L.Point(p.x,p.y));
              map.panTo(newCenter, 10);
            } else {
              tweenToggle = 0;
            }
            return i(t);
          };
        }

          map.on("viewreset", newreset);
          newreset(linePath, path);
          newreset();
        function projectStep(x, y) {

            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);

        }


      }

function applyStepLatLngToLayer(d) {
       var y = d.geometry.coordinates[1];
       var x = d.geometry.coordinates[0];
       return map.latLngToLayerPoint(new L.LatLng(y, x));
}

function translatePoint(d) {
    var point = map.latLngToLayerPoint(new L.LatLng(d[1],d[0]));

    return "translate(" + point.x + "," + point.y + ")";
}

function coordToLatLon(coord) {
var point = map.layerPointToLatLng(new L.Point(coord[0],coord[1]));
return point;
}

$('#d3stepper').click(function(){

  var tar = "stepper";
  animationGenerator(tar);
});

$('#geoInput').focus(function(){
        $(this).val('');
    });

    // Button to clear map and input text area:
    $('#btnInputClear').click(function(){
        count = 0;
        featuresIn.clearLayers();
        featureLayer.clearLayers();
        featuresdata = [];
        layerIn = '';
        $('#geoInput').val('');
        $('#layerIn').html('');
    });

    // Generate output geojson:
    $('#btnOutput').click(function(){
        var output = JSON.stringify(result, null, '\t');
        var outputText = $('#geoOutput').val(output);
    });
    $('#poilink').click(function() {

      var AirIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'airport.png'
        }
      });
      var EatIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'dining.png'
        }
      });
      var BarIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'bar.png'
        }
      });
      var ShopIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'shopping.png'
        }
      });
      var CasIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'casino.png'
        }
      });
      var SportIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'sport.png'
        }
      });
      var UnivIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'univ.png'
        }
      });
      var GenIcon = L.Icon.Default.extend({
        options: {
              iconUrl: 'blue-marker.png'
        }
      });
      var airicon = new AirIcon(),
          eaticon = new EatIcon(),
          baricon = new BarIcon(),
          shopicon = new ShopIcon(),
          univicon = new UnivIcon(),
          sporticon = new SportIcon(),
          casicon = new CasIcon(),
          genicon = new GenIcon();
      var poimarkers = [];
      var plen = poi.features.length;
      for(var i = 0; i < plen; i++) {
        var p = poi.features[i];
        if(p.properties.bus == 'nightlife'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:baricon, id: i}).addTo(maptwo));
      } else if(p.properties.bus == 'shopping'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:shopicon, id: i}).addTo(maptwo));
      } else if(p.properties.bus == 'sports'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:sporticon, id: i}).addTo(maptwo));
        } else if(p.properties.bus == 'dining'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:eaticon, id: i}).addTo(maptwo));
        } else if(p.properties.bus == 'airport'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:airicon, id: i}).addTo(maptwo));
        } else if(p.properties.bus == 'casino'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:casicon, id: i}).addTo(maptwo));
        } else if(p.properties.bus == 'university'){
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:univicon, id: i}).addTo(maptwo));
        } else {
          poimarkers.push(new L.marker(new L.latLng(p.geometry.coordinates[1], p.geometry.coordinates[0]), {icon:genicon, id: i}).addTo(maptwo));
        }
      }
      featureLayer.addData(poimarkers);

    });


    // Clear button to clear output map and output geojson text area:
    $('#btnOutputClear').click(function(){
        map.clearLayers();
        featuresOut.clearLayers();
        featureLayer.clearLayers();
        $('#demoImage').parent().remove();
        $('#geoOutput').val('');
        intersectL = [];
        bufferL = [];
    });


function routingInit(caller){
  var len = collect.features.length;
  routes = [];

  function sortgeom(array) {
    raylen = array.geometry.coordinates.length;
    returnray = [];
    console.log(array.geometry.coordinates);
    for( var w = 0; w < raylen; w++){
      returnray.push(new L.latLng(array.geometry.coordinates[w][1], array.geometry.coordinates[w][0]));
    }
    return returnray;
  }
  function sortRoute(array) {
    var arrlen = array.length;
    var copyray = [];
    for(var w = 0; w < arrlen; w++) {
      copyray.push(array[w]);
    }
    return copyray;
  }
  for(var i = 0; i < len; i++) {

    routes[i] = [];
    ltlgs[i] = [];
  }
  for(var i = 0; i < len; i++) {
     r = collect.features[i];
     //ltlgs[i].push(sortgeom(r))
     routes[i].push(L.Routing.control({waypoints: sortgeom(r), geocoder: L.Control.Geocoder.nominatim()}).addTo(map));

  }

}
    $('#clean').click(function(){
        var len = features1.features.length;
        result = [];
        for(var i = 0; i < len; i++){
            result.push(turf.cleanCoords(features1.features[i]).geometry.coordinates);
        }
        resultOut = {
            "type": "FeatureCollection",
            "features": result
        };
        //result = turf.cleanCoords(features1.geometry.coordinates).geometry.coordinates;
        var resultShow = L.marker(result, {
            style: style,
            onEachFeature: onEachFeature
        });
        featuresLayer.addLayer(resultShow).addTo(map);
        //maptwo.fitBounds(resultShow.getBounds());

    });

    //to polyline
    $('#toPolyline').click(function(){
        var len = features1.features.length;
        geo = features1.features;
        result = [];
        for(var i = 0; i < len; i++){

            result.push(new L.LatLng(geo[i].geometry.coordinates[1], geo[i].geometry.coordinates[0]));
        }
      //res = turf.featurecollection(result);
      featureLayer.addLayer(L.marker(result[0]));
      featureLayer.addLayer(L.marker(result[len - 1]));
      var resultShow = L.polyline(result);
      featureLayer.addLayer(resultShow).addTo(map);

  });

map.on("click", function(e) {
  highlightLayer.clearLayers();
});
//maptwo.on("click", function(e) {
//  highlightLayerTwo.clearLayers();
//});
    $('#clusterKmeans').click(function(){
        var options = {numberOfClusters: 25};
        result = [];
        var len = features1.features.length;
            clustered = turf.clustersKmeans(features1, options);
        for(var i = 0; i < clustered.features.length; i++){
            result.push(new L.LatLng(clustered.features[i].properties.centroid[1], clustered.features[i].properties.centroid[0]));
        }
        console.log(result);
        for(var i = 0; i < result.length; i++){
        featureLayer.addLayer(L.circleMarker(result[i]));
    }
    });
    function clusterDbscan(){
      var maxDistance = 75;
      var result = [];
      var len = features1.features.length;
      var clustered = turf.clustersDbscan(features1, maxDistance);
      for(var i = 0; i < clustered.features.length; i++) {
        result.push(new L.latLng(clustered.features[i].properties.centroid[1], clustered.features[i].properties.centroid[0]));
        featureLayer.addData(L.circleMarker(result[i]));
      }
    }
    function measurePointDist(){
      var measured = [];
      var len = features1.features.length;
      var opts = {units: 'miles'};
      for(var i = 0; i < len; i++) {
        var f = features1.features;
        var from = f[i].geometry.coordinates;
        var to = f[i+1].geometry.coordinates;
        measured.push(turf.distance(from, to, opts));
      }
      featureLayer.addData(measured);
    }
    $('#clusterDBscan').click(function(){
      clusterDbscan();
    });
    $('#distPoint').click(function(){
      measurePointDist();
    });
    /*
$('#ralphtoggle').click(function(){
  initRalph();
});


function initRalph(){
  var latlngs = [];
  var ralphProps = [];
  var ralphTravel = [];
  var ralphDist = {};
  var ralphLen = {};
  var ralphMark = {};
  var ralphId = {};
  var ralphPP = 0;
  var Rdiv = 18;
  //ralphLen[ralphPP];
  ralphLen[ralphPP] = 0;
  ralphId[ralphPP] = [];
  ralphDist[ralphPP] = [];
  ralphMark[ralphPP] = [];
  ralphId[0].push({id: 0});
  len = features1.features.length;
  for(var i = 0; i < len; i++){
    var b = features1.features[i].properties;
    var t = features1.features[i].properties.pickuptime;
    var to = features1.features[i].properties.dropofftime;
    latlngs.push(features1.features[i].geometry.coordinates);
    ralphProps.push(b);
    ralphTravel.push([t, to]);

  }
  for(var i = 0; i < ralphProps.length; i++){
    if(ralphLen[ralphPP] <= Rdiv) {
      ralphLen[ralphPP] += ralphProps[i].dist4;
      ralphMark[ralphPP].push(latlngs[i]);
      ralphDist[ralphPP].push(ralphProps[i]);
    } else {
      ralphPP += 1;
      ralphId[ralphPP] = [];
      ralphId[ralphPP].push({id: ralphPP});
      ralphLen[ralphPP] = 0;
      ralphMark[ralphPP] = [];
      ralphDist[ralphPP] = [];
    }
  }
  ralphDist.push([ralphId, ralphLen]);
  collect = {"type": "Feature", "geometry": {"type": "multiPoint", "coordinates": ralphMark},"properties": ralphDist};
  ralphMarkers();
}
function ralphMarkers(){
  for(var i = 0; i < collect.geometry.length; i++){
    f = collect.geometry[i];
    p = collect.properties[i];
    if(f){
      var rMarker = new R.Marker(
          new L.LatLng(f.coordinates[1],f.coordinates[0], { id: p.id })
        );
      rMarker.on('click', function(e){
        showRalph(e);
      });
        featureLayerTwo.addLayer(rMarker).addTo(maptwo);
    }
  }
}
function showRalph(e){
    var ralphGeo;
    var ralphVerify;
    for(var i = 0; i < collect.geometry.length; i++){
      var f = collect.geometry[i];
      var  p = collect.properties[i];
      console.log(e.target);
      if(p.id === e.target.options.id){
        ralphGeo = f;
        ralphVerify = p;
        break;
      }
    }
    if (ralphGeo){
      minifier = new GeojsonMinifier({precision: 6});
      ralphGeo.coordinates = minifier.decodeGeometry(ralphGeo.coordinates);
    }
    var durationR = ralphVerify.distance > 19 ? 24000 : 36000;
    drawRalph(ralphGeo, durationR, e);

}
function drawRalph(ralphGeo, durationR, e){
  var b = new R.BezierAnim([e.latlng, ralphGeo.coordinates[0][1]], {}, function() {
    var dd = new R.Pulse(
        ralphGeo.coordinates[0][1],
        6,
        {'stroke': '#e96603', 'fill': '#fcc575'},
        {'stroke': '#fcc575', 'stroke-width': 4});
      featureLayerTwo.addData(dd);
      setTimeout(function(){
        featureLayerTwo.removeLayer(dd).removeLayer(b);
      }, 3000);
  });
  featureLayerTwo.addData(b);
}

*/

function animD3Marker(){
   $('.slower').click(function(){
      if(timeFactor > 1){
        timeFactor -= 1;
      }
      $('.timeFactor').html(timeFactor);
    });
    $('.faster').click(function(){
        timeFactor += 1;
      $('.timeFactor').html(timeFactor);
    });
    $('.reload').click(function(){
      location.reload();
    });
    $('.about').click(function(){
      $('.aboutPopup').fadeIn();
    });

 addD3Markers();
}


function addD3Markers() {
  var markers = new L.MarkerClusterGroup();

   for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.geometry) {
      var marker = new L.marker(
            new L.LatLng(f.geometry.coordinates[0][1], f.geometry.coordinates[0][0]), { id: f.properties.id }
    );


      marker.on('click', function(event){
        showD3RunPath(event);

      });
      markers.addLayer(marker);
    }
  }

  map.addLayer(markers);

}

function durd3Count(n){
  return n < 18 ? 63 * sliderVal:
         n < 28 ? 115 * sliderVal:
          166 * sliderVal;
}
function showD3RunPath(event) {

    var markerPath;

  for (var i = 0; i < collect.features.length; i++) {
    var f = collect.features[i];

    if (f.properties.id === event.target.options.id) {
      markerPath = f;
      break;
    }
  }


  if (markerPath) {
    if (!(markerPath.geometry.coordinates[0] instanceof Array) ) {
      d3minifier = new GeojsonMinifier({ precision: 6 });
      markerPath.geometry.coordinates = d3minifier.decodeGeometry(markerPath.geometry.coordinates);
  }
    //maptwo.fitBounds(new L.GeoJSON(markerPath).getBounds());
    var duration = durd3Count(markerPath.properties.distance); //< 13 ? 11300 : < 17 ? 22600 : 32900;
    animateMarker(markerPath, duration);
    //updateDahsboard(r);
    }

}

  function areaChartBuild(){
    var margin = {top: 10, right:8, bottom:8, left:14},
    areaChartWidth = $(window).width() - margin.left - margin.right - 40,
    areaChartHeight = 140 - margin.top - margin.bottom;
    var x = d3.scale.linear()
      .range([0, areaChartWidth]);
    var y = d3.scale.linear()
      .range([areaChartHeight, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(4);
    var areaChartSvg = d3.select(".areaChartBox").append("svg")
      .attr("width", areaChartWidth + margin.left + margin.right)
      .attr("height", areaChartHeight + margin.top + margin.bottom)
      .attr("class", "areaChart")
      .append("g")
      .attr("transform", "translate("+margin.left+","+margin.top+")");
  }


    function animateMarker(markerPath, duration){
      var pulseData = [
        {"r": 1, "pulse": false},
        {"r": 3, "pulse": false}
      ];
      console.log(markerPath);
      var d3overlay = d3.select(map.getPanes().overlayPane);
      d3overlay.selectAll("svg.running-marker").remove();
      var minsvg = d3.select(map.getPanes().overlayPane).append("svg");
      var svg = d3overlay.append("svg").attr("class", "running-marker");
      g = svg.append("g").attr("class", "leaflet-zoom-hide");
      var transform = d3.geo.transform({point: d3projectPoint});
      var path = d3.geo.path().projection(transform);
      var markerCol = { type: "FeatureCollection", features: [markerPath]};

      var ptFeatures = g.selectAll('circle')
          .data(markerPath)
          .enter()
          .append('circle')
          .attr("r", 2)
          .attr("class", "waypoints");

      var linePath = g.selectAll('.line')
          .data([markerPath])
          .enter()
          .append("path")
          //.attr("class", "line")
          .attr("class", "lineConnect");



      var marker = g.append("circle")
          .attr("r", 5)
          .attr("id", "marker")
          .attr("class", "travelMarker");

      var markerPulse = g.selectAll("circle").data(pulseData);
          markerPulse.enter()
          .append('circle')

          .attr("opacity", 0.3)
          .attr("class", "pulseMarker");
      g.selectAll('circle')
          .attr('r', function(d) {
            d.pulse = !d.pulse;
            if (d.pulse) {
              sel = d3.select(this);
              pulsate(sel);
            }
          });

      var upd = markerPath.geometry.coordinates.length;
      var startAndEnd = [markerPath.geometry.coordinates[0], markerPath.geometry.coordinates[upd - 1]];
      var begend = g.selectAll('.srtend')
          .data(startAndEnd)
          .enter()
          .append("circle", ".srtend")
          .attr("r", 35)
          .style('fill', '#d500f9')
          .style('opacity', ".3");


      function reset() {
            var bounds = path.bounds(markerCol),

              topLeft = bounds[0],
              bottomRight = bounds[1];

          topLeft[0] -= 20;
          topLeft[1] -= 20;
          bottomRight[0] += 20;
          bottomRight[1] += 20;

          svg .attr("width", bottomRight[0] - topLeft[0])
              .attr("height", bottomRight[1] - topLeft[1])
              .style("left", topLeft[0] + "px")
              .style("top", topLeft[1] + "px");



          g .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
          linePath.attr("d", path).call(transition);
          //line.attr("d", path).call(transition);
        }

        function transition(path) {

          path.transition()
              .duration(duration)
              .attrTween("stroke-dasharray", tweenDash);

        }

        function tweenDash() {
          var x = this;

          return function(t) {

            var l = x.getTotalLength();
            var i = d3.interpolateString("0," + l, l + "," + l);
            var markerPulse = d3.select('.pulseMarker');
            var marker = d3.select('#marker');
            var p = x.getPointAtLength(t * l);
            markerPulse.attr('transform', "translate(" + p.x + "," + p.y + ")");
            marker.attr('transform', "translate(" + p.x + "," + p.y + ")");

            if(tweenToggle == 0){
              tweenToggle = 1;
              var newCenter = map.layerPointToLatLng(new L.Point(p.x,p.y));
              map.panTo(newCenter, 12);
            } else {
              tweenToggle = 0;
            }
            return i(t);
          };
        }
        function pulsate(selection) {
              recursive_transitions();

              function recursive_transitions(){
                if (selection.data()[0].pulse) {
                  selection.transition()
                  .duration(25)
                  .attr("r", function(d){
                    return d.r * 0.25;
                  })
                  .attr('opacity', 1)
                  .ease('sin-in')
                  .transition()
                  .duration(1200)
                  .attr('opacity', 0)
                  .attr('r', function(d){
                    return d.r * 7;
                  })
                  .ease('ease-out')
                  .each("end", recursive_transitions);
                } else {
                  selection.transition()
                    .duration(200)
                    .attr('r', 1)
                    .attr('opacity', 1);
                }
              }
            }
        map.on("viewreset", reset);
        reset(linePath, path);
        reset(begend, path);
        reset();


      }

function d3projectPoint(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        } //end d3projectPoint

function applyLatLngToLayer(d) {

        var y = d.geometry.coordinates[1]
        var x = d.geometry.coordinates[0]
        return map.latLngToLayerPoint(new L.LatLng(y, x));
      }



$('#d3modal').click(function(){
  var tad = "marker";
  animationGenerator(tad);
});


$('#styleditorbtn').click(function(){
  let styleEditor = L.control.styleEditor({
    position: 'topleft',
    useGrouping: false
  });
  map.addControl(styleEditor);
  let drawnItems = new L.FeatureGroup();
  featureLayer.addLayer(drawnItems);

  let drawControl = new L.Control.Draw({
    draw: {
      position: 'topleft',
      polygon: {
        title: 'Draw a sexy polygon!',
        allowIntersection: false,
        drawError: {
          color: '#b00b00',
          timeout: 1000
        },
        shapeOptions: {
          color: '#bada55'
        },
        showArea: true
      },
      polyline: {
        metric: false
      },
      circle: {
        shapeOptions: {
          color: '#662d91'
        }
      },
      marker: {
        icon: styleEditor.getDefaultIcon()
      }
    },
    edit: {
      featureGroup: drawnItems
    }
  });
  map.addControl(drawControl);
  map.on('draw:created', function(e){
    let type = e.layerType,
    layer = e.layer;
    if(type === 'marker') {
      layer.bindPopup('A popup');
    }
    drawnItems.addLayer(layer);
  });
});
//$('#menuchart').removeClass('show');
//  $('#chartDrop').attr('aria-expanded', "false");
$("[name='menu']").click(function() {

  $(".mm, .active").removeClass("mm active");
  if (this.id === "menuWrangle") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "maplink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "tablelink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "geolink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "hchartlink") {
    $(this).addClass('mm active');
    $("#chartDrop").attr("aria-expanded", "true");
    $("#menuchart").addClass('show');
    return false;
  } else if (this.id === "infolink") {
    $(this).addClass('mm active');
    return false;
  } else if (this.id === "animlink") {
    $(this).addClass('mm active');
    return false;
  }
});
$('#menuWrangle').click(function(){
  $('#wrangleModal').modal('show');
});
$('#clusterDBscan').click(function(){

});
$('#geocodingbtn').click(function(){
  //$('#georoutes').show();
  var caller = "generic";
  routingInit(caller);
});



    $('#kinks').click(function(){
        var data = [];

        $.each(featuresdata[0].features, function(i1,v1){
            kinks = turf.kinks(v1.geometry).intersections;

            for (var i=0; i<kinks.features.length; i++) {
                data.push(kinks.features[i]);
            }
        });

        result = {
            "type": "FeatureCollection",
            "features": data
        };

        // Add result to output map:
        var resultShow = L.geoJson(result, {
            width: 5,
            color: 'red',
        });
        featuresOut.addLayer(resultShow).addTo(map);

        var showFeatures = L.geoJson(featuresdata[0], {
            width: 5,
            color: 'red',
        });
        featuresOut.addLayer(showFeatures).addTo(map);
    });

     var dropElement = document.getElementById('geoInput');
    dropElement.addEventListener('dragover', handleDragOver, false);
    dropElement.addEventListener('drop', handleDrop, false);

    reader = new FileReader();

    reader.onload = function(event){
        var geojson = JSON.parse(reader.result);
        var fileContent = reader.result;
        $('#geoInput').val(fileContent);
    };

    function handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        f = files[0];
        reader.readAsText(f);
    }

    function handleDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }
$("#geo-stats").click(function(){
  if(timeArray){

    var result = {};

    var traveladd = 0;
    var timeadd = 0;
    for(key in timelen) {

      timeadd = timeadd +  timelen[key];
      traveladd = traveladd +  proplen[key];
    }
    var minutes = timeadd/60000;
    var hours = minutes/60;
    var reportRange = timeout[0][0].pickup;
    var travelDist = traveladd;

    result = {minutes: minutes, hours: hours, daterange:reportRange, travelDistance:travelDist};

  } else if(geojson){
    var visitcount = 0;
    for(var i = 0; i < geojson.features.length; i++){
      counting = geojson.features[i].visits;
      visitcount = visitcount + counting;

    }
    result = {totalVisits: visitcount};
  }
   var output = JSON.stringify(result, null, '\t');
    var outputText = $('#geoOutput').val(output);
});


});


