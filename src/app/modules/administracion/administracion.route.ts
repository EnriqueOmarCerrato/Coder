import { SedesComponent } from './sedes/sedes.component';
import { ParentescoComponent } from './parentesco/parentesco.component';
import { TipoInclusionComponent } from './tipo-inclusion/tipo-inclusion.component';
import { TipoEspecialidadComponent } from './tipo-especialidad/tipo-especialidad.component';
import { ModalidadAtencionComponent } from './modalidad-atencion/modalidad-atencion.component';
import { ModalidadServicioComponent } from './modalidad-servicio/modalidad-servicio.component';
import { TipoEvaluacionComponent } from './tipo-evaluacion/tipo-evaluacion.component';
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';
import { NacionalidadComponent } from './nacionalidad/nacionalidad.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component'
import { GeneroComponent } from './genero/genero.component';
import {ServiciosSocialesComponent} from './servicios-sociales/servicios-sociales.component'

export const routes: Routes = [
    {
        path: 'nivel_academico',
        component: NivelAcademicoComponent
    },
    {
        path: 'nacionalidad',
        component: NacionalidadComponent
    },
    {
        path: 'sedes',
        component: SedesComponent
    },
    {
        path: 'parentesco',
        component: ParentescoComponent
    },
    {
        path: 'genero',
        component: GeneroComponent
    },
    {
        path: 'tipo_persona',
        component: TipoPersonaComponent
    },
    {
        path: 'tipo_evaluacion',
        component: TipoEvaluacionComponent
    },
    {
        path: 'tipo_inclusion',
        component: TipoInclusionComponent
    },
    {
        path: 'tipo_especialidad',
        component: TipoEspecialidadComponent
    },
    {
        path: 'modalidad_atencion',
        component: ModalidadAtencionComponent
    },
    {
        path: 'modalidad_servicio',
        component: ModalidadServicioComponent
    },
    {
        path: 'servicio_social',
        component: ServiciosSocialesComponent
    }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);

