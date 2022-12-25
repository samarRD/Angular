import { Router, ActivatedRoute } from '@angular/router';
import { challenge } from './../challenge';
import { Component, OnInit } from '@angular/core';
import { ServiceChallengeService } from '../service-challenge.service';

@Component({
  selector: 'app-update-challenge',
  templateUrl: './update-challenge.component.html',
  styleUrls: ['./update-challenge.component.css']
})
export class UpdateChallengeComponent implements OnInit {
c :challenge = new challenge();
id!:number;
  constructor(private service :ServiceChallengeService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params[('id')];
    this.service.getChallenge(this.id).subscribe(data=>{
      this.c=data;
    })
}
  updateChallenge(){
    this.service.UpdateChallenge(this.c).subscribe(data=>
      {
        alert('challenge updated successfuly');
        this.router.navigate(['listchallenge']);
      })
  }



}
