import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppActualGameRoute extends Route {
  model(params) {
    return hash({
      game: this.store.findRecord('game', params.game_id),

    })
  }
}
