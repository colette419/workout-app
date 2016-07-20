import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WorkoutAppAppComponent } from '../app/workout-app.component';

beforeEachProviders(() => [WorkoutAppAppComponent]);

describe('App: WorkoutApp', () => {
  it('should create the app',
      inject([WorkoutAppAppComponent], (app: WorkoutAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'workout-app works!\'',
      inject([WorkoutAppAppComponent], (app: WorkoutAppAppComponent) => {
    expect(app.title).toEqual('workout-app works!');
  }));
});
