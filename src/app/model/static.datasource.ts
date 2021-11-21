import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { from, Observable } from "rxjs";

@Injectable()
export class StaticDataSource{
    private surveys: Survey[]=
    [
        new Survey(1,'Crypto Information','This survey helps you understand your basic knowledge for crypto.',9),
        new Survey(2,'Crypto Investment','Gives you the basic knowledge of the types of investments.',10),
        new Survey(3,'Crypto Guidence','Guids you through the correct amount the be invested in the Crypto Market.',8),
        new Survey(4,'Crypto History','Gives a brief knowledge of the history of the Crypto Currencies.',13),
        new Survey(5,'Crypto Market','Gives a brief understanding of how the Crypto market works.',11),
        new Survey(6,'Crypto Returns','Helps understand the amount of returns per currency.',9),
        new Survey(7,'Survey 7','Description 7',9),
        new Survey(8,'Survey 2','Description 8',9),
        new Survey(9,'Survey 2','Description 9',9),
        new Survey(10,'Survey 2','Description 10',9),
        new Survey(11,'Survey 3','Description 11',9),
        new Survey(12,'Survey 3','Description 12',9),
        new Survey(13,'Survey 3','Description 13',9),
        new Survey(14,'Survey 3','Description 14',9),
        new Survey(15,'Survey 3','Description 15',9)
    ];
    getSurveys():Observable<Survey[]>
    {
        return from([this.surveys]);
    }
}