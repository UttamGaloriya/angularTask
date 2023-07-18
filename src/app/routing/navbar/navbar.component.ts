import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() newToggleEvent = new EventEmitter<unknown>();
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('access-token')
    this.router.navigateByUrl('/account/login')
  }

  toggle() {
    this.newToggleEvent.emit()
  }
}
