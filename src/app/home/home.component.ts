import { UserService } from './../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { challenge } from '../challenge/challenge';
import { ServiceChallengeService } from '../challenge/service-challenge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  challenges !: challenge [] ;
  c :challenge = new challenge();
  constructor(private service : ServiceChallengeService , private route: Router,private userService : UserService) { }

  ngOnInit(): void {
    this.Loadchallenge();
  }
  Loadchallenge (){
    this.service.getAllChallenges().subscribe(data=>{
      this.challenges = data
    });
  }

  participer(c : challenge){
   const id = this.userService.getToken();
   this.service.UpdateUserChallenge(c,id).subscribe((res :any) =>{
    alert(" you are participated");
   })
  }


}
