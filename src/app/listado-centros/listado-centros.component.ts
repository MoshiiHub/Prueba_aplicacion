import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-centros',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './listado-centros.component.html',
  styleUrl: './listado-centros.component.css'
})
export class ListadoCentrosComponent {
  public title = "T4.3 Listado de centros";

  listadoCentro: string[] = [
    'Centro 1',
    'Centro 2',
    'Centro 3',
    'Centro 4',
    'Centro 5',
    'Centro 6',
    'Centro 7',
    'Centro 8',
    'Centro 9',
    'Centro 10',
  ];

  eliminarCentro(): void {
    if (this.listadoCentro.length > 0) {
      this.listadoCentro.pop();
    } else {
      alert("No hay centros para eliminar");
    }
  }
}
