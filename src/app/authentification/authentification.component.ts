import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  authentification!:FormGroup;
  isSubmitted:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.authentification= new FormGroup({

      cin:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(8),Validators.pattern("[1-9]*")]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
   },
      //{
       // validators:this.MustMatch('password','password_confirmation')}
       )}

    onSubmit(){
console.log(this.authentification);

      this.isSubmitted=true;
  if (this.authentification.invalid) {
      return;
    }

  }}
