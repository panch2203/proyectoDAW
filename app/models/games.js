import DS from 'ember-data';
const { Model, attr } = DS;

export default class GamesModel extends Model {
	@attr('string') code;
	@attr('string') status;
	@attr('number') total_users;	
	
}
