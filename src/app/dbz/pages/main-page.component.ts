import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})
export class MainPageComponent {
  constructor(public DbzService: DbzService) {}

  get personajes() {
    return this.DbzService.personajes;
  }

  eliminarPorId(id: string): void {
    this.DbzService.deletePersonajeById(id);
  }

  agregarPersonaje(nuevoPersonaje: { nombre: string; fuerza: number }) {
    this.DbzService.onNewPersonaje(nuevoPersonaje);
  }
}


