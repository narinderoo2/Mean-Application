import { Routes } from '@angular/router';
import { App } from '../../../micro-app/src/app/app';

export const routes: Routes = [
    {
        
    path: 'micro',
component: App
    // loadChildren: () =>
    //   import('microapp/MicroModule').then(m => m.MicroModule),
//   microapp/MicroModule
    }
];
