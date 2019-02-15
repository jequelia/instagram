import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:'profile', component: ProfileComponent,},
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'editProfile', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
