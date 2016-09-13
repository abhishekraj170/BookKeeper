import { Component } from '@angular/core';
import { AllbooksComponent } from './allbooks';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AllbooksComponent]
})
export class AppComponent {
  Booktitle = 'My Bookkeeper!';

  
}
