import './styles.styl';

import {LayoutView} from 'backbone.marionette';
import template from './layout-template.jade';

export default LayoutView.extend({
  el: '.application',
  template: template,

  regions: {
    header: '.application__header',
    flashes: '.application__flashes',
    content: '.application__content',
    overlay: '.application__overlay'
  }
});
