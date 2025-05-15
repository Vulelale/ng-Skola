import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RazredComponent } from './pages/razred/razred.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'razred', component: RazredComponent}
    
];
