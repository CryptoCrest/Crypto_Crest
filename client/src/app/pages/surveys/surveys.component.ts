import { Component, OnInit } from '@angular/core';
import { SurveyItems } from 'src/app/model/survey.model';
import { TodoList } from '../create-survey/surveyList';
import { AuthService } from 'src/app/model/auth.service';
@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  private list = new TodoList("Bob", [
    new SurveyItems("Mothly Incomes","Survey to understand the typical statistics of mothly income in a given household", "4", true),
    new SurveyItems("Mothly Expenditures","Survey to understand the typical statistics of mothly expenditures in a given household","5"),
    new SurveyItems("Health Survey", "Survey to understand the typical health conditions of people living in a given society","6"),
  ]);
  constructor(private auth: AuthService){}

  get getItems(): SurveyItems[] {    
    return this.list.items.filter( item =>  this.showComplete || !item.complete);
  }
  get authenticated(): boolean{
    return this.auth.authenticated;
  }
  ngOnInit(): void {
  }
  showComplete: boolean= false;

}
