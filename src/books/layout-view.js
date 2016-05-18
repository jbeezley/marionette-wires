import './styles.styl';

import {LayoutView} from 'backbone.marionette';
import template from './layout-template.jade';

export default LayoutView.extend({
  template: template,
  className: 'container',
  regions: {
    library: '.books__library',
    viewer: '.books__viewer'
  }
});
