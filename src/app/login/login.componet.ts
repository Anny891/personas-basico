
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.componet.html',
  styleUrl: './login.componet.css'
})
export class LoginComponet {
  usuario = '';
  clave = '';
  sesionIniciada = false;

  iniciarSesion() {
    if (this.usuario === 'admin' && this.clave === '123456') {
      localStorage.setItem('sesionBasica', 'si');
      this.sesionIniciada = true;
      this.clave = '';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionBasica');
    this.sesionIniciada = false;
    this.usuario = '';
    this.clave = '';
  }
}

