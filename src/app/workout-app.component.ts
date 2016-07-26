import { Component, OnInit } from '@angular/core';
import { ZipcodeAreaComponent } from './zipcode-area/zipcode-area.component';
import { ngSelectLocation, EmitterService } from './ng2-location/browser-location.component';


@Component({
  moduleId: module.id,
  selector: 'workout-app-app',
  template: `
  <h1>How's the Workout Weather?</h1>
  <app-zipcode-area></app-zipcode-area>
  <ngLocation></ngLocation>
  `,
  styleUrls: ['workout-app.component.css'],
  directives: [ZipcodeAreaComponent, ngSelectLocation],
  providers: [EmitterService]
})

export class WorkoutAppAppComponent implements OnInit {
   public selectedCity:any;
 
 constructor(private EmitterService: EmitterService) {
 window.localStorage.removeItem('city');
}

ngOnInit(){
 this.selectedCity = localStorage.getItem('city');
 EmitterService.get('selectedCity').subscribe(data => {
 this.selectedCity = data;
 localStorage.setItem('city', data);
 });
 }
}
