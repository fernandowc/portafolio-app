import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { PortafolioTableComponent } from '../../components/portafolio-table/portafolio-table.component';

@Component({
  selector: 'app-users-page',
  imports: [SearchInputComponent],
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent { }
