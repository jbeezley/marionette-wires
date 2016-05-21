import {Route} from 'backbone-routing';

import ModalService from '../modal/service';
import LoginView from './view';

export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  render(params) {
    var view = new LoginView({
      title: 'Enter your username and password'
    });
    ModalService.request('form', view, {
      title: 'Enter your username and password'
    }).then(response => {
      console.log(response);
    });
  }
});
