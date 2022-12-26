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
  CongeData : any =[];
  CongeIdFilter:string="";
  CongeListWithoutFilter:any=[];
  ngOnInit(): void {
    this.refreshUsers()
  }

  refreshUsers(){
    this.UserService.getAll().subscribe((res:any) => {
      this.CongeData = res;
      this.CongeListWithoutFilter=res;

    })

  }

  accepter(conge : any){
    conge.status = true;
    this.UserService.Update(conge).subscribe((data) => {
      alert('conge Accepted Successfully');
    });
  }
  refuser(conge : any){
    conge.status = false;
    this.UserService.Update(conge).subscribe((data) => {
      alert('conge Refused Successfully');
    });
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
    var CongeIdFilter = this.CongeIdFilter;
    this.CongeData = this.CongeListWithoutFilter.filter(function(el:any){
      return el.id.toString().toLowerCase().includes(
        CongeIdFilter.toString().trim().toLowerCase()
      )
    });
  }

}
