import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() modalClose = new EventEmitter();

  constructor( private router : Router ) {}

  closeModal( $event ) {
    this.router.navigate([{outlets: {modal: null}}]);
    //this.modalClose.next($event);
    this.modalClose.emit($event);
  }

}
