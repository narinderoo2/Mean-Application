import { Routes } from '@angular/router';
import { FullTemplate } from './Layout/full-template/full-template';
import { loadRemoteModule } from '@angular-architects/module-federation';


function loadRemoteEntry(remoteEntryUrl: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${remoteEntryUrl}"]`)) {
      resolve(); // Already loaded
      return;
    }

    const script = document.createElement('script');
    script.src = remoteEntryUrl;
    script.type = 'text/javascript';
    script.async = true;

    script.onerror = () => reject(new Error(`Could not load ${remoteEntryUrl}`));
    script.onload = () => resolve();

    document.head.appendChild(script);
  });
}


export const routes: Routes = [
 
    // {
    //     path:'microapp',
    //     component:FullTemplate,
    //     loadChildren : () => import("microapp/Routes").then((m) => m.default || m.micro)
    // },
    {
        path:'microapp',
        component:FullTemplate,
       loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Routes',
      })
        .then((m) => m.default || m.micro) // adjust based on actual export
        .catch((err) => {
          console.error('❌ Microapp failed to load:', err);
        //   return import('./Modules/Fallback/fallback.routes').then(m => m.routes);
        }),
  },


    {
        path:"dashboard",
        component:FullTemplate,
        loadChildren: () => import('./Modules/Dashboard/dashboard.routes').then(m => m.routes)
    }
];
