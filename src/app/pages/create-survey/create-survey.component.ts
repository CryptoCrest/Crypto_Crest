import { Component, OnInit } from '@angular/core';
import { TodoList } from "./surveyList";
import { SurveyItems } from "./surveyItems";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})

//export class CreateSurveyComponent  {
export class CreateSurveyComponent implements OnInit {

  private list = new TodoList("Bob", [
    new SurveyItems("Mothly Incomes","Survey to understand the typical statistics of mothly income in a given household", "4", true),
    new SurveyItems("Mothly Expenditures","Survey to understand the typical statistics of mothly expenditures in a given household","5"),
    new SurveyItems("Health Survey", "Survey to understand the typical health conditions of people living in a given society","6"),
  ]);

  IsForUpdate: boolean = false;  
  IsForAdd: boolean = true;  
  model:any={};
  msg:any="";

  get username(): string {
    return this.list.user;
  }  

  get getItems(): SurveyItems[] {    
    return this.list.items.filter( item =>  this.showComplete || !item.complete);
  }

  get itemCount(): number {
    return this.getItems.length;
  }
  //function to add new survey
  addNewItem(newItem: string, newDes: string, questions: string){
    if(newItem != ""){
      this.list.addItem(newItem, newDes, questions);
    }
  }
  //function to edit survey info
  myValue: any;
  editItem(i: number, newItem: string, newDes: string, questions: string){
    this.IsForUpdate = true;
    this.IsForAdd = false;
    this.model.name = newItem;
    this.model.description =newDes;
    this.model.questions = questions;
    this.myValue = i

  }
  //function to update survey info
  updateItem(newItem: string, newDes: string, questions: string){
    this.list.update(this.myValue, newItem, newDes, questions)
    this.IsForUpdate = false;

  }
  //function to delete survey info
  deleteItem(i: number){
    this.list.delete(i)
  }

  showComplete: boolean = false;
  ngOnInit() { }
    
}


