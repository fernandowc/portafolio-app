import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TabNavigationComponent } from '../../components/tab-navigation/tab-navigation.component';


@Component({
  selector: 'app-chat-layout',
  imports: [RouterOutlet, TabNavigationComponent],
  templateUrl: './chat-layout.component.html',
  styles: ``
})
export class ChatLayoutComponent {

}
