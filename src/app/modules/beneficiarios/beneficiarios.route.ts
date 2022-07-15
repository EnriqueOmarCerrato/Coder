import { Routes, RouterModule } from '@angular/router';
import {BeneficiarioComponent} from './beneficiario/beneficiario.component'

import { ModuleWithProviders } from '@angular/core';
import { ModalBeneficiarioComponent } from './beneficiario/modal-beneficiario/modal-beneficiario.component';

export const routes: Routes = [
    {
        path: 'beneficiario',
        component: BeneficiarioComponent
    },
    {
        path: 'beneficiario-creacion',
        component: ModalBeneficiarioComponent
    }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);

