import { Routes } from "@angular/router";
import { ChatRoomPageComponent } from "./pages/chat-room-page/chat-room-page.component";
import { PortafolioLayoutComponent } from "./layouts/PortafolioLayout/PortafolioLayout.component";

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
