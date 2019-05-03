import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {action} from "@ember/object";

export default class AppActualGameController extends Controller {
  @service('user_selected') user_global;
  @tracked user;

  @action getUser(id){
    this.user= this.store.peekRecord('user', id);    
  }
}
