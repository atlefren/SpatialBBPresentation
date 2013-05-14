(function () {
    "use strict";

    var offices = new Bouvet.Offices();

    var listView = new Bouvet.OfficeListView({"collection": offices, "el": $("#offices")}).render();

    Bouvet.map.addLayer(offices.getLayerGroup());

    offices.fetch();
}());