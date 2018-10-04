import { Component } from '@angular/core';

@Component({
  selector : 'course',
  template : `
      <h2>{{ title }}</h2>
      <h4>{{ getDescription() }}</h4>
      <ul>
        <li *ngFor="let course of courses"> {{ course }} 
        </li>
      </ul>
  `
})

export class CoursesComponent {
  title = "My Course";
  courses = ["Course1", "Course2", "Course3"];

  getDescription = () => {
     return "my course description"
  }
}
