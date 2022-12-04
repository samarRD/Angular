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
}
