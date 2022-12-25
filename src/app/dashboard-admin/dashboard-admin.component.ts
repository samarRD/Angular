import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  page : string = "users";

  ngOnInit(): void {

  }
   sidebarExpanded = true;


   PageNavigation(newPage: string) {
    this.page = newPage
  }

}
