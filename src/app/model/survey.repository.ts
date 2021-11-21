import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class SurveyRepository{
    private survey: Survey[]= [];
    private name: string []=[];

    constructor(private dataSource: StaticDataSource)
    {
        dataSource.getSurveys().subscribe(data =>{
             this.survey=data;
             this.name=data.map(s=>s.surveyName)
             .filter((s,index,array)=>array.indexOf(s)===index).sort();
        });
    }
    getSurveys(name: string=null):Survey[]
    {
        return this.survey
        .filter(s=>name==null||name===s.surveyName);
    }
    getSurvey(id: number): Survey{
        return this.survey.find(s=>s._id===id);
    }
    getName(): string[]
    {
        return this.name;
    }
}