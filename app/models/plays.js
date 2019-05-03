import DS from 'ember-data';
const { Model, attr,  belongsTo , hasMany } = DS;

export default class PlaysModel extends Model {
  @attr('number') user_id;
  @attr('number') game_id;
  @attr('number') choice;
  @belongsTo('game') game;
  @belongsTo('user') user;
}
