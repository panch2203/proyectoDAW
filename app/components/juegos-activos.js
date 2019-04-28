import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";



export default class JuegosActivosComponent extends Component {
	@tracked games=[
		{code: 1234, status:"Pending", players:1},
		{code: 6734, status:"Pending", players:0},

	];

	@action
	onSubmit () {
		this.args.handleSubmit();
			console.log("ok");
	}

}
