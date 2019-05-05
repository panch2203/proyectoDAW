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
  @action onSubmit(id, game_id, gid, choice){
		console.log(choice+" made it! " + id +" "+ game_id + " "+ gid);
		
		this.store.findRecord('play', gid).then((player)=>{
				player.set("choice", choice);		
				player.save();	
			});

	}
	@action onClick(game_id){
		console.log(game_id);
		alert("Game has started");
		this.store.findRecord('game', game_id).then((game)=>{
				game.set("status", 2);		
				game.save();	
			});
		
	}
}
