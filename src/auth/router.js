import {Router} from 'backbone-routing';
import HeaderService from '../header/service';
import LoginRoute from './route.js';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.listenTo(this, 'before:enter', this.onBeforeEnter);

    HeaderService.request('add', {
      name: 'Login',
      path: 'login',
      type: 'secondary'
    });
  },

  onBeforeEnter() {
    /*
    this.layout = new LayoutView();
    this.container.show(this.layout);
    */
    HeaderService.request('activate', {
      path: 'login'
    });
  },

  routes: {
    'login': 'index'
  },

  index() {
    return new LoginRoute({
      container: this.container
    });
  }
});
