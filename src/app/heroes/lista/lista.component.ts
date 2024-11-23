import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public nombreHeroes: string[] = ['Goku', 'Vegeta', 'Trunks', 'Piccolo', 'Gohan', 'Broly', 'krillin'];

  public heroeBorrado?: string;

  public borrarHeroe(): void {
    this.heroeBorrado = this.nombreHeroes.pop();
    if (this.heroeBorrado) {
      this.heroeBorrado='heroe borrado: '+ this.heroeBorrado;
    }if(this.nombreHeroes.length === 0) {
      this.heroeBorrado = 'No hay heroe para borrar';
    }
  }
}
