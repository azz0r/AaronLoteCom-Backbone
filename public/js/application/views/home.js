define(
  [
    'text!/js/application/templates/home.html',
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