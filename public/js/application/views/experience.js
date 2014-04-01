define(
  [
    'text!/js/application/templates/experience.html',
    'application/collections/experience',
    'application/views/base'
  ],
  function (Template, Collection, Base) {

    return Base.extend({
      collection: Collection,
      options: _.extend({}, Base.prototype.options, {
        templates: {
          main: Template
        }
      })
    })
  }
)