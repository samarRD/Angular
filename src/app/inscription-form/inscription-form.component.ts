import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
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
      password_confirmation:new FormControl('',Validators.required),
      dateEmbauche: new FormControl('',Validators.required),
      departement:new FormControl ('autre', [Validators.required])},
      {validators:InscriptionFormComponent.passwordMatch('password','password_confirmation')}
       )}

    onSubmit(){
console.log(this.Inscriptionform);
  if (this.Inscriptionform.invalid) {
      return;
    }
    this.isSubmitted=true;


   alert('Inscription validé!! )');

    }

    static passwordMatch(password: string, confirmPassword: string) {
      return (formGroup: AbstractControl): ValidationErrors | null => {
        const passwordControl = formGroup.get(password);
        const confirmPasswordControl = formGroup.get(confirmPassword);

        if (!passwordControl || !confirmPasswordControl) {
          return null;
        }

        if (
          confirmPasswordControl.errors &&!confirmPasswordControl.errors["passwordMismatch"]
        ) {
          return null;
        }

        if (passwordControl.value !== confirmPasswordControl.value) {
          confirmPasswordControl.setErrors({ passwordMismatch: true });
          return { passwordMismatch: true };
        } else {
          confirmPasswordControl.setErrors(null);
          return null;
        }
      };
    }




  }


