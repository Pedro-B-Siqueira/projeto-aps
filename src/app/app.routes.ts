import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'confiramais',
        component: InfoPageComponent
    }
];
