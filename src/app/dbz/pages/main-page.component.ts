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
      fuerza: 1000
    },
    {
      nombre: 'Goku',
      fuerza: 10000
    },
    {
      nombre: 'Vegeta',
      fuerza: 1000
    }


  ];

}

