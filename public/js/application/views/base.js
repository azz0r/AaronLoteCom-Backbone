define(['backbone'],
  function (Backbone) {
    return Backbone.View.extend({
      options: {
        template: {
          data: {
            loading: true,
            list: []
          }
        },
        elements: {},
        templates: {}
      },
      els: {},
      el: $('#content-container'),


      initialize: function (options) {

        this.events_ = (options && options.events_) ? options.events_ : _.clone(Backbone.Events)

        if (this.collection) {
          this.collection = new this.collection()
        }

        this.bind()

        if (this.collection) {
          this.collection.fetch({success: this.onceFetchCollection.bind(this)})
        }

        this.render()
      },


      bind: function () {
        this.on('attached', this.onAttach, this)
        if (this.collection) {
          this.collection
            .on('add', this.onAddCollection, this)
            .on('remove', this.onRemoveCollection, this)
            .on('change', this.onChangeCollection, this)
            .on('fetch', this.onFetchCollection, this)
            .on('reset', this.onResetCollection, this)
        }
      },


      onAttach: function () {
        this.setEls()

        if (this.collection) {
          this.collection.fetch({success: this.onceFetchCollection.bind(this)})
        }
      },


      onAddCollection: function () {},


      onRemoveCollection: function () {},


      onChangeCollection: function () {},


      onResetCollection: function () {},


      onFetchCollection: function () {},


      onceFetchCollection: function (collection, data) {
        this.options.template.data = {loading: false, list: collection.toJSON()}
        this.render()
      },


      setEls: function () {
        var els = {}  // Be careful. Avoid to overwrite the prototype.
        _.each(this.options.elements, function (selector, name) {
          els[name] = this.$(selector)
        }, this)
        this.els = els
      },


      render: function () {
        if (this.options.templates.main) {
          try {
            this.$el.html(_.template(this.options.templates.main, this.options.template.data))
          }
          catch (e) {
            console.warn('Error rendering main view template')
            throw e
          }
        }
        return this
      }


    })
  }
)