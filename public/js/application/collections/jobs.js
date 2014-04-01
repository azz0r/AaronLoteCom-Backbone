define(
  [
    "backbone",
    "application/models/job"
  ],
  function (Backbone, Model) {
    return Backbone.Collection.extend({
      model : Model,
      url : "/js/store/jobs.json"
    })
  }
)
