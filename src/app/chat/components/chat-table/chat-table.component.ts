import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomService, ChatRoom } from '../../service/chat-room.service';

@Component({
  selector: 'chat-table',
  imports: [CommonModule],
  templateUrl: './chat-table.component.html',
  styles: ``
})
export class ChatTableComponent implements OnInit {
  chatRooms: ChatRoom[] = [];

  constructor(private chatRoomService: ChatRoomService) {}

  ngOnInit() {
    this.chatRoomService.getChatRooms().subscribe({
      next: (rooms) => this.chatRooms = rooms,
      error: (err) => console.error('Error cargando chat rooms', err)
    });
  }
}
