import { Component, OnInit } from '@angular/core';
import { UserService } from './../Service/user.service';

@Component({
  selector: 'app-dashboard-rh',
  templateUrl: './dashboard-rh.component.html',
  styleUrls: ['./dashboard-rh.component.css']
})
export class DashboardRhComponent implements OnInit {

  page : string = "users";
  Role ="Rh"
   sidebarExpanded = true;


   PageNavigation(newPage: string) {
    this.page = newPage
  }




  constructor(private UserService : UserService) { }
  ngOnInit(): void {
  }


}
