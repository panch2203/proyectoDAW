import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {action} from "@ember/object";

export default class PlayerComponent extends Component {
  @service('user_selected') user_global;
  @tracked user_info;

  @action async setUser(id){
    await this.args.getUser(id);
    this.user_info = this.args.user;
  }
}
