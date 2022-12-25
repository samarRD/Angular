import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Service/user.service';
import { CongeService } from './../../Service/conge.service';

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.css']
})
export class ListCongeComponent implements OnInit {

  constructor(private UserService : CongeService) { }
  userData : any =[];
  UserEmailFilter:string="";
  UserListWithoutFilter:any=[];
  ngOnInit(): void {
    this.refreshUsers()
  }

  refreshUsers(){
    this.UserService.getAll().subscribe((res:any) => {
      this.userData = res;
      this.UserListWithoutFilter=res;

    })

  }
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


  FilterFn(){
    var UserEmailFilter = this.UserEmailFilter;
    this.userData = this.UserListWithoutFilter.filter(function(el:any){
      return el.id.toString().toLowerCase().includes(
        UserEmailFilter.toString().trim().toLowerCase()
      )
    });
  }

}
