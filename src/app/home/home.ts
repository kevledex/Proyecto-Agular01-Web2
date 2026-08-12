import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../service/producto';
import { Empresa } from '../service/empresa';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private productoService = inject(Producto);
  private empresaService = inject(Empresa);

  productos: any[] = [];
  informacion = this.empresaService.obtenerInformacion();

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos = data.slice(6, 10);
    });
  }
}