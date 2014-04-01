define(
  [
    "backbone",
    "application/models/reference"
  ],
  function (Backbone, Model) {
    return Backbone.Collection.extend({
      model : Model,
      url : "/js/store/references.json"
    })
  }
)
