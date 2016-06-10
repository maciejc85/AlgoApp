import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AlgoAppAppComponent } from '../app/algo-app.component';

beforeEachProviders(() => [AlgoAppAppComponent]);

describe('App: AlgoApp', () => {
  it('should create the app',
      inject([AlgoAppAppComponent], (app: AlgoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'algo-app works!\'',
      inject([AlgoAppAppComponent], (app: AlgoAppAppComponent) => {
    expect(app.title).toEqual('algo-app works!');
  }));
});
