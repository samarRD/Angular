import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit {
  Inscriptionform!:FormGroup;
  isSubmitted:boolean=false;


  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/authentification'])
  }

  ngOnInit(): void {

    this.Inscriptionform= new FormGroup({
      nom: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      prenom:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      cin:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(8),Validators.pattern("[1-9]*")]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      password_confirmation:new FormControl('',Validators.required)},
      //{
       // validators:this.MustMatch('password','password_confirmation')}
       )}

    onSubmit(){
console.log(this.Inscriptionform);

      this.isSubmitted=true;
  if (this.Inscriptionform.invalid) {
      return;
    }


   alert('Inscription validé!! )');

    }

    MustMatch(pwd:string,pwdc:string) {
      return (formGroup:FormGroup) => {
        const control = formGroup.controls[pwd];
        const matchingControl = formGroup.controls[pwdc];

        if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
          return;}
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({MustMatch: true });
      }
      else {
          matchingControl.setErrors(null);}
    }
    }}


