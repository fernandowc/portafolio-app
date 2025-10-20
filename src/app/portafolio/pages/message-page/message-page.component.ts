import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { PortafolioTableComponent } from '../../components/portafolio-table/portafolio-table.component';

@Component({
  selector: 'app-message-page',
  imports: [SearchInputComponent, PortafolioTableComponent],
  templateUrl: './message-page.component.html',
})
export class MessagePageComponent { }
