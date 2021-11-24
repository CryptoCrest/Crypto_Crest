import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;

  constructor(private auth: AuthService) { 

  }

  ngOnInit(): void {
  }
 
  get authenticated(): boolean{
    return this.auth.authenticated;
  }
  
  
}
