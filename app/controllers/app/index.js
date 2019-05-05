import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
export default class AppIndexController extends Controller {
	@action onSubmit(){
		console.log("created");
		let x= this.store.createRecord("games",	{
			status:"Pending",
		});
		x.save();
	}

	@action onJoin(id,gameId){
		console.log(id, gameId);
		let y= this.store.createRecord('play',	{
			game_id:gameId,
			user_id: id,
		});

		y.save();
	}

	
}
