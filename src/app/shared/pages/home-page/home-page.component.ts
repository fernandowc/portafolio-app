import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  //sloganTitle = 'Aprende como trabajan los equipos tech de banca, seguros y más.';
  //sloganSub = 'Crea APIs seguras, despliega microservicios y postula con proyectos reales en tu portafolio.';

  // Carrusel de logos (usa tus propios SVG/PNG en assets/logos)
  logos = [
    { alt: 'BBVA', src: 'assets/logos/bbva.svg' },
    { alt: 'BCP', src: 'assets/logos/bcp.svg' },
    { alt: 'Interbank', src: 'assets/logos/interbank.svg' },
    { alt: 'Pichincha', src: 'assets/logos/pichincha.svg' },
    { alt: 'Scotiabank', src: 'assets/logos/scotiabank.svg' },
    { alt: 'Pacífico Seguros', src: 'assets/logos/pacifico.png' },
    { alt: 'Rímac', src: 'assets/logos/rimac.svg' },
    { alt: 'Mapfre', src: 'assets/logos/mapfre.png' },
    { alt: 'Sura', src: 'assets/logos/sura.png' },
  ];

  // Rutas/escuelas destacadas (cards tipo EDteam)
  tracks = [
    {
      tag: 'Ruta',
      title: 'Full-Stack Angular + Java',
      desc: 'Spring Boot, REST, JWT, Angular, interceptors, guards y patrones.',
      chip: 'Banca',
      color: 'from-primary/20 to-primary/5',
      emoji: '🟦'
    },
    {
      tag: 'Ruta',
      title: 'React + Java',
      desc: 'React Query/Next, auth, tablas, testing y consumo de APIs seguras.',
      chip: 'Alternativa',
      color: 'from-secondary/20 to-secondary/5',
      emoji: '🟣'
    },
    {
      tag: 'Módulo',
      title: 'Integraciones & Kafka',
      desc: 'Eventos, producers/consumers, retry y circuit breaker.',
      chip: 'Mensajería',
      color: 'from-warning/20 to-warning/5',
      emoji: '⚡'
    },
    {
      tag: 'Módulo',
      title: 'Seguridad OAuth2/JWT',
      desc: 'Keycloak/Spring Security, roles, auditoría y mejores prácticas.',
      chip: 'Seguridad',
      color: 'from-accent/20 to-accent/5',
      emoji: '🔐'
    },
  ];

 }
