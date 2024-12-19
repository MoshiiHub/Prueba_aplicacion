import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }

  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      fuerza: 15000,
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      fuerza: 7500,
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      fuerza: 5000,
    },
  ];

  public onNewPersonaje(personaje: Omit<Personaje, 'id'>): void {
    const newPersonaje = { id: uuid(), ...personaje };
    this.personajes.push(newPersonaje);
  }

  public deletePersonajeById(id: string): void {
    this.personajes = this.personajes.filter((personaje) => personaje.id !== id);
  }

  public addPersonaje(personaje: Personaje): void {
    const newPersonaje: Personaje = {
      id: uuid(),
      nombre: personaje.nombre,
      fuerza: personaje.fuerza
    }
    this.personajes.push(newPersonaje);
  }

}
