import { Routes } from "@angular/router";
import { ChatLayoutComponent } from "./layouts/chat-layout/chat-layout.component";
import { ChatRoomPageComponent } from "./pages/chat-room-page/chat-room-page.component";
import { RegisterChatroomPageComponent } from "./pages/register-chatroom-page/register-chatroom-page.component";

export const ChatRoutes: Routes = [
    {
        path: '',
        component: ChatLayoutComponent,
        children: [
            {
                path: 'chatroom',
                component: ChatRoomPageComponent
            },

            {
                path: 'register',
                component: RegisterChatroomPageComponent
            },
                    
            {
                path: '**',
                redirectTo: 'chatroom'
            }
        ]
    }
]

export default ChatRoutes;
