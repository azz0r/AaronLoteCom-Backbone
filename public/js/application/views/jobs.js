define(
  [
    'text!/js/application/templates/jobs.html',
    'application/views/base'
  ],
  function (Template, Base) {

  return Base.extend({
    options: _.extend({}, Base.prototype.options, {
      templates: {
        main: Template
      }
    })
  })
}
)