define(
  [
    'text!/js/application/templates/details.html',
    'application/collections/details',
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