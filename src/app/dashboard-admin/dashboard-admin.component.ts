import { Component, OnInit } from '@angular/core';
import { UserService } from './../Service/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private UserService : UserService) { }
  userData : any =[];
  ngOnInit(): void {
    this.refreshProfile()
  }
  refreshProfile(){
    this.UserService.getAll().subscribe(res => {
      this.userData = res;
      console.log(this.userData);

    })

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

  accepter(user : any){
    user.status = true;
    this.UserService.Update(user).subscribe((data) => {
      alert('User Updated Successfully');
      window.location.reload();});
  }
}
