import { Routes, RouterModule } from '@angular/router';
import {MantenimientoUsuariosComponent} from './mantenimiento-usuarios/mantenimiento-usuarios.component'

import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'usuarios',
        component: MantenimientoUsuariosComponent
    },
    {
        path: 'sedes',
        component: MantenimientoUsuariosComponent
    },
    {
        path: 'preguntas',
        component: MantenimientoUsuariosComponent
    },
    {
        path: 'mantenimiento_parentesco',
        component: MantenimientoUsuariosComponent
    },
    {
        path: 'mantenimiento_nivel_academico',
        component: MantenimientoUsuariosComponent
    },
    {
        path: 'mantenimiento_nacionalidad',
        component: MantenimientoUsuariosComponent
    }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);

