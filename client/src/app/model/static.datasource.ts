import { Injectable } from '@angular/core';
import { SurveyItems } from './survey.model';
import { Observable, from } from 'rxjs';
import { TodoList } from '../pages/create-survey/surveyList';

@Injectable()
export class StaticDataSource{
    private list = new TodoList("Bob", [
        new SurveyItems("Mothly Incomes","Survey to understand the typical statistics of mothly income in a given household", "4", true),
        new SurveyItems("Mothly Expenditures","Survey to understand the typical statistics of mothly expenditures in a given household","5"),
        new SurveyItems("Health Survey", "Survey to understand the typical health conditions of people living in a given society","6"),
      ]);

get getList(): Observable<TodoList>
  {
    return from([this.list]);
  }
  
}



