import { Routes } from '@angular/router';
import { LoginComponet } from './login/login.componet';

export const routes: Routes = [
  { path: 'login', component: LoginComponet },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];