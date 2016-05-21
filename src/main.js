import './plugins';
import Backbone from 'backbone';
import $ from 'jquery';

import './main.styl';

import Application from './application/application';

import ModalService from './modal/service';
import HeaderService from './header/service';
import FlashesService from './flashes/service';

import IndexRouter from './index/router';
import AuthRouter from './auth/router';

let app = new Application();

ModalService.setup({
  container: app.layout.overlay
});

HeaderService.setup({
  container: app.layout.header
});

FlashesService.setup({
  container: app.layout.flashes
});

$(document).ajaxError(() => {
  FlashesService.request('add', {
    type: 'danger',
    title: 'Server Error'
  });
});
$(function () {
  girder.router.enabled(false);

  // load routes after load to override girder's routes
  app.index = new IndexRouter({
    container: app.layout.content
  });

  app.auth = new AuthRouter({
    container: app.layout.content
  });

  Backbone.history.start();
});

