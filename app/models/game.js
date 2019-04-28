import DS from 'ember-data';
const { Model, attr } = DS;

export default class GameModel extends Model {
	@attr("number")   codigo;
	@attr("string")   status;
	@attr("number")   jugadores;

	
}

