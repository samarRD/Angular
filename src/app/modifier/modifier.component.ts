import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../Service/user.service';


@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  Modifierform!:FormGroup;
  isSubmitted:boolean=false;
  C!: any;
   id! :number;

  constructor(public ar: ActivatedRoute,public userService : UserService,private router: Router) {
    this.ar.params.subscribe(
      data => {this.id = data['id'];}
    );

    this.userService.get(this.id).subscribe(
      data => {this.C = data ; console.log(this.C)}

    );

  }





  ngOnInit(): void {
    this.Modifierform= new FormGroup({
      firstName: new FormControl('imed',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      role:new FormControl ('Employé(e)', [Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      password_confirmation:new FormControl('',Validators.required),
      hiringDate: new FormControl('',Validators.required),
      departement:new FormControl ('autre', [Validators.required])},
      {validators:ModifierComponent.passwordMatch('password','password_confirmation')}
       )}




       get email(){
        return this.Modifierform.get("email");
      }
      get nom(){
        return this.Modifierform.get("nom");
      }
      get prenom(){
        return this.Modifierform.get("prenom");
      }
      get role(){
        return this.Modifierform.get("role");
      }
      get password(){
        return this.Modifierform.get("password");
      }
      get hiringDate(){
        return this.Modifierform.get("hiringDate");
      }
      get departement(){
        return this.Modifierform.get("departement");
      }



    onSubmit(){
console.log(this.Modifierform);
  if (!this.Modifierform.invalid) {
    if(this.password?.value !="" && this.email?.value !=""  ){
      this.C.firstname = this.nom;
      this.C.lastname = this.prenom;
      this.C.role = this.role;
      this.C.email = this.email;
      this.C.dept = this.departement;
      this.C.hiring_date = this.hiringDate;
      this.C.password = this.password;
      this.userService.Update(this.id,this.C).subscribe(
        data => {alert("Modife produit avec succes");},
        error => {alert('echec Modification')}
      );
    }
    }
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
