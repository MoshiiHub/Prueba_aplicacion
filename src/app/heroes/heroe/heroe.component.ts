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
  public logo: string = "https://preview.redd.it/tnpjnvyab2z31.png?auto=webp&s=9011190259be1e8693672248925e5cca292771fe";

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
    if (this.nombre === 'Vegeta') {
      this.logo = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc9ffd43-db87-475c-a8f0-0e57fc3d5c43/d7m2z0t-9781b4e9-58ad-4215-bdc6-5b780967b7de.png/v1/fit/w_500,h_500,q_70,strp/dbz__majin_vegeta_skype_avatar_by_mikedarko_d7m2z0t-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYmM5ZmZkNDMtZGI4Ny00NzVjLWE4ZjAtMGU1N2ZjM2Q1YzQzXC9kN20yejB0LTk3ODFiNGU5LTU4YWQtNDIxNS1iZGM2LTViNzgwOTY3YjdkZS5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.o1N2qOELNxAsruE7uQJLZC5g3js2Tn9eyjNwjdIoPO4';
    } else {
      this.logo = 'https://preview.redd.it/tnpjnvyab2z31.png?auto=webp&s=9011190259be1e8693672248925e5cca292771fe';
    }
  }
}

