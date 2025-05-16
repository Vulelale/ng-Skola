import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GradeViewComponent} from './Grade/grade-view/grade-view.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grade-view', component: GradeViewComponent},
    
];
