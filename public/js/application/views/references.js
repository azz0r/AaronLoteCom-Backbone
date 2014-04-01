define(
  [
    'text!/js/application/templates/references.html',
    'application/collections/references',
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