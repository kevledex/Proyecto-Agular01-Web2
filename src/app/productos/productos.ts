import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    { id: 1, nombre: 'Laptop', precio: 1500, stock: 10 },
    { id: 2, nombre: 'Teclado', precio: 60, stock: 14 },
    { id: 3, nombre: 'Microfono', precio: 75, stock: 8 },
    { id: 4, nombre: 'Audifonos', precio: 50, stock: 0 },
    { id: 5, nombre: 'Mouse Óptico', precio: 25, stock: 25 },
    { id: 6, nombre: 'Monitor 27"', precio: 300, stock: 5 },
    { id: 7, nombre: 'Cámara Web HD', precio: 85, stock: 12 },
    { id: 8, nombre: 'Silla Gamer', precio: 220, stock: 4 },
    { id: 9, nombre: 'Disco Duro Externo 1TB', precio: 65, stock: 8 },
    { id: 10, nombre: 'Memoria RAM 16GB', precio: 80, stock: 20 },
    { id: 11, nombre: 'Tarjeta Gráfica RTX 4060', precio: 400, stock: 0 },
    { id: 12, nombre: 'Alfombrilla para Mouse XL', precio: 15, stock: 30 },
    { id: 13, nombre: 'Hub USB-C', precio: 35, stock: 0 },
    { id: 14, nombre: 'Base Refrigerante para Laptop', precio: 30, stock: 9 },
    { id: 15, nombre: 'Altavoces Bluetooth', precio: 90, stock: 7 },
    { id: 16, nombre: 'Proyector Portátil', precio: 280, stock: 2 },
    { id: 17, nombre: 'Luz LED Anillo para Streaming', precio: 40, stock: 15 },
    { id: 18, nombre: 'Tableta Digitalizadora', precio: 110, stock: 6 },
    { id: 19, nombre: 'Cable HDMI 2.1', precio: 12, stock: 40 },
    { id: 20, nombre: 'Regleta con Protección de Picos', precio: 20, stock: 11 },
    { id: 21, nombre: 'Tarjeta Gráfica Nvidia RTX 5060', precio: 500, stock: 2},
    { id: 22, nombre: 'Mouse Logitech Gamer', precio: 80, stock: 5}
  ];
}
