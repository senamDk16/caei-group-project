import { Routes } from '@angular/router';
import { ClientComponent } from './feature/clients/clients';
import { App } from './app';

export const routes: Routes = [

  {
    path: "clients",
    component: ClientComponent
  }
];
