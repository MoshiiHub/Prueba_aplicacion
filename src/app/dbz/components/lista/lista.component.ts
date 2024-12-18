import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  standalone: false
})
export class ListaComponent {
  @Input('Milista')
  public listaPersonajes: Personaje[] = [];

  @Output()
  public personajeEliminado: EventEmitter<string> = new EventEmitter();

  public onDeletePersonaje(id: string): void {
    const eliminado = this.listaPersonajes.find(personaje => personaje.id === id);
    if (eliminado) {
      console.log('Personaje eliminado:', eliminado.nombre);
      this.personajeEliminado.emit(id);
    } else {
      console.log('No se encontró un personaje con el ID:', id);
    }
  }
}
