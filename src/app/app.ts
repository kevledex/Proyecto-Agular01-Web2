import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { Productos } from './productos/productos';

@Component({
  selector: 'app-root',
  imports: [Header, Nav, Footer, Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-angular01');
}
