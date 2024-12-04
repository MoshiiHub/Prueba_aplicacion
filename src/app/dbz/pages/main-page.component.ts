import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone:false

})

export class MainPageComponent {
  public personajes: Personaje[] = [
    {
      nombre: 'Krilin',
      fuerza: 500
    },
    {
      nombre: 'Goku',
      fuerza: 10000
    },
    {
      nombre: 'Vegeta',
      fuerza: 10000
    }


  ];

  public oneNewPersonaje(personaje: Personaje): void {
   this.personajes.push(personaje);

  }

  public manejarEliminacion(personaje: Personaje): void {
    console.log('Eliminado en MainPageComponent:', personaje);

  }
}

