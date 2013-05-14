var Bouvet = this.Bouvet || {};

(function (ns) {
    "use strict";

    var OfficeView = Backbone.View.extend({

        tagName: "address",

        template: $("#office_template").html(),

        events: {
            "click": "clicked"
        },

        initialize: function () {
            _.bindAll(this, "clicked");
        },

        render: function () {
            this.$el.html(_.template(this.template, this.model.toJSON()));
            return this;
        },

        clicked: function () {
            ns.map.setView(this.model.getMarker().getLatLng(), 14);
        }
    });

    var OfficeListView = ns.OfficeListView = Backbone.View.extend({
        initialize: function () {
            this.collection.on("add", this.modelAdded, this);
        },

        modelAdded: function (model) {
            this.$el.append(new OfficeView({"model": model}).render().$el);
        }
    });
}(Bouvet));