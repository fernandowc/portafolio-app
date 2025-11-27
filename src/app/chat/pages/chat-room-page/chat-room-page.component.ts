import { Component } from '@angular/core';
import { ChatTableComponent } from '../../components/chat-table/chat-table.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-chat-room-page',
  imports: [ChatTableComponent, SearchInputComponent],
  templateUrl: './chat-room-page.component.html',
  styles: ``
})
export class ChatRoomPageComponent {

}
