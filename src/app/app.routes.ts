import { Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './modal/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  /*{ path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },*/
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'modal'
  },
  {
    path: 'pagenotfound',
    component: PageNotFoundComponent
  }
]
