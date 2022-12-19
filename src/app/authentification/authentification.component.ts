import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  authentification!:FormGroup;
  isSubmitted:boolean=false;
  errorMessage: string='';
  constructor(private userService : UserService,private route : Router) { }

  ngOnInit(): void {
    this.authentification= new FormGroup({

      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
   },
      //{
       // validators:this.MustMatch('password','password_confirmation')}
       )}

       get email(){
        return this.authentification.get("email")
      }
      get password(){
        return this.authentification.get("password")
      }
    onSubmit(){


      const LoginInfo = {'email' : this.email?.value,'password' : this.password?.value};
      this.isSubmitted=true;
      console.log(this.authentification)
  if (!this.authentification.invalid) {
    this.userService.login(LoginInfo)
    .subscribe({
      next: (data :any) =>{
       if(data !== null){
        if(data.status == true){
          this.userService.saveToken(data.id,data.role,data.email);
          this.route.navigate(['/home']);
        }else{
          alert("vous n'ete pas accepter d'aprés l'admin");
        }
       }else{
       alert("The user name or password are incorrect. This is easily corrected by typing the correct user name and password.❌");
       }
      },
      error: (err : Error) => {
        this.errorMessage = err.message;
        console.log(err)
      }
    });
  }
  else{
    console.log("Enter a valid informations !!!", '❌');

  }
    }

  }
