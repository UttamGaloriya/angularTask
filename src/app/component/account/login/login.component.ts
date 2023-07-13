import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  hide: boolean = false;
  constructor(private fb: FormBuilder, private userServices: UserService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({

      username: ['', [Validators.required, this.validateUser]],
      password: ['', [Validators.required,
      //  Validators.minLength(8),
      Validators.maxLength(40),
        // Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
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
    console.log(this.form.value)
    this.userServices.login(this.form.value).subscribe((res) => { localStorage.setItem('access-token', res.token), this.router.navigateByUrl('/table') }
    )
    this.router.navigateByUrl('/table')
  }

}
