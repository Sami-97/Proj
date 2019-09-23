import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MembersComponent } from './members/members.component';
import { GroupsComponent } from './groups/groups.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TermsComponent } from './terms/terms.component';
import { NavigComponent } from './navig/navig.component';
import { ModalComponent } from './modal/modal.component';



const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'header', component: HeaderComponent},
  {path: 'members', component: MembersComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'navig', component: NavigComponent},



];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    GroupsComponent,
    PhotosComponent,
    ProfileComponent,
    HomeComponent,
    PanelComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ForgotComponent,
    TermsComponent,
    NavigComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
