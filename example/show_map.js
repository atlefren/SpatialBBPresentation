var Bouvet = this.Bouvet || {};

(function (ns) {
    "use strict";

    var map = ns.map = L.map('map').setView([60, 12], 5);

    var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.',
        maxZoom: 18
    });

    var stamen = new L.TileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors.',
        maxZoom: 18
    });
    stamen.addTo(map);
    var baseLayers = {
        "OpenStreetMap": osm,
        "Stamen Watercolor": stamen
    };

    L.control.layers(baseLayers, {}).addTo(map);

}(Bouvet));

