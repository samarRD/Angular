import { Component, OnInit } from '@angular/core';
import { UserService } from './../Service/user.service';

@Component({
  selector: 'app-dashboard-rh',
  templateUrl: './dashboard-rh.component.html',
  styleUrls: ['./dashboard-rh.component.css']
})
export class DashboardRhComponent implements OnInit {

  constructor(private UserService : UserService) { }
  userData : any =[];
  ngOnInit(): void {
    this.refreshUsers()
  }
  //get All users
  refreshUsers(){
    this.UserService.getAll().subscribe(res => {
      res.forEach((user: any) => {
        if(user.role != "Admin" && user.status !== false){
          this.userData.push(user);
        }
      });

      });

  }
  // confiramtion(){
  //confiramtion du compte
  delete(user : any){
    user.status = false;
    this.UserService.Update(user).subscribe((data) => {
      alert('User Deleted Successfully');
      window.location.reload();});
  }

}
