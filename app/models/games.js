import DS from 'ember-data';
const { Model, attr } = DS;

export default class GamesModel extends Model {
	@attr('number') codigo;
	@attr('string') status;
	@attr('string') jugadores;
}
