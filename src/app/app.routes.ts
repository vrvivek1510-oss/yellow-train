import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Journey } from './journey/journey';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'journey', component: Journey },
];
