import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRoomService } from '../../services/chat-room.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'register-chatroom-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-chatroom-page.component.html',
  styles: ``
})
export class RegisterChatroomPageComponent {

  chatRoomForm: FormGroup;

  successAlert = signal(false);
  errorAlert = signal<string | null>(null);

  constructor(private fb: FormBuilder, private chatRoomService: ChatRoomService) {
    this.chatRoomForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      type: ['PUBLIC', Validators.required],
      user1: [''],
      user2: ['']
    });
  }

  onSubmit() {
    if (this.chatRoomForm.invalid) {
      this.chatRoomForm.markAllAsTouched();
      return;
    }

    const payload = {
      name: this.chatRoomForm.value.name,
      description: this.chatRoomForm.value.description,
      isPrivate: this.chatRoomForm.value.type === 'PRIVATE',
      user1Id: this.chatRoomForm.value.user1,
      user2Id: this.chatRoomForm.value.user2,
      createdAt: new Date().toISOString()
    };

    this.chatRoomService.saveChatRoom(payload).subscribe({
      next: (resp) => {
        console.log('ChatRoom creado', resp);

        this.successAlert.set(true);
        this.errorAlert.set(null);

        this.chatRoomForm.reset();

        setTimeout(() => this.successAlert.set(false), 4000); // ocultar en 4s
      },
      error: (err) => {
        console.error('Error:', err);
        this.errorAlert.set('No se pudo crear el ChatRoom. Intenta nuevamente. ' + err.message);
        setTimeout(() => this.errorAlert.set(null), 4000); // ocultar en 4s
      }
    });
  }

}
