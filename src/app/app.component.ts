import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTask';

  get mobileQuery() {
    let screenWidth = window.innerWidth
    if (screenWidth > 700) {
      return 'side'
    } else {
      return 'over'
    }
  }
  toggle() {
    console.log()
  }
}
