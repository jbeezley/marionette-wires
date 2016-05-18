import './styles.styl';

import {Router} from 'backbone-routing';
import HeaderService from '../header/service';

import IndexRoute from './index/route';

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.listenTo(this, 'before:enter', this.onBeforeEnter);

    HeaderService.request('add', {
      name: 'Colors',
      path: 'colors',
      type: 'primary'
    });
  },

  onBeforeEnter() {
    HeaderService.request('activate', {
      path: 'colors'
    });
  },

  routes: {
    colors: 'index'
  },

  index() {
    return new IndexRoute({
      container: this.container
    });
  }
});
