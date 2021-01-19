import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotpwdComponent } from './auth/forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './auth/resetpwd/resetpwd.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const routes: Routes = [
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpwd', component: ForgotpwdComponent },
  { path: 'resetpwd', component: ResetpwdComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    ResetpwdComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
