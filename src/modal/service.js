import ModalService from 'backbone-service-modals';
import _ from 'underscore';
import PromisePolyfill from 'es6-promise';

import LayoutView from './layout-view';

import AlertView from './alert/view';
import ConfirmView from './confirm/view';
import PromptView from './prompt/view';

var ES6Promise = PromisePolyfill.Promise;

const WiresModalService = ModalService.extend({
  AlertView: AlertView,
  ConfirmView: ConfirmView,
  PromptView: PromptView,

  requests() {
    return _.extend({
      form: 'form'
    }, ModalService.prototype.requests());
  },

  setup(options = {}) {
    this.container = options.container;
  },

  start() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
  },

  render(view) {
    this.layout.content.show(view);
  },

  remove() {
    this.layout.content.reset();
  },

  animateIn() {
    return this.layout.animateIn();
  },

  animateOut() {
    return this.layout.animateOut();
  },

  form(view, options) {
    return new ES6Promise((resolve, reject) => {
      let promise = this.open(view, options);

      this.trigger('before:prompt', view, options);

      let close = result => {
        promise
          .then(() => this.close(view, options))
          .then(() => this.trigger('prompt', result, view, options))
          .then(() => resolve(result), reject);
      };

      view.on({
        submit: form => close(form),
        cancel: () => close(null)
      });
    });
  }
});

export default new WiresModalService();
