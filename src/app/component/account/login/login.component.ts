import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  hide: boolean = false;
  constructor(private fb: FormBuilder, private userServices: UserService, private router: Router, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.loginForm()
  }


  loginForm() {
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
    // if (!/^[a-zA-Z0-9]+$/.test(trimmedValue)) {
    //   return { invalidInput: true };
    // }
    if (trimmedValue !== control.value) {
      control.setValue(trimmedValue);
    }
    return null;
  }

  get f(): { [key: string]: AbstractControl } { return this.form.controls; }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.userServices.login(this.form.value).subscribe(
        (res) => { console.log(res), localStorage.setItem('access-token', res.token), this.router.navigateByUrl('/table') },
        (error) => { console.log(error.error.message), this.snackBar.showSnackBar(error.error.message, 'OK', 'error') },
        () => { this.snackBar.showSnackBar('Your login Successful', 'OK', 'success') }
      )
    }
  }
}
