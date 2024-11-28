import { Component,Input } from '@angular/core';
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
}
