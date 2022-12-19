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
    this.refreshProfile()
  }
  refreshProfile(){
    this.UserService.getAll().subscribe(res => {
      res.forEach((user: any) => {
        if(user.role != "Admin"){
          this.userData.push(user);
        }
      });

      });

  }
  // confiramtion(){
  //confiramtion du compte
  delete(id : number){
   if(confirm("Are you sure to delete this user?")){
     this.UserService.Delete(id).subscribe(res => {
       this.refreshProfile();
     })
   }
  }

}
