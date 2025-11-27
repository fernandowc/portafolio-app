import { Component, input, output } from '@angular/core';

@Component({
  selector: 'chat-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();

}
