
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Persona {
  id: number;
  dni: string;
  nombre: string;
  fechaNacimiento: string;
}

@Component({
  selector: 'app-persona',
  imports: [],
  templateUrl: './persona.componet.html',
  styleUrl: './persona.componet.css'
})
export class PersonaComponet {
  personas: Persona[] = [];

  constructor(private router: Router) {
    if (localStorage.getItem('sesionBasica') !== 'si') {
      this.router.navigate(['/login']);
      return;
    }

    const datos = localStorage.getItem('personasBasico');
    if (datos !== null) {
      this.personas = JSON.parse(datos);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionBasica');
    this.router.navigate(['/login']);
  }
}
