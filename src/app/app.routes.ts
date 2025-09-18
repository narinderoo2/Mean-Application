import { Routes } from '@angular/router';
import { FullTemplate } from './Layout/full-template/full-template';

export const routes: Routes = [
 
    {
        path:'microapp',
        component:FullTemplate,
        loadChildren : () => import("microapp/Routes").then((m) => m.default || m.micro)
    },


    {
        path:"dashboard",
        component:FullTemplate,
        loadChildren: () => import('./Modules/Dashboard/dashboard.routes').then(m => m.routes)
    }
];
