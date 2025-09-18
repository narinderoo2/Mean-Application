import { Routes } from '@angular/router';
import { FullTemplate } from './Layout/full-template/full-template';
import { Dashboard } from './Module/Monitor/dashboard/dashboard';
import App from './app';

export const routes: Routes = [
    {
        path:"",
        loadComponent :() => import('./Module/Monitor/dashboard/dashboard').then(m => Dashboard)
    }

];

export default routes;
