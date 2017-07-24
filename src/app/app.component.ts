import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  stateLine :boolean = false;
  stateBar :boolean = false;


  line() {
    this.stateLine = true;
    this.stateBar = false;
  } 
  bar(){
    this.stateBar = true;
    this.stateLine = false;
  }
    
 

  
}

