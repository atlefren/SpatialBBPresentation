var Bouvet = this.Bouvet || {};

(function (ns) {
    "use strict";

    var Office = Backbone.Model.extend({
        defaults: {
            "line2": null
        }

    });

    var Offices = ns.Offices = Backbone.Collection.extend({
        model: Office,
        url: "offices.json"
    });

    var OfficeView = Backbone.View.extend({

        tagName: "address",

        template: $("#office_template").html(),

        render: function () {
            this.$el.html(_.template(this.template, this.model.toJSON()));
            return this;
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