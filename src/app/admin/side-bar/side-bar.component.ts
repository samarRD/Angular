import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'my-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  page = 'users;'
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() pageName = new EventEmitter<string>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);


  ngOnInit(): void {
  }


  change(type:string){
    this.page = type;
    this.pageName.emit(this.page)
  }

}
