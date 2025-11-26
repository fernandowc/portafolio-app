import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'register-chatroom-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-chatroom-page.component.html',
  styles: ``
})
export class RegisterChatroomPageComponent {

  chatRoomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.chatRoomForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      type: ['PUBLIC', Validators.required],
      createdBy: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.chatRoomForm.invalid) {
      this.chatRoomForm.markAllAsTouched();
      return;
    }

    console.log('ChatRoom creado:', this.chatRoomForm.value);
  }

}
