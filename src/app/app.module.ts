import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AuthService } from './services/auth.service';
import { RequestService } from './services/request.service';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    CadastroComponent,
    EditProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
   
  ],
  providers: [AuthService, RequestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
