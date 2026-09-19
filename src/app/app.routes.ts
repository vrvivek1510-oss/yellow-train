import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Journey } from './journey/journey';
import { Gifts } from './gifts/gifts';
import { Occasions } from './occasions/occasions';
import { Customize } from './customize/customize';
import { Corporate } from './corporate/corporate';
import { Stories } from './stories/stories';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'journey', component: Journey },
    { path: 'journey/gifts', component: Gifts },
    { path: 'journey/occasions', component: Occasions },
    { path: 'journey/customize', component: Customize },
    { path: 'journey/corporate', component: Corporate },
    { path: 'journey/stories', component: Stories },
];