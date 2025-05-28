import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GradeViewComponent} from './Grade/grade-view/grade-view.component';
import { GradeAddComponent} from './Grade/grade-add/grade-add.component';
import { GradeEditComponent} from './Grade/grade-edit/grade-edit.component';
import { OdeljenjeViewComponent } from './Odeljenja/odeljenja-view/odeljenja-view.component';
import { OdeljenjeAddComponent } from './Odeljenja/odeljenja-add/odeljenja-add.component';
import { OdeljenjeEditComponent } from './Odeljenja/odeljenja-edit/odeljenja-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grade-view', component: GradeViewComponent},
    { path: 'grade-add', component: GradeAddComponent},
    { path: 'grade-edit/:id', component: GradeEditComponent},
    { path: 'odeljenja-view', component: OdeljenjeViewComponent},
    { path: 'odeljenja-add', component: OdeljenjeAddComponent},
    { path: 'odeljenja-edit/:id', component: OdeljenjeEditComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}

    
];
