import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app01';
  public edadUno: string = '';
  public edadDos: string = '';
  public promedio: number | undefined;
  public sumatoria: number | undefined;

  public Calcular(event: any): void{
    console.log(event);
    if(!isNaN(parseInt(this.edadUno)) && !isNaN(parseInt(this.edadDos))){
      this.sumatoria = parseInt(this.edadUno) + parseInt(this.edadDos);
      this.promedio = this.sumatoria/2
    } else {
      this.Limpiar(event);
    }
  }

  public Limpiar(event: any): void{
      console.log(event);
      this.edadUno = "";
      this.edadDos = "";
      this.promedio = undefined;
      this.sumatoria = undefined;
  }

}
