import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
export interface userObj {
  name: string;
  username: string;
  id: number
}
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  form!: FormGroup;
  title = "Section Title";

  @Output() newCancelEvent = new EventEmitter<unknown>();
  @Input() user: userObj = {
    name: '',
    username: '',
    id: 1
  }

  constructor(private fb: FormBuilder, private userServices: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [this.user.username, [Validators.required]],
      name: [this.user.name, [Validators.required]]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log("Form submitted");
      console.log(this.form.value);
      this.userServices.updateUser(this.form.value, this.user.id).subscribe(
        (res) => { console.log(res), this.userServices.getUserList().subscribe((res) => { console.log(res) }) },
        error => console.log(error),
        () => console.log("done")
      )
    } else {
      alert('Please fill all fields');
    }
  }

  cancel() {
    this.newCancelEvent.emit()
  }

}
