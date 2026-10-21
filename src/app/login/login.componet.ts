
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.componet.html',
  styleUrl: './login.componet.css'
})
export class LoginComponet {
  usuario = '';
  clave = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario === 'admin' && this.clave === '123456') {
      localStorage.setItem('sesionBasica', 'si');
      this.router.navigate(['/persona']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
