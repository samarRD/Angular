import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  variable ='users';

  ngOnInit(): void {
  }
  change(type:string){
    this.variable = type;
   }

}
