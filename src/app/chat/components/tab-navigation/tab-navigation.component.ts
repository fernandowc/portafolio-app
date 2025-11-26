import { Component } from '@angular/core';
import { RegisterChatroomPageComponent } from "../../pages/register-chatroom-page/register-chatroom-page.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tab-navigation',
  imports: [RouterOutlet, RegisterChatroomPageComponent],
  templateUrl: './tab-navigation.component.html',
  styles: ``
})
export class TabNavigationComponent {

}
