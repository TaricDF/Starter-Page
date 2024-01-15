import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: CharacterComponent,
        title: 'Home Page'
    },
    {
        path: 'Details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];
