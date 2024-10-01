import { Component } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {phone} from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  
  selector: 'app-home-testing',
  templateUrl: './home-testing.component.html',
  styleUrl: './home-testing.component.css'
})
export class HomeTestingComponent {

  phone = faPhone;
}
