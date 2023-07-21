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
    if (screenWidth > 900) {
      return 'side'
    } else {
      return 'over'
    }
  }
  get show() {
    let token = localStorage.getItem('access-token')
    if (token == null) {
      return false
    }
    return true
  }
}
