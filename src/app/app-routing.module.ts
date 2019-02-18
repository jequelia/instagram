import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';

import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:'profile', component: ProfileComponent,
    canActivate: [AuthGuard]},
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent},
  
  {path:'editProfile', component: EditProfileComponent,
  canActivate: [AuthGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
