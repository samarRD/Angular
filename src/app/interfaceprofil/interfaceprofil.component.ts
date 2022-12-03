import { Component, OnInit } from '@angular/core';
import { UserService } from './../Service/user.service';

@Component({
  selector: 'app-interfaceprofil',
  templateUrl: './interfaceprofil.component.html',
  styleUrls: ['./interfaceprofil.component.css']
})
export class InterfaceprofilComponent implements OnInit {

  constructor(private UserService : UserService) { }
  userData : any ={};
  ngOnInit(): void {
    this.refreshProfile()
  }
  refreshProfile(){
    this.UserService.getAll().subscribe(res => {
      this.userData = res;
      console.log(res)
    })

  }

  delete(id : number){
    this.UserService.Delete(id).subscribe((res : any) => {alert(res)})
  }
}
