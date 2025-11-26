import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },

    {
        path: 'portafolio',
        loadChildren: () => import('./portafolio/portafolio.routes'),
    },
    
    {
        path: 'chat',
        loadChildren: () => import('./chat/chat.routes.routes'),
    },

    {
        path: '**',
        redirectTo: '',
    }
];
