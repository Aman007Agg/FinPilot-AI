import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';

import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },

    {
        path: 'register',
        component: Register
    },

    {
        path: 'forgot-password',
        component: ForgotPassword
    },

    {
        path: 'dashboard',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Dashboard
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
