import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Empresa {
  obtenerInformacion() {
    return {
      conocenos: {
        titulo: 'Conócenos',
        descripcion: 'Somos una tienda especializada en computación, gaming y accesorios tecnológicos, nacida para equipar tu setup con lo mejor del mercado. Desde laptops y tarjetas gráficas hasta periféricos, sillas gamer y equipos de streaming, seleccionamos cuidadosamente cada producto para ofrecerte rendimiento, calidad y los mejores precios.',
        imagen: 'https://i.postimg.cc/0jRJsY01/nosotros.png',
        alt: 'Personas reunidas'
      },
      mision: {
        titulo: 'Misión',
        descripcion: 'En Urban, ofrecemos componentes y periféricos de computación de alta calidad —laptops, tarjetas gráficas, memorias RAM, teclados, mouses y monitores— junto a accesorios gamer y de streaming como sillas, cámaras web, luces LED y tabletas digitalizadoras. Nos dedicamos a potenciar la productividad, el gaming y el entretenimiento de nuestros clientes con un servicio de compra cercano y confiable.',
        imagen: 'https://i.postimg.cc/sgqjqVcR/mision.png',
        alt: 'Trabajadores configurando y empaquetando pedidos en tienda.'
      },
      vision: {
        titulo: 'Visión',
        descripcion: 'En Urban, aspiramos a ser la tienda de referencia en tecnología, gaming y streaming, conectando a nuestros clientes con los componentes y accesorios más actuales del mercado. Buscamos acompañar a gamers, creadores de contenido y profesionales en el armado de su setup ideal, con productos confiables y de alto rendimiento.',
        imagen: 'https://static.vecteezy.com/system/resources/previews/008/551/694/non_2x/abstract-a-robotic-hand-and-a-human-hand-join-forces-to-create-new-innovations-coexistence-of-humans-and-robots-artificial-intelligence-on-hi-tech-blue-future-background-illustrations-vector.jpg',
        alt: 'Mano humana junto a robotica'
      }
    };
  }
}

