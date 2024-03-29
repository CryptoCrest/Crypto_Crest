import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'create-survey', component:CreateSurveyComponent},
  {path: 'survey-list', component:SurveyComponent},
  {path: '', redirectTo: 'create-survey', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
