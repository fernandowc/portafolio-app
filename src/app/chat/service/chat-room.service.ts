import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatRoom {
  id: number;
  name: string;
  description: string | null;
  isPrivate: boolean;
  user1Id: number | null;
  user2Id: number | null;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class ChatRoomService {
  private apiUrl = 'http://localhost:8080/api/messages/chat-room';

  constructor(private http: HttpClient) {}

  getChatRooms(): Observable<ChatRoom[]> {
    return this.http.get<ChatRoom[]>(this.apiUrl);
  }
}
