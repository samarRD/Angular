import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../Service/user.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
})
export class ModifierComponent implements OnInit {
  Modifierform!: FormGroup;
  isSubmitted: boolean = false;
  C!: any;
  id!: number;

  constructor(
    public ar: ActivatedRoute,
    public userService: UserService,
    private router: Router
  ) {
    this.ar.params.subscribe((data) => {
      this.id = data['id'];
    });

    this.userService.get(this.id).subscribe((data) => {
      this.C = data;
      console.log(this.C)
      this.setForm()
    });
  }

  ngOnInit(): void {

  }

  setForm(){
    this.Modifierform = new FormGroup(
      {
        firstName: new FormControl(this.C?.firstname, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        lastName: new FormControl(this.C?.lastname, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        role: new FormControl(this.C?.role, [Validators.required]),
        email: new FormControl(this.C?.email, [Validators.required, Validators.email]),
        password: new FormControl(this.C?.password, [
          Validators.required,
          Validators.minLength(8),
        ]),
        password_confirmation: new FormControl("", Validators.required),
        hiringDate: new FormControl(this.C?.hiring_date, Validators.required),
        departement: new FormControl(this.C?.dept, [Validators.required]),
      },
      {
        validators: ModifierComponent.passwordMatch(
          'password',
          'password_confirmation'
        ),
      }
    );
  }

  get form() {
    return this.Modifierform.controls;
  }

  get email() {
    return this.Modifierform.get('email');
  }

  get firstName() {
    return this.Modifierform.get('firstName');
  }
  get lastName() {
    return this.Modifierform.get('lastName');
  }
  get role() {
    return this.Modifierform.get('role');
  }
  get password() {
    return this.Modifierform.get('password');
  }
  get hiringDate() {
    return this.Modifierform.get('hiringDate');
  }
  get departement() {
    return this.Modifierform.get('departement');
  }

  onSubmit() {
    console.log(this.Modifierform);
    if (!this.Modifierform.invalid) {
      if (this.password?.value != '' && this.email?.value != '') {
        this.C.firstname = this.firstName?.value;
        this.C.lastname = this.lastName?.value;
        this.C.role = this.role?.value;
        this.C.email = this.email?.value;
        this.C.dept = this.departement?.value;
        this.C.hiring_date = this.hiringDate?.value;
        this.C.password = this.password?.value;
        console.log(this.C);

        this.userService.Update(this.C).subscribe((data) => {
          alert('User Updated Successfully');
          this.router.navigate(['/admin']);
        });
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
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
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
