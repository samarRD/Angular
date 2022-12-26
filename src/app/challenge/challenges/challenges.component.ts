import { Router } from '@angular/router';
import { ServiceChallengeService } from './../service-challenge.service';
import { challenge } from './../challenge';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
challenge !: challenge [] ;
  constructor(private service : ServiceChallengeService , private route:Router) { }
  @Input() Role: string = "Admin";


  ngOnInit(): void {
    this.Loadchallenge();
  }

Loadchallenge (){
    this.service.getAllChallenges().subscribe(data=>{
      this.challenge = data
    });
  }

deleteChallenge (id:number){
  this.service.DeleteChallenge(id).subscribe(data=>{
    alert('Challenge Deleted Successfully');
    this.Loadchallenge();
  })
}
updateChallenge(id:number){
  this.route.navigate(['updatechallenge',id]);
}


  }


