import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | actual-game', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:actual-game');
    assert.ok(route);
  });
});
