import { Component } from '@angular/core';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-login',
  // exportAs: 'modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ModalComponent {

  // modalClose( $event ) {
  //   console.log($event); // { submitted: true }
  // }

}
