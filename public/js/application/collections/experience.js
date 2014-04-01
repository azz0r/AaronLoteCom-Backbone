define(
  [
    "backbone",
    "application/models/experience"
  ],
  function (Backbone, Model) {
    return Backbone.Collection.extend({
      model : Model,
      url : "/js/store/experience.json"
    })
  }
)
