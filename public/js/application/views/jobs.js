define(
  [
    'text!/js/application/templates/jobs.html',
    'application/collections/jobs',
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