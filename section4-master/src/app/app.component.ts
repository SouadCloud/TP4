import { Component, Input } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isAuth = false;
   appareils: any[];

  
  constructor() {
    
  }

  ngOnInit() {
    
  }

  



}
