define(
  [
    "backbone",
    "application/models/detail"
  ],
  function (Backbone, Model) {
    return Backbone.Collection.extend({
      model : Model,
      url : "/js/store/details.json"
    })
  }
)
