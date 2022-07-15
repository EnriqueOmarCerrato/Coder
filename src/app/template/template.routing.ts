import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { TemplateComponent } from './template.component';
export const routes: Routes = [
    {
        path: '',
        component: TemplateComponent,
        children: [
            {
                path: 'mantenimientos',
                loadChildren: () => import('../modules/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
            },
            {
                path: 'administracion',
                loadChildren: () => import('../modules/administracion/administracion.module').then(m => m.AdministracionModule)
            },
            {
                path: 'beneficiarios',
                loadChildren: () => import('../modules/beneficiarios/beneficiarios.module').then(m => m.BeneficiariosModule)
            },
            {
                path: 'colaboradores',
                loadChildren: () => import('../modules/colaboradores/colaborador.module').then(m => m.ColaboradorModule)
            },
            {
                path: 'area-psicologica',
                loadChildren: () => import('../modules/psicologia/psicologia.module').then(m => m.PsicologiaModule)
            },
            {
                path: 'area-academica',
                loadChildren: () => import('../modules/academica/academica.module').then(m => m.AcademicaModule)
            },
            {
                path:'modulo_seguridad',
                loadChildren: () => import('../modules/seguridad/seguridad.module').then(m => m.SeguridadModule)
            },
            {
                path:'inicio',
                loadChildren: () => import('../modules/inicio/incio.module').then(m => m.IncioModule)
            },


        ]
    },
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
