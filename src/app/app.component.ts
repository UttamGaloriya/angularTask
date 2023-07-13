import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTask';

  submitvalue(val: { value: string; }) {
    this.title = val.value
  }
}
