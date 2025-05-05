import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ParentComComponent } from './parent-com/parent-com.component';

export const routes: Routes = [
    {path: '', component: LoginFormComponent},
    {path: 'parent',component: ParentComComponent}
];
