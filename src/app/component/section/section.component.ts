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
  @Output() newSubmitEvent = new EventEmitter<unknown>();
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
    this.newSubmitEvent.emit(this.form)
  }

  cancel() {
    this.newCancelEvent.emit()
  }

}
