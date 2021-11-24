import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from "src/app/partials/partials.module";
import { CreateSurveyComponent } from "./create-survey.component";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [CreateSurveyComponent],
    exports : [CreateSurveyComponent]
})

export class CreateSurveyModule {}
