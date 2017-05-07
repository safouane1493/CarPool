import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  email : String;
  name: String;
  lastname: String;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  editMyProfile(){
    const editeduser = {
        _id : this.user._id,
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.user.password
      }
      console.log(this.user);
    this.authService.editUser(editeduser).subscribe(data => {
  if(data.success){
    console.log('register succeed');
  }else{
     console.log('register failed');
  }
});
  }

}
