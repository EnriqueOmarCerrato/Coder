
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: 'dashboard/:user',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
    canActivate: []
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),pathMatch: 'full',
    canActivate: []
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
