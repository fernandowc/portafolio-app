import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ChatRoom } from '../interfaces/ChatRoom';
import { ChatRoomMapper } from '../mapper/chatroom-mapper';
import { ChatRoomCreateRequest } from '../interfaces/ChatRoomCreateRequest';

const API_URL = 'http://localhost:8080/api';


@Injectable({ providedIn: 'root' })
export class ChatRoomService {
  private http = inject(HttpClient);

  searchChatRooms(): Observable<ChatRoom[]> {
    return this.http.get<ChatRoom[]>(`${API_URL}/messages/chat-room`).pipe(
      map((resp) => ChatRoomMapper.mapRestChatroomArrayToChatRoomArray(resp)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(
          () => new Error(`No se pudo obtener chatRooms`)
        );
      })
    );
  }

  saveChatRoom(chatRoom: ChatRoomCreateRequest): Observable<ChatRoom> {
    return this.http.post<ChatRoom>(`${API_URL}/messages/chat-room`, chatRoom).pipe(
      map((resp) => ChatRoomMapper.mapRestChatRoomToChatRoom(resp)),
      catchError((error) => {
        console.error('Error creando el chatRoom', error);

        return throwError(() => new Error('No se pudo crear el chatRoom'));
      })
    );
  }

}
