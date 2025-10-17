import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-chat-room-page',
  imports: [SearchInputComponent],
  templateUrl: './chat-room-page.component.html',
})
export class ChatRoomPageComponent {

  onSearch(value: string) {
    console.log({ value });
  }
}
