import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public nombre: string = 'Goku';
  public edad: number = 45;
  private nombrePrivado = 'Kakaroto';

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public nombreHeroe(): string {
    return `${this.nombre}`;
  }

  public nombrePri(): string {
    return `${this.nombrePrivado}`;
  }

  public edadHeroe(): number {
    return this.edad;
  }

  public cambiarNombre(): void {
    this.nombre = 'Vegeta';
  }

  public cambiarEdad(): void {
    this.edad = 30;
  }

  public resetear(): void {
    this.nombre = 'Goku';
    this.edad = 45;
  }
}
