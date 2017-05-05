import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name : String;
  lastname : String;
  email : String;
  password : String;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name : this.name,
      lastname : this.lastname,
      email : this.email,
      password : this.password
    }

this.authService.registerUser(user).subscribe(data => {
  if(data.success){
    console.log('register succeed');
  }else{
     console.log('register failed');
  }
});
  }

}
