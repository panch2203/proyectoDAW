import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action} from "@ember/object";

export default class GameListComponent extends Component {
  @tracked games = this.args.games || [];
  @tracked user_id="3";
  @action onChange(index){
  	this.user_id=index;
  	console.log(index);
  }
  @action async onJoin(gameId){
  		console.log(gameId);
		await this.args.handleJoin(this.user_id, gameId);
	}
}
