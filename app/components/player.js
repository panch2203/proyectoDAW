import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {action} from "@ember/object";

export default class PlayerComponent extends Component {
  @service('user_selected') user_global;
  @tracked user_info;
  @tracked game_id;
  @tracked choice;
  @action async setUser(){
    await this.args.getUser(id);
  }
  @action setIds(user, game){
  	this.game_id=game;
  }
  @action onChange(index){
  	this.choice=index;
  	console.log(this.choice);
  }
  @action async onSubmit(user, game, id){
  	await this.args.handleSubmit(user, game, id, this.choice);
  }
}
