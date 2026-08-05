import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Productos } from './productos/productos';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Contacto } from './contacto/contacto';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Productos, Home, Nosotros, Contacto, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-angular01');
}
