import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'app-portafolio-layout',
  imports: [ RouterOutlet, TopMenuComponent],
  templateUrl: './PortafolioLayout.component.html',
})
export class PortafolioLayoutComponent { }
