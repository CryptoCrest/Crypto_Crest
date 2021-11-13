import { SurveyItems } from "./surveyItems";


export class TodoList {

    constructor(public user: string, private todoItems: SurveyItems[] = []) {
        // no statements required
    }

    get items(): SurveyItems[] {
        return this.todoItems;
        
    }
    //declaring function for add survey
    addItem(task: string, description: string, questions: string) {
        this.todoItems.push(new SurveyItems(task,description,questions));
    }
    //declaring function for delete survey
    delete(i: number){
        this.todoItems.splice(i, 1)
    }
    //declaring function for update survey
    update( i: number, task: string, description: string, questions: string)
    {
        this.todoItems.splice(i,1,new SurveyItems(task, description, questions))
    }

    
}
