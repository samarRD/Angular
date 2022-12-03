import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  Ajouterform!:FormGroup;
  isSubmitted:boolean=false;
  constructor() {

   }

  ngOnInit(): void {
    this.Ajouterform= new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      role:new FormControl ('Employé(e)', [Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      password_confirmation:new FormControl('',Validators.required),
      hiringDate: new FormControl('',Validators.required),
      departement:new FormControl ('autre', [Validators.required])},
      {validators:AjouterComponent.passwordMatch('password','password_confirmation')}
       )}

    onSubmit(){
console.log(this.Ajouterform);
  if (this.Ajouterform.invalid) {
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
