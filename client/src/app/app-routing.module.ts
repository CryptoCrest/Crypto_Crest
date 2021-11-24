import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './admin/auth.guard';
import { SignInComponent } from './admin/signin.component';
import { SignUpComponent } from './admin/signup.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveysComponent } from './pages/surveys/surveys.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'survey', component:SurveysComponent},
  {path: 'users/signin', component: SignInComponent },
  {path:'users/signup', component: SignUpComponent},
  {path: 'admin', component: CreateSurveyComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'survey', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
