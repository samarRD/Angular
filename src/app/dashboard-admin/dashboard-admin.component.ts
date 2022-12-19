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
    this.refreshUsers()
  }
  refreshUsers(){
    this.UserService.getAll().subscribe((res:any) => {
      this.userData = res;
    })

  }
  // confiramtion(){
  //confiramtion du compte
  delete(id : number){
   if(confirm("Are you sure to delete this user?")){
     this.UserService.Delete(id).subscribe(res => {
       this.refreshUsers();
     })
   }
  }

  accepter(user : any){
    user.status = true;
    this.UserService.Update(user).subscribe((data) => {
      alert('User Accepted Successfully');
      window.location.reload();});
  }
  refuser(user : any){
    user.status = false;
    this.UserService.Update(user).subscribe((data) => {
      alert('User Refused Successfully');
      window.location.reload();});
  }
  Rstatus(status:any){
    if(status){
      return "Accepter"
    }
    else if(status == false){
      return "Refuser"
    }
    else return "En cours"
  }
}
