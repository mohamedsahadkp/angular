import { Component } from '@angular/core';

@Component({
  selector : 'course',
  template : '<h2>{{ title + " --- "+ getDescription() }}</h2>'
})

export class CoursesComponent {
  title = "My Course"

  getDescription = () => {
     return "my course description"
  }
}
