import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name : String;
  last_name : String;
  email : String;
  password : String;

  constructor() { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name : this.name,
      email : this.email,
      password : this.password
    }
  }

}
