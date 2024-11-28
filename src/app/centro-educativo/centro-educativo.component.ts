import { Component } from '@angular/core';

interface Instituto {
  centroEducativo: string;
  localidad: string;
  centro: string;
  familiaProfesional: string[];
  logo: string;
}

const centroA: Instituto = {
  centroEducativo: 'IES Playamar',
  localidad: 'Torremolinos',
  centro: 'IES  PLAYAMAR',
  familiaProfesional: ['Informatica y Comunicaciones', 'Transporte y Mantenimiento'],
  logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'
}

const centroB: Instituto = {
  centroEducativo: 'IES Jacaranda',
  localidad: 'Churriana',
  centro: 'IES JACARANDA',
  familiaProfesional: ['Hosteleria y Turismo'],
  logo: 'https://hosteleriajacaranda.es/wp-content/uploads/2021/09/logo_iesjacaranda.png'
}

@Component({
  selector: 'app-centro-educativo',
  standalone: true,
  imports: [],
  templateUrl: './centro-educativo.component.html',
  styleUrl: './centro-educativo.component.css'
})
export class CentroEducativoComponent {

  title = "T 4.2 Datos del IES Playamar / Jacaranda";

  centroActual: Instituto = centroA;

  cambiarCentro(instituto: Instituto) {
    if (instituto === centroA) {
      this.centroActual = centroB;
    } else {
      this.centroActual = centroA;
    }

  }



}
