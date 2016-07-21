import { Component } from '@angular/core';
import { ZipcodeAreaComponent } from './zipcode-area/zipcode-area.component';

@Component({
  moduleId: module.id,
  selector: 'workout-app-app',
  template: `
  <h1>How's the Workout Weather?</h1>
  <app-zipcode-area></app-zipcode-area>
  `,
  styleUrls: ['workout-app.component.css'],
  directives: [ZipcodeAreaComponent]
})
export class WorkoutAppAppComponent {
  title = 'workout-app works!';
}
