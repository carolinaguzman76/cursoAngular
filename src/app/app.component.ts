import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'HolaMundo';
 toogle = true;

 listEstudiantes: any[] = [
   {nombre: 'Lucas', estado: 'No aprobado'},
   {nombre: 'Maria', estado: 'Aprobado'},
   {nombre: 'Martin', estado: 'No aprobado'},
   {nombre: 'Juan', estado: 'Promocionado'},
   {nombre: 'Isabel', estado: 'No aprobado'}
 ];

 btnToogle(): void {
this.toogle = !this.toogle;
 }
}
