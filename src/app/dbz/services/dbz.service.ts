import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private personajes = [
    { nombre: 'Goku', poder: 10000 },
    { nombre: 'Vegeta', poder: 500 },
  ];

  getPersonajes() {
    return this.personajes;
  }

  agregarPersonaje(personaje: { nombre: string; poder: number }) {
    this.personajes.push(personaje);
  }
}

