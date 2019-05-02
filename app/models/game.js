import DS from 'ember-data';
const { Model, attr } = DS;

export default class GameModel extends Model {
	@attr("string")   code;
	@attr("string")   status;
	@attr("string")   total_users;
	// get statusLetra() {
	// 	let statusString;
	// 	if(status=1){
	// 		return statusString="created";
	// 	}
	// 	else if(status=2){
	// 		return statusString=""
	// 	}
	// }

}
