import DS from 'ember-data';
const { Model, attr  } = DS;

export default class UserModel extends Model {
  @attr("string")   code;
	@attr("string")   status;
	@attr("string")   total_users;
}
