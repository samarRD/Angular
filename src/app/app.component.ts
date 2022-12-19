import { Component } from '@angular/core';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mezzo-Hr';
  constructor(private UserService : UserService){}
  signout(){
    this.UserService.signOut();
    window.location.reload();
  }


  role(){
    let role = this.UserService.getRole() as string;
    if(role == "Responsable RH"){
      return "Responsable RH";
    }else if(role == "Admin"){
      return "Admin";
    }
    return "Employé(e)";
  }


isUserAuthenticated() {
    const token: string = this.UserService.getToken() as string;
    if (token != null) {
      return true;
    }
    else {
      return false;
    }
  }

    UserAuthenticated() {
      const User: string = this.UserService.getEmail() as string;
      if (User != null) {
        return User;
      } else {
        return "User";
      }
    }
}
