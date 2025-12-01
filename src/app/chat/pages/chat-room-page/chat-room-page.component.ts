import { ChatTableComponent } from '../../components/chat-table/chat-table.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ChatRoomService } from '../../services/chat-room.service';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chat-room-page',
  imports: [ChatTableComponent, SearchInputComponent],
  templateUrl: './chat-room-page.component.html',
  styles: ``
})
export class ChatRoomPageComponent {

  chatRoomService = inject(ChatRoomService);
  query = signal('');

  chatroomResource = rxResource(
  {
    params: () => ( {} ),
    stream: ({params}) => this.chatRoomService.searchChatRooms()
  }
)

// capitalResource = rxResource(
//   {
//     params: () => ( {query: this.query()} ),
//     stream: ({params}) => {
//       if(!params.query) return of([]);
//       return  this.countryService.searchByCapital(params.query)
//     }
//   }
// )

}
