import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";



export default class JuegosActivosComponent extends Component {

	

	@action
	onSubmit () {
		this.args.handleSubmit();
			console.log("ok");
	}

}
