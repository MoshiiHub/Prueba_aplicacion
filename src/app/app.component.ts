import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { CentroEducativoComponent } from './centro-educativo/centro-educativo.component';
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { HeroesModule } from './heroes/heroes.module';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContadorComponent, CentroEducativoComponent, ListadoCentrosComponent,
  HeroesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-bases';
}

