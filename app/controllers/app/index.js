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
		let y= this.store.peekRecord('games',gameId);
		let z= this.store.peekRecord('user',id);
		let x= this.store.createRecord('games',	{
			game_id:gameId,
			user_id: id
		});

		x.save();
	}
	
}
