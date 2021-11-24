import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './admin/signin.component';
import { SignUpComponent } from './admin/signup.component';
import { PartialsModule } from './partials/partials.module';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './admin/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { CreateSurveyModule } from './pages/create-survey/create-survey.module';
import { SurveysComponent } from './pages/surveys/surveys.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PartialsModule,
    AdminModule,
    AppRoutingModule,
    CreateSurveyModule
  /*  RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path:'create-survey', component:CreateSurveyComponent},
      { path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
      { path: "users/signin", component: SignInComponent },
      { path: "users/signup", component: SignUpComponent },
      {path: '', redirectTo: 'create-survey', pathMatch:'full'},
      { path: "**", redirectTo: '' }
    ])*/
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
