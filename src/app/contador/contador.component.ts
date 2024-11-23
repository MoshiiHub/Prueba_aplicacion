import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  title="T4.1_Contador";
  public contador:number=0;

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  resetear(){
    this.contador=0;
  }

}
