import { Router } from '@angular/router';
import { challenge } from './../challenge';

import { Component, OnInit } from '@angular/core';
import { ServiceChallengeService } from '../service-challenge.service';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
   c !: challenge;

  constructor(private service : ServiceChallengeService , private router :Router) { }

  ngOnInit(): void {
    this.c = new challenge();

  }
addChallenge(){
this.service.Createchallenge(this.c).subscribe(
  data=>{
    this.c = new challenge();
    alert('challenge added successfuly');
    this.router.navigate(['listchallenge']);
  }
)
}



}
