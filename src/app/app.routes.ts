import { Routes } from '@angular/router';
import { App } from '../../../micro-app/src/app/app';

import{} from './Modules/Dashboard/dashborad/dashborad'
import { FullTemplate } from './Layout/full-template/full-template';


export const routes: Routes = [
    {
        
    path: 'micro',
component: App

    },
    {
        path:"dashboard",
        component:FullTemplate,
        loadChildren: () => import('./Modules/Dashboard/dashboard.routes').then(m => m.routes)
    }
];
