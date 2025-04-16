import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'confiramais',
        component: InfoPageComponent
    },
    {
        path: 'formulario',
        component: FormularioComponent
    }
];
