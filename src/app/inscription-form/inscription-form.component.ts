import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';


@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit {
  Inscriptionform!:FormGroup;
  isSubmitted:boolean=false;
  constructor(private router: Router,private userService: UserService){}

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








  navigate(){
    this.router.navigate(['/authentification'])
  }

  ngOnInit(): void {

    this.Inscriptionform= new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      role:new FormControl ('Employé(e)', [Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      password_confirmation:new FormControl('',Validators.required),
      hiringDate: new FormControl('',Validators.required),
      departement:new FormControl ('', [Validators.required])},
      {validators:InscriptionFormComponent.passwordMatch('password','password_confirmation')}
       )}




      // get bindings variables for the form
       get email(){
        return this.Inscriptionform.get("email");
      }
      get nom(){
        return this.Inscriptionform.get("firstName");
      }
      get prenom(){
        return this.Inscriptionform.get("lastName");
      }
      get role(){
        return this.Inscriptionform.get("role");
      }
      get password(){
        return this.Inscriptionform.get("password");
      }
      get hiringDate(){
        return this.Inscriptionform.get("hiringDate");
      }
      get departement(){
        return this.Inscriptionform.get("departement");
      }



      // Create the user
    onSubmit(){

      this.isSubmitted = true;
      if(!this.Inscriptionform.invalid){
        const user ={
          "firstname" : this.nom?.value,
          "lastname"  : this.prenom?.value,
          "email"     : this.email?.value,
          "role"     : this.role?.value,
          "password"  : this.password?.value,
          "hiring_date": this.hiringDate?.value,
          "dept": this.departement?.value
        }


        this.userService.register(user).subscribe({
          next: (data :any) =>{
            this.router.navigate(['/authentification']);
          },
          error: (err : any) => {
            console.log(err.message)
          }
        })
      }else{
        console.log("Enter a valid informations !!!", '❌');
      }
    }
    }






















