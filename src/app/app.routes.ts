import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GradeViewComponent} from './Grade/grade-view/grade-view.component';
import { GradeAddComponent} from './Grade/grade-add/grade-add.component';
import { GradeEditComponent} from './Grade/grade-edit/grade-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grade-view', component: GradeViewComponent},
    { path: 'grade-add', component: GradeAddComponent},
   { path: 'grade-edit/:id', component: GradeEditComponent}
];
