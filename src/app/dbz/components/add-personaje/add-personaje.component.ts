import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  @Output()
  public oneNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    id: '',
    nombre: '',
    fuerza: 0
  };

  public addPersonaje(): void {
    if (this.personaje.nombre.trim().length === 0) return;

    console.log('Agregando personaje:', this.personaje);
    this.oneNewPersonaje.emit(this.personaje);

    // Resetea el formulario
    this.personaje = {
      id: '',
      nombre: '',
      fuerza: 0,
    };
  }

}

