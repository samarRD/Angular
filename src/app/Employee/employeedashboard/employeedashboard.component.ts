import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/Service/conge.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

  constructor(private userService : UserService,private congeService : CongeService) { }
  CongeList : any =[];
  ClassConge =""
  addConge = {
    "date_debut": "",
    "date_fin": "",
    "status": null,
    "user": {},
    "typeconge": ""
  }
  ngOnInit(): void {
    this.getConges();
  }
getConges(){
  const id = this.userService.getToken();
  this.userService.getCongeByUser(id).subscribe((res : any)=>
  {
    this.CongeList = res;
  })
}


Rstatus(status:any){
  if(status == true){
    this.ClassConge = "badge badge-success"
    return "Accepter"
  }
  else if(status == false){
    this.ClassConge = "badge badge-danger"
    return "Refuser"
  }
  else {
    this.ClassConge = "badge badge-warning"
    return "En cours"}
}


addConges(){
  let user ={} ;
   this.userService.get(this.userService.getToken()).subscribe((res :any) =>{
     this.addConge.user =res
  });
  console.log(
    this.addConge
  );

  this.congeService.add(this.addConge).subscribe((res : any) => {
    alert('Conge Added Successfully');
    this.getConges();
  });


}


}

