import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GalaryComponent } from './galary/galary.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'galary',
        component:GalaryComponent
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'**',
        component:HomeComponent
    }
];
