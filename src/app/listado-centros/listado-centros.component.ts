import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Instituto {
  centroEducativo: string;
  localidad: string;
  centro: string;
  familiaProfesional: string[];
  logo: string;
}


@Component({
  selector: 'app-listado-centros',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './listado-centros.component.html',
  styleUrl: './listado-centros.component.css'
})
export class ListadoCentrosComponent {
  public title = "T4.3 Listado de centros";
  centros: Instituto[] = [
    {
      centroEducativo: 'IES Playamar',
      localidad: 'Torremolinos',
      centro: 'IES  PLAYAMAR',
      familiaProfesional: ['Informática y Comunicaciones', 'Transporte y Mantenimiento'],
      logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'
    },
    {
      centroEducativo: 'IES Jacaranda',
      localidad: 'Churriana',
      centro: 'IES JACARANDA',
      familiaProfesional: ['Hostelería y Turismo'],
      logo: 'https://pbs.twimg.com/profile_images/3059231666/21dd362313c922734bf3297b69b2da14_400x400.jpeg'
    },
    {
      centroEducativo: 'IES Ben Gabirol',
      localidad: 'Malaga',
      centro: 'IES BEN GABIROL',
      familiaProfesional: ['Integración social', 'Animación Sociocultural'],
      logo: 'https://pbs.twimg.com/profile_images/3240920230/b69e74debe8c1de9da94c92aeef980a9_400x400.jpeg'
    },
    {
      centroEducativo: 'IES Sierra Bermeja',
      localidad: 'Ciudad Jardin',
      centro: 'IES SIERRA BERMEJA',
      familiaProfesional: ['Técnico Superior en Óptica de Anteojería', 'Técnico Superior en Higiene Bucodental'],
      logo: 'https://www.alianzafpdual.es/wp-content/uploads/2022/01/IES-SIerra-Bermeja_logo.png'
    }
  ];

  pila: Instituto[] = [];
  posicionActual: number = 0;

  siguienteCentro(): void {
    if (this.posicionActual < this.centros.length - 1) {
      this.posicionActual++;
    }
  }

  anteriorCentro(): void {
    if (this.posicionActual > 0) {
      this.posicionActual--;
    }
  }

  eliminarCentro(): void {
    const centroEliminado = this.centros.splice(this.posicionActual, 1)[0];
    this.pila.push(centroEliminado);
    // Si eliminamos el último elemento, retrocedemos la posición.
    if (this.posicionActual >= this.centros.length) {
      this.posicionActual = this.centros.length - 1;
    }
  }

  insertarCentro(): void {
    if (this.pila.length > 0) {
      const centroInsertado = this.pila.pop()!;
      this.centros.splice(this.posicionActual, 0, centroInsertado);
    }
  }

  mostrarPila(): string {
    return this.pila.map(centro => centro.centro).join(", ");
  }

  obtenerCentroActual(): Instituto {
    return this.centros[this.posicionActual];
  }
}
