import { Component } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from '../model/survey.repository';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

  public selectedSurveyName =null;

  constructor(private repository: SurveyRepository) { }


  get surveys():Survey[]
  {
    return this.repository.getSurveys(this.selectedSurveyName);
  }
  
  get name(): string[]
  {
    return this.repository.getName();
  }
  changeSurveyName(selectedSurvey?: string ):void 
  {
    this.selectedSurveyName=selectedSurvey;
  }

}
