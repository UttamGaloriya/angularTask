import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
export interface userObj {
  name: string;
  username: string;
}
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  form!: FormGroup;

  @Output() newSubmitEvent = new EventEmitter<unknown>();
  @Output() newCancelEvent = new EventEmitter<unknown>();
  @Input() user: userObj = {
    name: '',
    username: '',
  }

  constructor(private fb: FormBuilder, private userServices: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [this.user.username, [Validators.required]],
      name: [this.user.name, [Validators.required]]
    });
  }

  //user name and input value ---> same button auto disable
  get editChange() {
    if (this.user.name != this.form.value.name || this.user.username != this.form.value.username) {
      return false
    } else {
      return true
    }
  }

  submit() {
    this.newSubmitEvent.emit(this.form)
  }

  cancel() {
    this.newCancelEvent.emit()
  }

}
