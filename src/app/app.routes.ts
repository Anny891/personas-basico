
import { Routes } from '@angular/router';
import { LoginComponet } from './login/login.componet';
import { PersonaComponet } from './persona/persona.componet';

export const routes: Routes = [
  { path: 'login', component: LoginComponet },
  { path: 'persona', component: PersonaComponet },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
