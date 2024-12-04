import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  standalone:false
})
export class ListaComponent {

  @Input('Milista')
  public listaPersonajes: Personaje[] = [{
    nombre:'Trunks',
    fuerza: 7000
   }];

  @Output()
  public personajeEliminado: EventEmitter<Personaje> = new EventEmitter();

  // Para eliminar un personaje
  public borrarPersonaje(index: number): void {
    const eliminado = this.listaPersonajes[index];
    this.listaPersonajes.splice(index, 1);
    console.log('Personaje eliminado:', eliminado);
    this.personajeEliminado.emit(eliminado);
  }
}
