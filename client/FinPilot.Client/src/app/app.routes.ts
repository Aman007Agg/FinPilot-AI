import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password';

import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { DashboardComponent } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },

    {
        path: 'dashboard',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },

    {
        path: '**',
        redirectTo: ''
    }
];
