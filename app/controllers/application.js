import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class ApplicationController extends Controller {
	@action onSubmit(){
		let x= this.store.createRecord("games",	{
			status:"Pending", 
		});
		x.save();
	}
}
