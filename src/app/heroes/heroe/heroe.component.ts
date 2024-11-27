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
  public logo: string = "";

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

  public actualizarImagen(): void {
    this.logo =
      this.nombre === 'Goku'
        ? 'https://media.minutouno.com/p/957cdf129df00cff51ae490fc98bc6ad/adjuntos/150/imagenes/041/499/0041499750/goku.jpg'
        : 'https://cdn.dashfight.com/9fb2a7156ec9db6a46b0ca1daa8d87293969756e.png';
  }
}

