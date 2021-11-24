import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { PartialsModule } from "../partials/partials.module";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";


@NgModule({
    imports: [ModelModule, CommonModule, BrowserModule, FormsModule, PartialsModule],
    providers: [AuthGuard],
    declarations: [AdminComponent, SignInComponent, SignUpComponent],
    exports:[SignInComponent, SignUpComponent, FormsModule]
})
export class AdminModule{}