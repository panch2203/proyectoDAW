import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GameListComponent extends Component {
  @tracked games = this.args.games || [];
}
