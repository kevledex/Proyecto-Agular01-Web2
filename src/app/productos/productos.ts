import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos = [
    { id: 1, nombre: 'Laptop', precio: 1500, stock: 10, imagen: 'https://i.postimg.cc/YqGTVpLK/laptop.png' },
    { id: 2, nombre: 'Teclado', precio: 60, stock: 14, imagen: 'https://i.postimg.cc/T3Zb9cMY/teclado.png' },
    { id: 3, nombre: 'Microfono', precio: 75, stock: 8, imagen: 'https://i.postimg.cc/K8LSKZmr/microfono.png' },
    { id: 4, nombre: 'Audifonos', precio: 50, stock: 0, imagen: 'https://i.postimg.cc/QNbp355v/audifono.png' },
    { id: 5, nombre: 'Mouse Gamer', precio: 25, stock: 25, imagen: 'https://i.postimg.cc/vZ6gc6gw/mouse.png' },
    { id: 6, nombre: 'Monitor 27"', precio: 300, stock: 5, imagen: 'https://i.postimg.cc/Y2nhRxQ9/monitor.png' },
    { id: 7, nombre: 'Cámara Web HD', precio: 85, stock: 12, imagen: 'https://i.postimg.cc/5y69TZ8t/camara.png' },
    { id: 8, nombre: 'Silla Gamer', precio: 220, stock: 4, imagen: 'https://i.postimg.cc/Qdp82gKW/silla.png' },
    { id: 9, nombre: 'Disco Duro Externo 1TB', precio: 65, stock: 8, imagen: 'https://i.postimg.cc/tRw97vhs/discoduro.png' },
    { id: 10, nombre: 'Memoria RAM 16GB', precio: 80, stock: 20, imagen: 'https://i.postimg.cc/SRMFWqcw/ram16.png' },
    { id: 11, nombre: 'Tarjeta Gráfica RTX 4060', precio: 400, stock: 0, imagen: 'https://i.postimg.cc/TPN30dW5/4060.png' },
    { id: 12, nombre: 'Alfombrilla para Mouse XL', precio: 15, stock: 30, imagen: 'https://i.postimg.cc/L6k47B14/alfrombamouse.png' },
    { id: 13, nombre: 'Hub USB-C', precio: 35, stock: 0, imagen: 'https://i.postimg.cc/L5KRQn45/usbhub.png' },
    { id: 14, nombre: 'Gabinete PC ATX RGB', precio: 90, stock: 6, imagen: 'https://i.postimg.cc/3wzHWdG5/gabinete.png' },
    { id: 15, nombre: 'Altavoces Bluetooth', precio: 90, stock: 7, imagen: 'https://i.postimg.cc/Cx1yNjCQ/altavocesjbl.png' },
    { id: 16, nombre: 'Proyector Portátil', precio: 280, stock: 2, imagen: 'https://i.postimg.cc/br8W2bwf/proyector.png' },
    { id: 17, nombre: 'Ventiladores RGB', precio: 45, stock: 18, imagen: 'https://i.postimg.cc/MpcPHtmx/ventiladores.png' },
    { id: 18, nombre: 'Fuente de Poder Corsair 430W', precio: 55, stock: 10, imagen: 'https://i.postimg.cc/k4ywzHq8/fuentedepoder.png' },
  ];
}
