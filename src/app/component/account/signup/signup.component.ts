import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  hide: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private userServices: UserService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.signUpForm()
  }

  signUpForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, this.validateUser]],
      password: ['', [Validators.required,
      Validators.maxLength(40),
      ]]
    })
  }

  validateUser(control: FormControl) {
    const trimmedValue = control.value.trim();
    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    if (!/^[a-zA-Z0-9]+$/.test(trimmedValue)) {
      return { invalidInput: true };
    }
    if (trimmedValue !== control.value) {
      control.setValue(trimmedValue);
    }
    return null;
  }

  get f(): { [key: string]: AbstractControl } { return this.form.controls; }

  onSubmit() {
    if (this.form.valid) {
      this.userServices.signup(this.form.value).subscribe(
        (res) => { console.log(res), this.router.navigateByUrl('/account/login') },
        (error) => { console.log(error), this.snackBar.showSnackBar('Invalid registration', 'OK', 'error') },
        () => { this.snackBar.showSnackBar('Your registration was Successful', 'OK', 'success') }
      )
    }
  }
}
