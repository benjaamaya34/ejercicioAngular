import { Component } from '@angular/core';
import { Producto } from './interfaces/interfaz-producto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejercicioAngular';

  item : Producto[] = [
    {nombre: "Fan cooler", 
    costo: "$ 1200"},
    {nombre: "Gabinete kit BRB",
    costo: "$ 25000"},
    {nombre:"Pasta termica Artik MX-4",
    costo: "$ 5000"}
  ]

  verLista = true;

  mostrarLista(){
    this.verLista = !this.verLista;
  }
  }
