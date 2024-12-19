import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  standalone: false
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  /*Injectable para acceder a servicios tiene que ser con get y set.
*/
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  // onDeletePersonaje(id: string): void {
  //   this.dbzService.deletePersonajeById(id);
  // }

  onNewPersonaje(personaje:Personaje){
    this.dbzService.addPersonaje(personaje);
  }

  eliminarPorId(id: string): void {
    this.dbzService.deletePersonajeById(id);
  }

  agregarPersonaje(nuevoPersonaje: { nombre: string; fuerza: number }) {
    this.dbzService.onNewPersonaje(nuevoPersonaje);
  }


}


