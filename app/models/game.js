import DS from 'ember-data';
const { Model, attr , hasMany} = DS;

export default class GameModel extends Model {
	@attr("string")   code;
	@attr("number")   status;
	@attr("number")   total_users;
	@attr("number")   winner_id;
	@attr("string")   winner_name;
	@hasMany('plays')	plays;

	get statusLetra() {
		let statusString='';
		if(this.status===1){
			statusString="CREATED"
		}
		else if(this.status===2){
			statusString="STARTED";
		}
		else if(this.status===3){
			statusString="COMPLETED";
		}
		return statusString;
	}

	get isWinner() {
		let stringWinner=this.winner_name;
		if(!this.winner_name){
			stringWinner="No hay Ganador"
		}
		return stringWinner;
	}

}
