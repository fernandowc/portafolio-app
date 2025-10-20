import { Routes } from "@angular/router";
import { ChatRoomPageComponent } from "./pages/chat-room-page/chat-room-page.component";
import { PortafolioLayoutComponent } from "./layouts/PortafolioLayout/PortafolioLayout.component";
import { MessagePageComponent } from "./pages/message-page/message-page.component";
import { UsersPageComponent } from "./pages/users-page/users-page.component";
import { ByChatRoomIdPageComponent } from "./pages/by-chat-room-id-page/by-chat-room-id-page.component";

export const portafolioRoutes: Routes = [
    {
        path: '',
        component: PortafolioLayoutComponent,
        children: [
            {
                path: 'chat',
                component: ChatRoomPageComponent
            },

            {
                path: 'message',
                component: MessagePageComponent
            },

            {
                path: 'users',
                component: UsersPageComponent
            },

            {
                path: 'by/:chatRoomId',
                component: ByChatRoomIdPageComponent
            },

            {
                path: '**',
                redirectTo: 'chat',
            }
        ]
    },

    // {
    //     path: 'chatRoom',
    // },
];

export default portafolioRoutes;
