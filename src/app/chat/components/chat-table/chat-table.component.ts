import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ChatRoom } from '../../interfaces/ChatRoom';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'chat-table',
  imports: [],
  templateUrl: './chat-table.component.html',
  styles: ``
})
export class ChatTableComponent {

  chatrooms = input.required<ChatRoom[]>();

  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
