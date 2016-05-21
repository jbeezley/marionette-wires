import {ItemView} from 'backbone.marionette';
import template from './template.jade';

export default ItemView.extend({
  template: template,
  tagName: 'form',

  ui: {
    user: '#dsa-login',
    password: '#dsa-password'
  },

  triggers: {
    'click .btn-default': 'cancel',
    'click .close': 'cancel'
  }
});
