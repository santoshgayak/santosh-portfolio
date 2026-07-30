import { Routes } from '@angular/router';
import { Resume } from './pages/resume/resume';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path:'resume',
        component:Resume
    
    }
];
