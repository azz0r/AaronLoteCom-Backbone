define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function ($, _, Backbone) {


    var showView = function (View) {
      $('#content-latch').empty()
      View.render()
    }


    var AppRouter = Backbone.Router.extend({
        routes: {
          'experience': 'experience',
          'jobs': 'jobs',
          '*actions': 'home'
        },

        home: function () {
          require(["application/views/home"], function (View) {
            showView(new View())
          })
        },

        jobs: function () {
          require(["application/views/jobs"], function (View) {
            showView(new View())
          })
        },

        experience: function () {
          require(["application/views/experience"], function (View) {
            showView(new View())
          })
        }

    });


    var initialize = function () {
      var app_router = new AppRouter
      Backbone.history.start({pushState: false, root: "/"})
    }


    return {
      initialize: initialize
    }


  }
);