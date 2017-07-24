import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  users = {
    name : '',
    username: '',
    email : '',
    password : ''

  }
  state : boolean = false;
  user_info = [];
  re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  updateTable(form : NgForm) {
    this.state = true;
    console.log(this.users);
    this.user_info.push(this.users);
    console.log(this.user_info); 
    this.users = {
      name: '',
      username: '',
      email : '',
      password: ''
    }
  }

  ngOnInit() {
  }

}
